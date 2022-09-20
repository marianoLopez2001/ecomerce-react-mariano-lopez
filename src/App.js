import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Context from "./components/Context"

function App() {

  return (
    <Context>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/category/:idcategory' element={<ItemListContainer />} />
          <Route path='/product/:idproduct' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
