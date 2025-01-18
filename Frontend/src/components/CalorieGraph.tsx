import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { Item } from '../types';

interface CalorieGraphProps {
  data: Item[];
}

export const CalorieGraph: React.FC<CalorieGraphProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-gray-500">No data available to display.</p>;
  }

  // Transform the data for the graph
  const graphData = data.map(item => ({
    name: item.name,
    calories: item.calories * item.quantity,
  }));

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={graphData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="calories" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
