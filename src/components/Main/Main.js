import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import Search from '../Search/Search';
import CardList from '../CardList/CardList';


function Main() {
    return (
        <>
            <br></br>
            <Container fluid="sm">
                <Row>
                    <Col><Search /></Col>
                </Row>
                <Row>
                    <CardList />
                </Row>
            </Container>
        </>
    )
}

export default Main;