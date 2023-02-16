import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import BarraDePesquisa from './BarraDePesquisa';

export default function BarraDeNavegacao () {    
    return (
        <Navbar style={{"borderBottom": "groove", "backgroundColor": "lightgrey"}}>
            <Container style={{ "height": "65px"}}>
                <Navbar.Brand href="#home">Now News 2.0</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">                                            
                </Navbar.Collapse>
                <BarraDePesquisa></BarraDePesquisa>
            </Container>
        </Navbar>
    );
}