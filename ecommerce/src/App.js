import './App.css';
import NavBar from './Components/NavBar';
import FooTer from './Components/FooTer';
import Cart from './Components/Cart';
import ProductOverview from './Components/ProductOverview';
import Home from './Components/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import SignIn from './Components/SignIn';
import Login from './Components/Login';

function App() {
  return (
    <>
      {/* Set up the application routing using the Router component */}
      <Router>
        <NavBar title={'Drop'} />
        <Routes>
          {/* Define routes for different components */}
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/cart" element={<Cart />} /> {/* Cart page */}
          <Route path="/productOverview" element={<ProductOverview />} /> {/* Product Overview page */}
          <Route path="/signin" element={<SignIn />} /> {/* Sign-in page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
        </Routes>
        <FooTer />
      </Router>
    </>
  );
}

export default App;
