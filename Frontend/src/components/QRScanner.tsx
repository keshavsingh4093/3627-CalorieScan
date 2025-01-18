import React, { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import type { QRData } from '../types';

interface Props {
  onResult: (data: QRData) => void;
}

export const QRScanner: React.FC<Props> = ({ onResult }) => {
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);
  const [isReady, setIsReady] = useState(false); 

  useEffect(() => {
    if (isReady && !scannerRef.current) {
      scannerRef.current = new Html5QrcodeScanner(
        'qr-reader',
        {
          fps: 10, 
          qrbox: { width: 250, height: 250 }, 
          aspectRatio: 1.0,
          formatsToSupport: ['QR_CODE'], 
        },
        false
      );

      // Render the scanner
      scannerRef.current.render(
        (decodedText) => {
          try {
            const data = JSON.parse(decodedText) as QRData;
            onResult(data); 
            scannerRef.current?.clear(); 
          } catch (error) {
            console.error('Invalid QR code data:', error);
            alert('Scanned QR code is not valid!');
          }
        },
        (error) => {
          console.error('QR code scanning failed:', error);
        }
      );
    }
    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear();
      }
    };
  }, [isReady, onResult]);

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        id="qr-reader"
        className="w-full"
        ref={() => setIsReady(true)} 
      />
      <p className="text-sm text-gray-600 text-center mt-4">
        Position the QR code within the frame to scan
      </p>
    </div>
  );
};
