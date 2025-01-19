import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import type { QRData } from '../types';

interface Props {
  dishData: QRData;
}

export const QRGenerator: React.FC<Props> = ({ dishData }) => {
  const qrData = JSON.stringify(dishData);

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 rounded-xl">
      <h3 className="text-lg font-semibold text-gray-900">{dishData.dishName} QR Code</h3>
      <div className="p-4 bg-white rounded-xl shadow-sm">
        <QRCodeSVG value={qrData} size={200} />
      </div>
      <div className="text-sm text-gray-600 text-center">
        Scan this code to view calorie details
      </div>
    </div>
  );
};