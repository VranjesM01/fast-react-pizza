import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './ui/Home';
import Error from './ui/Error';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import { action as updateOrderAction } from './features/order/UpdateOrder';

import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// 22 - React Router With Data Loading (v6.4+)

// 22 - 2 Setting Up a New Project: "Fast React Pizza Co." | 277
// 22 - 3 Application Planning | 278
// 22 - 4 Setting Up a Professional File Structure | 279
// 22 - 5 A New Way of Implementing Routes | 280
// 22 - 6 Building the App Layout | 281
// 22 - 7 Fetching Data With React Router "Loaders Pizza Menu" | 282
// 22 - 8 Displaying a Loading Indicator | 283
// 22 - 9 Handling Errors With Error Elements | 284
// 22 - 10 Fetching Orders | 285
// 22 - 11 Writing Data with React Router "Ations" | 286
// 22 - 12 Error Handling in Form Actions | 287

// 23 - TAILWIND CSS Crash Course
// 23 - 2 What is Tailwind CSS | 289
// 23 - 3 Setting Up Tailwind CSS | 290
// 23 - 4 Working With Color | 291
// 23 - 5 Styling Text | 292
// 23 - 6 The Box Model Spacing Borders and Display | 293
// 23 - 7 Responsive Design | 294
// 23 - 8 Using Flexbox | 295
// 23 - 9 Using CSS Grid | 296
// 23 - 10 Styling Buttons Element States and Transitions | 297
// 23 - 11 Styling Form Elements | 298
// 23 - 12 Reusing Styles With @apply | 299
// 23 - 13 Reusing Styles With React Components | 300
// 23 - 14 Absolute Positioning, z-index, and More | 301
// 23 - 15 Configuring Tailwind: Custom Font Family | 302
// 23 - 16 Styling the Menu | 303
// 23 - 17 Styling the Cart | 304
// 23 - 18 Styling the Order Form | 305
// 23 - 19 Styling the Order Overview | 306

// 24 - 1 ADDING REDUX and ADVANCED REACT ROUTER || 307
// 24 - 2 Modeling the "User" State With Redux Toolkit | 308
// 24 - 3 Reading and Updating the User State | 309
// 24 - 4 Modeling the "Cart" State | 310
// 24 - 5 Adding Menu Items to the Cart | 311
// 24 - 6 Building the Cart Overview With Redux Selectors | 312
// 24 - 7 Building the Cart Page | 313
// 24 - 8 Deleting Cart Items | 314
// 24 - 9 Updating Cart Quantities | 315
// 24 - 10 Using the Cart for New Orders | 316
// 24 - 11 Redux Thunks With createAsyncThunk | 317
// 24 - 12 Integrating Geolocation | 318
// 24 - 13 Fetching Data Without Navigation: useFetcher | 319
// 24 - 14 Updating Data Without Navigation | 320
