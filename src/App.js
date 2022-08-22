import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  let greeting = {
    saludo: "buenas",
    despedida: "chau"
  }

  return (
    <div>
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <ItemListContainer color= {"white"} bgColor={"red"} item={greeting} />
      </main>
    </div>
  );
}

export default App;
