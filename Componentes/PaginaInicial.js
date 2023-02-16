import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Login from './Login'
import ApiNoticias from '../api/ApiNoticias';
import BarraDeNavegacao from './BarraDeNavegacao';
import GridNoticias from './GridNoticias';
import BlocoInformativo from './BlocoInformativo';
import Rodape from './Rodape';

export default function PaginaInicial () {
    const api = new ApiNoticias()    
    const [logado, setLogado] = useState()
    const handleLog = () => { setLogado(true) }    
    global.APIKEY = ""

    function PegaChaveAPI(){
        let chaveUsuario = document.querySelector("#CampoChaveAPI").value
        if(chaveUsuario !== undefined && chaveUsuario !== null){
            console.log(api.TestaChaveAPI(chaveUsuario))
            let retorno = api.TestaChaveAPI(chaveUsuario)
            console.log(retorno)
            if(retorno === true)           
                handleLog()
            else 
            {}
        }        
    }

    return (                        
        true ?
            (
                <div className='PaginaInicial'>
                    <BarraDeNavegacao/>         
                    <BlocoInformativo/>           
                    <GridNoticias/>  
                    <Rodape/> 
                </div> 
            )
            :
            (
                <div>
                <Container className='p-4'>  
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>API Key</Form.Label>
                                <Form.Control id="CampoChaveAPI" type="text" placeholder="Insira a chave da api" />
                                <Form.Text className="text-muted">
                                link: https://newsapi.org/
                                </Form.Text>
                            </Form.Group>
            
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Validar" />
                            </Form.Group>
                            <Button variant="primary" onClick={()=> {PegaChaveAPI()}}>                                
                                Acessar                                
                            </Button>
                        </Form>
                </Container>
                </div>
            )
    );    
}