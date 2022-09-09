import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/category/:idcategory' element={<ItemListContainer />} />
        <Route path='/product/:idproduct' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
