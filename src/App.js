import React from 'react'
import BrowseByFletter from './components/BrowseByFletter';
import './App.css';
import {FormControl,Nav,Form,Navbar,Col,Row,Container} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"> 
    <img
        src="https://www.thecocktaildb.com/images/logo.png"
        width="280"
        height="100"
        className="d-inline-block align-top"
        alt=""
      /></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
     
    </Form>
  </Navbar>
  <br />
     </>   
     <Container>
     <Row>
    <Col><img src="https://www.thecocktaildb.com/images/cocktail_right.png
" alt="Pitch Right"/></Col>
    <Col><h1>Welcome to TheCocktailDB</h1></Col>
    <Col><img src="https://www.thecocktaildb.com/images/cocktail_right.png
" alt="Pitch Right"/></Col>
  </Row>
  </Container>
  <BrowseByFletter/>
    </div>
  );
}

export default App;
