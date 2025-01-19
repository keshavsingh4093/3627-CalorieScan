export interface Item {
  name: string;
  quantity: number;
  calories: number;
}

export interface Dish {
  dishName: string;
  items: Item[];
}

export interface QRData {
  dishName: string;
  items: {
    name: string;
    quantity: number;
  }[];
}