import ControleBlocoInformativo from '../Controles/ControleBlocoInformativo';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export default class BlocoInformativo extends React.Component {
    render() { 
        const ct = new ControleBlocoInformativo()            

        return(   
            <div>
                <ListGroup className='BlocoSelecao' style={{"maxWidth": "max-content", "float":"left"}}>
                    <ListGroup.Item variant="secondary">
                        <h4>Tópicos</h4>
                    </ListGroup.Item>
                    <ListGroup.Item >
                        <Button variant="light" onClick={()=> {ct.preencherBlocoInformativo('business')}}>Negócios</Button>                    
                    </ListGroup.Item>
                    <ListGroup.Item >
                        <Button variant="light" onClick={()=> {ct.preencherBlocoInformativo('entertainment')}}>Entretenimento</Button>                                        
                    </ListGroup.Item>
                    <ListGroup.Item >
                        <Button variant="light" onClick={()=> {ct.preencherBlocoInformativo('general')}}>Geral</Button>                                
                    </ListGroup.Item>
                    <ListGroup.Item >
                        <Button variant="light" onClick={()=> {ct.preencherBlocoInformativo('health')}}>Saúde</Button>                                                                      
                    </ListGroup.Item>
                    <ListGroup.Item >
                        <Button variant="light" onClick={()=> {ct.preencherBlocoInformativo('science')}}>Ciência</Button>
                    </ListGroup.Item>
                    <ListGroup.Item >
                        <Button variant="light" onClick={()=> {ct.preencherBlocoInformativo('sports')}}>Esportes</Button>                                     
                    </ListGroup.Item>
                    <ListGroup.Item >
                        <Button variant="light" onClick={()=> {ct.preencherBlocoInformativo('technology')}}>Tecnologia</Button>                                        
                    </ListGroup.Item>                    
                    
                    <Container></Container>

                    <ListGroup className='BlocoInformativo' style={{"maxWidth": "max-content", "float":"left"}}>
                        <ListGroup.Item variant="success">
                            <h4>Informativo</h4>
                        </ListGroup.Item>
                        <ListGroup.Item >
                            <Button variant="success">Versão 2.0.2.2023</Button>                    
                        </ListGroup.Item>                                                           
                    </ListGroup>    
                </ListGroup>                          

                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Página Inicial</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://github.com/AaronCrvl?tab=repositories&q=&type=&language=&sort=stargazers" target="_blank">Projetos</Nav.Link>
                    </Nav.Item>                 
                </Nav>                
            </div>         
        );
    }
}