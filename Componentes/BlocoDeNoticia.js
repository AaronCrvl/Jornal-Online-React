import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Button, ListGroup, Modal} from 'react-bootstrap';  

export default function BlocoDeNoticia () {  
    const [isOpen = false, setIsOpen] = useState()   
    const handleOpen = () => { setIsOpen(true) }
    const handleClose = () => { setIsOpen(false) } 
        
    const RetornaTitulo = ()=>{
        let collection = document.getElementsByClassName('BlocoDeNoticia')
        for (let i = 0; i < collection.length; i++) {
            if(collection.item(i).accessKey !== undefined) {
                if(collection.item(i).accessKey === document.activeElement.accessKey) {                    
                    return collection.item(i).noticia.titulo                    
                }
            }
        }
    }

    const RetornaTexto = ()=>{
        let collection = document.getElementsByClassName('BlocoDeNoticia')
        for (let i = 0; i < collection.length; i++) {
            if(collection.item(i).accessKey !== undefined) {
                if(collection.item(i).accessKey === document.activeElement.accessKey) {                             
                    return collection.item(i).noticia.texto                    
                }
            }
        }
    }

    const RetornaFonte = ()=>{
        let collection = document.getElementsByClassName('BlocoDeNoticia')
        for (let i = 0; i < collection.length; i++) {
            if(collection.item(i).accessKey !== undefined) {
                if(collection.item(i).accessKey === document.activeElement.accessKey) {                                        
                    return (collection.item(i).noticia.fonte + ' - '
                            + (collection.item(i).noticia.autor === null ? '' : collection.item(i).noticia.autor)  + ' - '
                            + (collection.item(i).noticia.dataPublicacao === null ? '' : collection.item(i).noticia.dataPublicacao))
                }
            }
        }
    }

    const RetornaLinkExterno = ()=>{
        let collection = document.getElementsByClassName('BlocoDeNoticia')
        for (let i = 0; i < collection.length; i++) {
            if(collection.item(i).accessKey !== undefined) {
                if(collection.item(i).accessKey === document.activeElement.accessKey) {                                        
                    return collection.item(i).noticia.url                    
                }
            }
        }
    }
    
    setInterval(function adicionarEventListener () {                 
        const btnsExpandir  = document.querySelectorAll("#btnExpandir")        
        const btnsFechar = document.querySelectorAll("#btnFechar")         

        if(document.querySelectorAll("#btnFechar").length > 0) {
            for(const btnFechar of btnsFechar)
                btnFechar.addEventListener('click', handleClose);         
        }

        if(document.querySelectorAll("#btnAbrirNoticia").length > 0) {
            for(const btnAbrirNoticia of btnsFechar)
            {
                let link = RetornaLinkExterno()
                btnAbrirNoticia.setAttribute('href', link);                         
            }                
        }

        for (const btnExpandir of btnsExpandir) {
            btnExpandir.addEventListener('click', handleOpen);            
        }        
    }, 1000);
    
    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {RetornaTitulo()}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>
                {RetornaFonte()}         
              </h4>
              <p>{RetornaTexto()}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button id='btnFechar'>Fechar</Button>
              <Button id='btnAbrirNoticia' href={RetornaLinkExterno()} target='blank' variant="secondary">Abrir Link Completo</Button>
            </Modal.Footer>
          </Modal>
        );
    }    
    
    return (            
        <div>
            {/*Modal*/}
            {isOpen ? 
                (<div
                    className="modal show"
                    style={{ display: 'block' }}                    
                    >
                    <MyVerticallyCenteredModal
                        show={isOpen}
                        onHide={() => setIsOpen(false)}
                    />                
                </div>) : (<div></div>)                 
            }
            {/*Bloco de Notícia*/}
            <div className="BlocoDeNoticia" style={{"border": "ridge"}}>              
                <Container className='p-4' style={{"textAlling": "-webkit-center", widht: "-webkit-fill-available", display:"inline"}}>
                    <Col md="4" style={{width: "-webkit-fill-available"}}>  
                        <Card style={{"maxWidth": "fit-content"}}>                          
                            <Card.Img id='Imagem' variant="top" style={{"height": "600px", "width": "1200px", "placeSelf": "center"}}></Card.Img>                        
                            <Card.Body>  
                                <Card.Title id='Titulo' style={{"fontSize": "large-x"}}>Title</Card.Title>  
                                <Card.Text id='Texto' style={{"fontSize": "larger"}}>  
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna.
                                </Card.Text>                                                                                               
                            </Card.Body>                                                        
                            
                            <ListGroup>
                                <Button id="btnExpandir" variant="primary" value="Click to Open Popup">
                                    Expandir Noticia
                                </Button>                                                      
                            </ListGroup>                                                                        
                            <ListGroup variant="flush">
                                <ListGroup.Item id='Autor'>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item id='Data'>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item id='Fonte'>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>  
                        </Card>  
                    </Col>  
                </Container>  
            </div>  
        </div>
    ); 
}