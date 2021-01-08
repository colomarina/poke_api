import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card , Button, Col , Row} from 'react-bootstrap';
function CardPokemon(pokemon) {
  const tituloStyle = {
    textAlign: 'center',
  }
  return (
    <>
      <Card border="info" key={pokemon.pokemon.id}>
        <Card.Img variant="top" src={pokemon.pokemon.sprites.front_default}/>
        <Card.Header style={tituloStyle}>
          Pokémon<br/>{pokemon.pokemon.name.toUpperCase()}
        </Card.Header>
        <Card.Body>
          {/* <Card.Title style={tituloStyle}>Pokémon<br/>{pokemon.pokemon.name.toUpperCase()}</Card.Title> */}
          Pokemon N° {pokemon.pokemon.id}
            <br />
            Altura: {pokemon.pokemon.height}
            <br />
            Peso: {pokemon.pokemon.weight}
            <br />
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col>
            {/* Hacerlo con Modal */}
              <Button variant="info" size='lg'>Ver mas caracteristicas</Button>
            </Col>
            <Col>
            {/* Eliminar de la lista! */}
              <Button variant="danger" size='lg'>Borrar de la lista</Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
}

export default CardPokemon;