import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardColumns } from 'react-bootstrap';
import { usePokemonesContext } from '../../context/PokemonContext';
import CardPokemon from '../CardPokemon/CardPokemon';

function CardList() {
  const { size , pokemones } = usePokemonesContext();

  return (
    <>
    <CardColumns>
      {
        (size === 0) ? (
          ''
          ) : (
          pokemones.map(pokemon => {
            return <CardPokemon key={pokemon.id} pokemon={pokemon}/>
          })
          )
      }
    </CardColumns>
    </>
  );
}

export default CardList;