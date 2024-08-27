import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Brands from './components/Brands/Brands';
import Categories from './components/Categories/Categories';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Notfound from './components/Notfound/Notfound';
import UserContextProvider from './Context/UserContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ProductDetalis from './components/ProductDetalis/ProductDetalis';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CartContextProvider from './Context/CartContext';
import toast, { Toaster } from 'react-hot-toast';
import ForgetPassword from './components/Login/ForgetPassword';
import ResetPassword from './components/Login/ResetPassword';
import Wishlist from './components/WishList/Wishlist';
import CheckOut from './components/CheckOut/CheckOut';
import PasswordProtected from './components/ProtectedRoute/PasswordProtected';
import RecentProduct from './components/RecentProduct/RecentProduct';
import Orderss from './components/Orderss/Orderss';

const query = new QueryClient();

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: "/", index: true, element: <ProtectedRoute> <Home /> </ProtectedRoute> },
      { path: 'products', element: <ProtectedRoute> <Products /> </ProtectedRoute> },
      { path: 'cart', element: <ProtectedRoute> <Cart /> </ProtectedRoute> },
      { path: 'brands', element: <ProtectedRoute> <Brands /> </ProtectedRoute> },
      { path: 'checkout', element: <ProtectedRoute> <CheckOut/> </ProtectedRoute> },
      { path: 'categories', element: <ProtectedRoute> <Categories /> </ProtectedRoute> },
      { path: 'wishlist', element: <ProtectedRoute> <Wishlist /> </ProtectedRoute> },
      { path: 'orderss', element: <ProtectedRoute> <Orderss/> </ProtectedRoute> },
      { path: 'productdetails/:id', element: <ProtectedRoute> <ProductDetalis /> </ProtectedRoute> },
      { path: 'recentproduct', element: <ProtectedRoute> <RecentProduct/> </ProtectedRoute> },
      { path: 'login', element: <Login /> },
      { path: 'forgetpassword', element: <ForgetPassword /> },
      { path: 'resetPassword', element: <PasswordProtected><ResetPassword /></PasswordProtected> },
      { path: 'register', element: <Register /> },
      { path: '*', element: <Notfound /> },
    ],
  },
]);

function App() {
  return (
    <CartContextProvider>  
      <QueryClientProvider client={query}>
        <UserContextProvider>
          <RouterProvider router={router}  />
          <Toaster />
          <ReactQueryDevtools initialIsOpen={false} />
        </UserContextProvider>
      </QueryClientProvider>
    </CartContextProvider>
  );
}

export default App;
