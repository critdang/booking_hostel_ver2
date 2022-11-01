import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch
} from "react-router-dom";
import { createContext, useMemo, useState } from 'react';

import HomePage from './pages/home.page';
import ActivitiesPage from './pages/activities.page';
import About from './pages/about.page';
import Location from './pages/location.page';
import Cart from './pages/cart.page';
import Room from './pages/room.page'
import CartProvider from './context/cart/cart.provider';

function App() {
  return (
        <CartProvider>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/activities" element={<ActivitiesPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/location" element={<Location />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/room" element={<Room />} />
              </Routes>
            </Router>
      </CartProvider>
  );
}

export default App;
