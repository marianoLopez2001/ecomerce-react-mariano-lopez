import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';

function App() {

  return (
    <div>
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <ItemListContainer color={"white"} bgColor={"red"} />
        <ItemCount/>
      </main>
    </div>
  );
}

export default App;
