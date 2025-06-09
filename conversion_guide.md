# Conversion Guide: Context API to Redux and BrowserRouter to HashRouter

This document outlines the changes made to convert the Little Lemon Restaurant application from using React Context API to Redux for state management, and from BrowserRouter to HashRouter for routing.

## Changes Made

### 1. Dependencies Added
- Added Redux and related packages:
  - redux
  - react-redux
  - @reduxjs/toolkit

### 2. Redux Implementation
- Created a Redux store in `src/redux/store.ts`
- Created slices for different parts of the state:
  - `src/redux/slices/menuSlice.ts` - Manages menu data
  - `src/redux/slices/cartSlice.ts` - Manages cart items
- Created typed hooks in `src/redux/hooks.ts` for better TypeScript support

### 3. Router Changes
- Replaced `BrowserRouter` with `HashRouter` in `src/main.tsx`

### 4. Component Updates
- Updated `App.tsx` to remove the `AppProvider`
- Updated `MenuPage.tsx` to use Redux instead of Context
- Updated `OrderPage.tsx` to use Redux actions and selectors
- Updated `useSearch.ts` to use Redux selectors

## Benefits of the Changes

### Redux Benefits
1. **Centralized State Management**: All application state is now managed in a single store
2. **Predictable State Updates**: State changes follow a strict unidirectional data flow
3. **Developer Tools**: Redux DevTools provide powerful debugging capabilities
4. **Middleware Support**: Easy to add middleware for logging, crash reporting, etc.
5. **Scalability**: Better structure for larger applications

### HashRouter Benefits
1. **Works with Static File Serving**: No need for server-side configuration
2. **Better for GitHub Pages**: Works well with static hosting services
3. **Consistent Across Environments**: Same behavior in development and production

## How to Use the New Implementation

### Accessing State
```typescript
import { useAppSelector } from '../redux/hooks';

// In a component
const { menuData } = useAppSelector(state => state.menu);
const cart = useAppSelector(state => state.cart.cart);
```

### Dispatching Actions
```typescript
import { useAppDispatch } from '../redux/hooks';
import { addToCart, removeFromCart } from '../redux/slices/cartSlice';

// In a component
const dispatch = useAppDispatch();

// Add to cart
dispatch(addToCart(item));

// Remove from cart
dispatch(removeFromCart(itemId));
```