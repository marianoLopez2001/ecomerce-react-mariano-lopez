import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes, BrowserRouter} from "react-router-dom"
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:idcategory' element={<ItemListContainer />} />
        <Route path='/product/:idproduct' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
