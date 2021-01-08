import './App.css';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import PokemonesProvider from './context/PokemonContext';

function App() {
  return (
    <PokemonesProvider defaultPokemon={[]}>
      <NavBar />
      <Main />
    </PokemonesProvider>
  );
}

export default App;
