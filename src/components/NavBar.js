import React, { useState } from 'react';
import { Container, Form, Navbar, Row } from 'react-bootstrap';

const NavBar = ({filterbySearch}) => {
  const [searchVal,setSearchVal]=useState('')
  const Onsearch = ()=>{
      filterbySearch(searchVal)
  }
  return (
    <Row>
      <Navbar bg='dark' variant='dark' expand="lg">
        <Container >
          <Navbar.Brand href="#">
            <div className='brand-color'>Nezha Restaurant</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex ms-auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className="mx-2"
                onChange={(e)=> setSearchVal(e.target.value)}
                value={searchVal}
              />
              <button onClick={()=> Onsearch('')} className='btn-search'>Search</button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
}

export default NavBar;
