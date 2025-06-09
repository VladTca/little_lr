import {createContext, Dispatch, JSX, ReactNode, useReducer} from "react";
import initialState, {AppState, CartItem, MenuItem} from "./initialState";

// Define action types
type AddToCartAction = {
  type: 'ADD_TO_CART';
  payload: MenuItem;
};

type RemoveFromCartAction = {
  type: 'REMOVE_FROM_CART';
  payload: number; // item id
};

type AppAction = AddToCartAction | RemoveFromCartAction;

// Define context type
interface AppContextType {
  cart: CartItem[];
  menuData: MenuItem[];
  dispatch: Dispatch<AppAction>;
}

const AppReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      { 
        const inCart = state.cart.find(item => item.id === action.payload.id);
        if (inCart) {
          return {
            ...state,
            cart: state.cart.map(item =>
              item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item
            )
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, {...action.payload, quantity: 1}]
          }
        }; 
      }
    case 'REMOVE_FROM_CART':
      { 
        let items = state.cart.filter(item => item.id !== action.payload);
        return {
          ...state,
          cart: [...items]
        }; 
      }
    default:
      return state;
  };
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{
      cart: state.cart,
      menuData: state.menuData,
      dispatch
    }}>
      {children}
    </AppContext.Provider>
  )
};