import React, { useContext, useState } from 'react';

export const PokemonesContext = React.createContext();

export const usePokemonesContext = () => useContext(PokemonesContext);

export default function PokemonesProvider({children}) {
    const [pokemones , setPokemones] = useState([]);
    // Nuestro almacen de estado de compra
    // Funciona como nuestra propia API
    function add(nuevoPokemon) {
        if (!pokemones.find(i => i.id === nuevoPokemon.id)) {
            setPokemones([...pokemones, nuevoPokemon ])
        }
        // setPokemones([...pokemones, nuevoPokemon])
        // console.log('funciono?')
    }

    function remove(pokemonId) {
        setPokemones(pokemones.filter(pokemon => pokemon.id !== pokemonId))
        // console.log('Removiste el item:', itemId);
    }

    function removeAll() {
        setPokemones([])
    }

    return <PokemonesContext.Provider value={{ pokemones, 
            add, 
            remove, 
            removeAll, 
            size: pokemones.length,
            isEmpty: pokemones.length === 0,
            hasItem: pokemon => {
                return pokemones.find(i => i === pokemon);
            }
    }}>
        {children}
    </PokemonesContext.Provider>
}
