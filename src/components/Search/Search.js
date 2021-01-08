import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormControl, Button, InputGroup, Alert, Modal, Badge} from 'react-bootstrap';
import { usePokemonesContext } from '../../context/PokemonContext';

function Search() {
    const { add } = usePokemonesContext();
    const [showError , setShowError] = useState(true);
    const [showAlert , setShowAlert] = useState(false);
    const [pokemon, setPokemon] = useState({
        namePokemon: ''
    });
    const handleInputChange = (event) => {
        setPokemon({
            ...pokemon, [event.target.name] : event.target.value
        })
    }
    const inputPokemon = /^[a-zA-Z0-9]{1,20}$/;
    function buscarPokemon() {
        if (inputPokemon.test(pokemon.namePokemon)) {
            setShowError(true)
            let url = "https://pokeapi.co/api/v2/pokemon/"+pokemon.namePokemon;
            fetch(url)
            .then( response => response.json())
            .then( function (datos) {
                add(datos);
                setShowAlert(false)
            })
            .catch( error => (
                setShowAlert(true)
            ));
        } else {
            setShowError(false)
        }
    }

    return (
        <>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Buscar Pokemon..."
                aria-label="Buscar Pokemon..."
                aria-describedby="basic-addon2"
                onChange={handleInputChange}
                name="namePokemon"
                />
                <InputGroup.Append>
                    {/* <Button variant="outline-secondary" onClick={ () => {buscarPokemon()} } ><i class="fas fa-search"></i></Button> */}
                    <Button variant="outline-secondary" onClick={ () => {buscarPokemon()} } >Buscar</Button>
                </InputGroup.Append>
            </InputGroup>
            {
                (!showError) ? (
                    <Modal show={!showError} onHide={() => setShowError(true)}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <Badge variant="danger">
                                    Error de tipeo
                                </Badge>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            En la entrada de texto solo se admiten letras o números
                        </Modal.Body>
                    </Modal>
                ) : (
                    (showAlert) ? (
                        <Modal show={showAlert} onHide={() => setShowAlert(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    <Badge variant="danger">
                                        Error 404
                                    </Badge>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            Pokemon no encontrado...<br />
                            Intente buscar otro nombre o ID diferente
                            </Modal.Body>
                        </Modal>
                    ) : (
                        <Alert variant={'success'}>
                            Buscar Pokemon, ingresar un nombre o ID (número)<br />
                        </Alert>
                    )
                )
            }
        </>
    )
}

export default Search;