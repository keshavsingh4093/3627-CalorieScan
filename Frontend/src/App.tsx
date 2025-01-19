import { useState } from 'react';
import { QRScanner } from './components/QRScanner';
import { QRGenerator } from './components/QRGenerator';
import { DishDisplay } from './components/DishDisplay';
import { CalorieGraph } from './components/CalorieGraph'; // Importing the graph component
import { QrCode, UtensilsCrossed, Plus, History, BarChart3, Settings } from 'lucide-react';
import type { Item, QRData } from './types';

// Sample dish data for QR generation
// const SAMPLE_DISHES: QRData[] = [
//   {
//     dishName: "Idli Vada Combo",
//     items: [
//       { name: "Idli", quantity: 2 },
//       { name: "Vada", quantity: 1 },
//       { name: "Sambhar", quantity: 1 },
//       { name: "Chutney", quantity: 1 }
//     ]
//   },
//   {
//     dishName: "Masala Dosa Plate",
//     items: [
//       { name: "Masala Dosa", quantity: 1 },
//       { name: "Sambhar", quantity: 1 },
//       { name: "Chutney", quantity: 1 }
//     ]
//   },
//   {
//     dishName: "Dal Rice",
//     items: [
//       { name: "Dal", quantity: 2 },
//       { name: "Rice", quantity: 1 }
//     ]
//   },
//   {
//     dishName: "Veg Thaali",
//     items: [
//       { name: "panneer curry", quantity: 1 },
//       { name: "Seasonal Veg Curry", quantity: 1 },
//       { name: "Seasonal Veg Curry", quantity: 1 }
//     ]
//   },
// ]

const SAMPLE_DISHES = await fetch("http://localhost:8800/dishes").then(res => res.json());
await console.log(SAMPLE_DISHES);

// Simulated calorie data
// const CALORIE_DATA: Record<string, number> = {
//   'Idli': 100,
//   'Vada': 200,
//   'Sambhar': 120,
//   'Chutney': 80,
//   'Masala Dosa': 250,
//   'Rice': 300,
//   'Dal': 115,
//   'panneer curry': 200,
//   'Seasonal Veg Curry': 105,
//   'papad': 90,
//    'Gulab Jamun':200,
//    'Raitan':70,
//    'Soup':70,
//    'chapatai':150,
//    'pickle': 15,
// };

const CALORIE_DATA = await fetch("http://localhost:8800/dishes/calories").then((res) => res.json());
console.log(CALORIE_DATA);

