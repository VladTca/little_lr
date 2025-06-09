# TypeScript Conversion Guide

This guide provides instructions for converting the remaining JavaScript/JSX files to TypeScript.

## Files Already Converted

- ✅ package.json (updated)
- ✅ tsconfig.json (created)
- ✅ tsconfig.node.json (created)
- ✅ vite.config.ts (converted from vite.config.js)
- ✅ src/main.tsx (converted from main.jsx)
- ✅ src/App.tsx (converted from App.jsx)
- ✅ src/components/context/initialState.ts (converted from initialState.js)
- ✅ src/components/context/AppContext.tsx (converted from AppContext.jsx)
- ✅ src/components/Header/Nav.tsx (converted from Nav.jsx)
- ✅ src/components/Header/Header.tsx (converted from Header.jsx)
- ✅ src/assets/svg.tsx (converted from svg.jsx)
- ✅ src/components/Home/ratingsData.ts (converted from ratingsData.js)
- ✅ src/components/Order/useSearch.ts (converted from useSearch.js)
- ✅ src/components/Footer/Footer.tsx (converted from Footer.jsx)
- ✅ src/components/Home/HomePage.tsx (converted from HomePage.jsx)

## Files Still to Convert

The following files need to be converted from .jsx to .tsx:

- src/components/Home/About.jsx
- src/components/Home/AboutPage.jsx
- src/components/Home/Article.jsx
- src/components/Booking/BookingForm.jsx
- src/components/Booking/BookingPage.jsx
- src/components/Booking/Confirmation.jsx
- src/components/Menu/MenuPage.jsx
- src/components/Nav.jsx
- src/components/Order/OrderForm.jsx
- src/components/Order/OrderPage.jsx
- src/components/Home/Ratings.jsx
- src/components/Home/Specials.jsx
- src/components/Booking/bookingAPI.jsx
- src/components/Booking/fieldsValidation.jsx
- src/components/Booking/useSubmitForm.jsx

## Conversion Process

For each file, follow these steps:

1. Create a new file with the same name but with a .tsx extension
2. Add the following import at the top of the file:
   ```typescript
   import React from 'react';
   ```
3. Add type annotations to the component:
   ```typescript
   export default function ComponentName(): JSX.Element {
     // Component code
   }
   ```
4. Add type annotations to props:
   ```typescript
   interface ComponentProps {
     propName: propType;
     optionalProp?: optionalPropType;
   }
   
   export default function ComponentName({ propName, optionalProp }: ComponentProps): JSX.Element {
     // Component code
   }
   ```
5. Add type annotations to state:
   ```typescript
   const [state, setState] = useState<StateType>(initialState);
   ```
6. Add type annotations to functions:
   ```typescript
   function handleClick(): void {
     // Function code
   }
   
   function getData(): DataType {
     // Function code
     return data;
   }
   ```
7. Add type annotations to event handlers:
   ```typescript
   function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
     // Function code
   }
   
   function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
     e.preventDefault();
     // Function code
   }
   ```

## Common Types

- React event types:
  - `React.ChangeEvent<HTMLInputElement>`
  - `React.ChangeEvent<HTMLSelectElement>`
  - `React.ChangeEvent<HTMLTextAreaElement>`
  - `React.FormEvent<HTMLFormElement>`
  - `React.MouseEvent<HTMLButtonElement>`
  - `React.KeyboardEvent<HTMLInputElement>`

- HTML element types:
  - `HTMLInputElement`
  - `HTMLSelectElement`
  - `HTMLTextAreaElement`
  - `HTMLButtonElement`
  - `HTMLFormElement`
  - `HTMLDivElement`

## Testing

After converting all files, run the following commands to test the application:

```bash
npm install
npm run build
npm run dev
```

Make sure there are no TypeScript errors and the application works as expected.