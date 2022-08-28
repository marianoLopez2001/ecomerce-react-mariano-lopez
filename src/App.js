import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  return (
    <div>
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <ItemListContainer/>
      </main>
    </div>
  );
}

export default App;
