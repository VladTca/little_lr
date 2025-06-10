// Define types for menu items and state
export interface MenuItem {
  id: number;
  img: string;
  price: string;
  dishUpper: string;
  dishLower: string;
  description: string;
  quantity: number;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface AppState {
  menuData: MenuItem[];
  cart: CartItem[];
}

const initialState: AppState = {
  menuData: [
    {
      id: 1,
      img: 'cheeseBread.JPG',
      price: '3.99',
      dishUpper: 'CHEESE BREAD',
      dishLower: 'Cheese Bread',
      description: 'Crispy, cheesy bread with tomatoes, yellow peppers, and fresh basil — simple, sunny, and delicious.',
      quantity: 0,
    },
    {
      id: 2,
      img: 'salad.JPG',
      price: '10.99',
      dishUpper: 'GREEK SALAD',
      dishLower: 'Greek Salad',
      description: 'risp cucumbers, juicy tomatoes, Kalamata olives, and feta — tossed in a zesty lemon-oregano dressing.',
      quantity: 0,
    },
    {
      id: 3,
      img: 'pasta.JPG',
      price: '18.99',
      dishUpper: 'PASTA MARGARITA',
      dishLower: 'Pasta Margarita',
      description: 'Al dente pasta in a light tomato-basil sauce,fresh mozzarella and a touch of olive oil.',
      quantity: 0,
    },
    {
      id: 4,
      img: 'fish.JPG',
      price: '21.99',
      dishUpper: 'TILAPIA LEMON FISH',
      dishLower: 'Tilapia Lemon fish',
      description: 'Tender tilapia fillet pan-seared with lemon, herbs, and a hint of garlic — light, zesty, and full of flavor.',
      quantity: 0,
    },
    {
      id: 5,
      img: 'oysters.JPG',
      price: '32.99',
      dishUpper: 'GRILLED OYSTERS',
      dishLower: 'Grilled Oysters',
      description: 'Char-grilled oysters with herbs, garlic butter, and a splash of lemon — smoky, rich, and irresistible.',
      quantity: 0,
    },
    {
      id: 6,
      img: 'potatoes.JPG',
      price: '4.99',
      dishUpper: 'HOME FRIES',
      dishLower: 'Home Fries',
      description: 'Crispy golden potatoes, pan-fried with herbs and a hint of spice — comfort food done right.',
      quantity: 0,
    },
  ],
  cart: [],
};

export default initialState;