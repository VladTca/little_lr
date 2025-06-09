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
      description: 'Our tasty cheesey bread, with chopped tomatoes, bazil leaves and yellow peppers.',
      quantity: 0,
    },
    {
      id: 2,
      img: 'salad.JPG',
      price: '10.99',
      dishUpper: 'GREEK SALAD',
      dishLower: 'Greek Salad',
      description: 'Salad with avocado, tomatoes, Bulgarian cheese, green peppers and onions, with our famous sauce.',
      quantity: 0,
    },
    {
      id: 3,
      img: 'pasta.JPG',
      price: '18.99',
      dishUpper: 'PASTA MARGARITA',
      dishLower: 'Pasta Margarita',
      description: 'A fresh hand made pasta with high quality tomatoes, bazil leaves and Parmezan cheese.',
      quantity: 0,
    },
    {
      id: 4,
      img: 'fish.JPG',
      price: '21.99',
      dishUpper: 'TILAPIA LEMON FISH',
      dishLower: 'Tilapia Lemon fish',
      description: 'Pan grilled tilapia with fresh herbs, olive and lemon, served with pan seared vegetables.',
      quantity: 0,
    },
    {
      id: 5,
      img: 'oysters.JPG',
      price: '32.99',
      dishUpper: 'GRILLED OYSTERS',
      dishLower: 'Grilled Oysters',
      description: 'Freshly caught grilled oysters with garlic, brandy and parmesan cheese served with vegetables.',
      quantity: 0,
    },
    {
      id: 6,
      img: 'potatoes.JPG',
      price: '4.99',
      dishUpper: 'HOME FRIES',
      dishLower: 'Home Fries',
      description: 'Our traditional sweet & sour potatoes with parmesan cheese, tomatoes and our secret herbs.',
      quantity: 0,
    },
  ],
  cart: [],
};

export default initialState;