function App() {
  const [isScanning, setIsScanning] = useState(false);
  const [showQRGenerator, setShowQRGenerator] = useState(false);
  const [selectedDish, setSelectedDish] = useState<QRData | null>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [dishName, setDishName] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'scan' | 'generate' | 'history' | 'graph'>('scan');


  // const handleScan = (data: QRData) => {
  //   setDishName(data.dishName);
  //   const itemsWithCalories = data.items.map((item) => ({
  //     ...item,
  //     calories: CALORIE_DATA[item.name] || 0,
  //   }));
  //   setItems(itemsWithCalories);
  //   setIsScanning(false);
  // };

  const handleScan = (data) => {
    setDishName(data.name);
    const itemsWithCalories = data.ingredients.map(item => ({
      ...item,
      calories: CALORIE_DATA[item.name] || 0,
    }));
    setItems(itemsWithCalories);
    setIsScanning(false);
  };

  const handleUpdateQuantity = (itemName: string, newQuantity) => {
    setItems(items.map(item => 
      item.name === itemName ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleSelectDish = (dish: QRData) => {
    setSelectedDish(dish);
  };

  const totalCaloriesToday = items.reduce((sum, item) => sum + (item.calories * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-20 bg-white shadow-lg flex flex-col items-center py-8 space-y-8">
        <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
          <UtensilsCrossed className="w-8 h-8 text-white" />
        </div>
        <nav className="flex-1 flex flex-col items-center space-y-6">
          <button
            onClick={() => setActiveTab('scan')}
            className={`p-3 rounded-xl transition-colors ${
              activeTab === 'scan' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:text-green-600'
            }`}
          >
            <QrCode className="w-6 h-6" />
          </button>
          <button
            onClick={() => setActiveTab('generate')}
            className={`p-3 rounded-xl transition-colors ${
              activeTab === 'generate' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:text-green-600'
            }`}
          >
            <Plus className="w-6 h-6" />
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`p-3 rounded-xl transition-colors ${
              activeTab === 'history' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:text-green-600'
            }`}
          >
            <History className="w-6 h-6" />
          </button>
          <button
            onClick={() => setActiveTab('graph')}
            className={`p-3 rounded-xl transition-colors ${
              activeTab === 'graph' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:text-green-600'
            }`}
          >
            <BarChart3 className="w-6 h-6" />
          </button>
        </nav>
        <button className="p-3 text-gray-400 hover:text-green-600 transition-colors">
          <Settings className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content */}
      <div className="ml-20 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Calorie Tracker Dashboard</h1>
            <p className="text-gray-600 mt-2">Track and manage your daily calorie intake</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-500 text-sm font-medium">Today's Calories</h3>
                <BarChart3 className="w-5 h-5 text-green-600" />
              </div>
              <p className="mt-2 text-3xl font-bold text-gray-900">{totalCaloriesToday} cal</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-500 text-sm font-medium">Scanned Items</h3>
                <QrCode className="w-5 h-5 text-green-600" />
              </div>
              <p className="mt-2 text-3xl font-bold text-gray-900">{items.length}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-500 text-sm font-medium">Daily Goal</h3>
                <Plus className="w-5 h-5 text-green-600" />
              </div>
              <p className="mt-2 text-3xl font-bold text-gray-900">2000 cal</p>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            {activeTab === 'scan' && (
              <div>
                {/* Scan QR Code */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Scan QR Code</h2>
                  <button
                    onClick={() => setIsScanning(!isScanning)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                  >
                    <QrCode className="w-5 h-5" />
                    {isScanning ? 'Cancel Scan' : 'Start Scan'}
                  </button>
                </div>
                {isScanning ? (
                  <QRScanner onResult={handleScan} />
                ) : items.length > 0 ? (
                  <DishDisplay items={items} onUpdateQuantity={handleUpdateQuantity} />
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    Click "Start Scan" to begin scanning a QR code
                  </div>
                )}
              </div>
            )}

            {activeTab === 'generate' && (
              <div>
                {/* Generate QR Code */}
                <h2 className="text-xl font-semibold mb-6">Generate QR Code</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Select a Dish</h3>
                    <div className="space-y-4">
                      {
                        SAMPLE_DISHES.map((dish) => (
                        <button
                          key={dish.name}
                          onClick={() => handleSelectDish(dish)}
                          className={`w-full p-4 rounded-lg shadow-sm text-left transition-all ${
                            selectedDish?.name === dish.name
                              ? 'bg-green-50 border-2 border-green-500'
                              : 'bg-gray-50 hover:bg-gray-100'
                          }`}
                        >
                          <h4 className="font-semibold">{dish.dishName}</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            {dish.ingredients.map(item => `${item.quantity}x ${item.ingredient.name}`).join(', ')}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    {selectedDish && <QRGenerator dishData={selectedDish} />}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'history' && (
              <div>
                {/* Scan History */}
                <h2 className="text-xl font-semibold mb-6">Scan History</h2>
                <div className="text-center py-12 text-gray-500">
                  Your scan history will appear here
                </div>
              </div>
            )}

            {activeTab === 'graph' && (
              <div>
                {/* Daily Calorie Intake Graph */}
                <h2 className="text-xl font-semibold mb-6">Daily Calorie Intake Graph</h2>
                <CalorieGraph data={items} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
