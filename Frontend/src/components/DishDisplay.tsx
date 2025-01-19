import React from 'react';
import { Plus, Minus } from 'lucide-react';
import type { Item } from '../types';

interface Props {
  items: Item[];
  onUpdateQuantity: (itemName: string, newQuantity: number) => void;
}

export const DishDisplay: React.FC<Props> = ({ items, onUpdateQuantity }) => {
  const totalCalories = items.reduce((sum, item) => sum + (item.calories * item.quantity), 0);

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl transition-all hover:shadow-md"
          >
            <div>
              <h3 className="font-medium text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-600">
                {item.calories} cal × {item.quantity} = {item.calories * item.quantity} cal
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => onUpdateQuantity(item.name, Math.max(0, item.quantity - 1))}
                className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-5 h-5" />
              </button>
              
              <span className="w-8 text-center font-medium">{item.quantity}</span>
              
              <button
                onClick={() => onUpdateQuantity(item.name, item.quantity + 1)}
                className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 bg-green-50 rounded-xl border border-green-200">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-900">Total Calories</span>
          <span className="text-2xl font-bold text-green-600">{totalCalories} cal</span>
        </div>
      </div>
    </div>
  );
};