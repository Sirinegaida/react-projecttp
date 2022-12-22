import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'antd/dist/antd.min.css';
import './App.css';
import Home from './Home';
import Products from './Products';
import Login from './Login';
import Register from './Register';
import Wishlist from './Wishlist';
import Customers from './Customers';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
              <Home />
            } />
          <Route path="/products" element={
              <Products />
            } />
            <Route path="/Wishlist" element={
              <Wishlist />
            } />
            <Route path="/customers" element={
              <Customers />
            } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

