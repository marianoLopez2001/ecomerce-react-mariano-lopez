import './App.css';
// import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <div>
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <ItemDetailContainer />
        {/* <ItemListContainer/> */}
      </main>
    </div>
  );
}

export default App;
