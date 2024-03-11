import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import SignupPage from './Pages/SignupPage/SignupPage';
import SigninPage from './Pages/SigninPage/SigninPage';
import HomePage from './Pages/HomePage/HomePage';
import ProductList from './Components/ProductList/ProductList';
import Aside from './Components/Aside/Aside';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Admin from './Admin/Admin';
import AddProduct from './Admin/AddProduct';
import EditProduct from './Admin/EditProduct';


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
      setSearchTerm(term);
  };
  return (
    <div className="app">
      <Admin/>
      {/* <BrowserRouter>
        <Header onSearch={handleSearch}/>
        <Routes>
          <Route path='/'element={<HomePage/>}/>
          <Route path='/dangnhap' element={<SigninPage/>}/>
          <Route path='/dangky' element={<SignupPage/>}/>
        </Routes>
      </BrowserRouter>
      <div className="container d-flex">
        <Aside/>
        <div className="banner-product col-10">
          <Banner/>
          <ProductList searchTerm={searchTerm}/>
        </div>
      </div>
      <Footer/> */}
    </div>
  );
}

export default App;
