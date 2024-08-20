import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from './Loading';
import Header from './Components/Header/Header';
import About from './Components/Navbar/About';
import Contact from './Components/Navbar/Contact';
import Cart from './Components/cards/Cart';
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import Home from './Components/Home/Home';
import Product from './Components/Navbar/Product';
import Navigation from './Components/Header/Navigation';
import { useEffect, useState } from 'react';
import NotFound from './NotFound';
import GoTotop from './GoTotop';
import ScrollIndicator from './ScrollIndicator';

function App() {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 7000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Loading /> 
      ) : (
        <>
          <Header />
          <Navigation />
          <ScrollIndicator/>
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='product' element={<Product />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/login' element={<Login />} />
              <Route path='register' element={<Register />} />
              <Route path='*' element={<NotFound/>}/>
            </Routes>
            <GoTotop />
          </main>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
