import logo from './logo.svg';
import './App.css';
import { ContainerProducts } from './components/containerProducts';
import { NavBar } from './components/navbar';
import { Products } from './pages/products/products';
import { Routes, Route } from 'react-router-dom';
import { AddProducts } from './pages/products/add_products';



function App() {
  return (
    <div className='general-container'>
      <NavBar/>
      <div className='mt-28 '>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/new-product' element={<AddProducts/>}/>
          {/* <Route path='/new-product' element={<AddProducts/>}/> */}
        </Routes>
      </div>
      {/* <PseudoLogin/> */}
    </div>
  );
}

export default App;


