import { React, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ControleCaixaPesquisa from '../Controles/ControleCaixaPesquisa'

export default function BarraDePesquisa() {
  const controle = new ControleCaixaPesquisa()
  
  return (
    <Form style={{ "height": "65px"}}>
      <Form.Text className="text-muted" style={{"display":"flex", "height": "min-content"}}>
              Busque tópicos, notícias de seu interesse.
      </Form.Text> 
      {/* A página é recarregada caso o usuário aperte enter na barra de pesquisa, ainda não tratado. */}
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{"display":"flex", "height": "min-content"}}>                        
          <Form.Control type="text" placeholder="Busca" style={{"display":"flex", "height": "min-content"}}></Form.Control>                                                           
          <Button variant="primary" onClick={()=>controle.preencherNoticia()} style={{"display":"flex", "height": "min-content"}}>Pesquisar</Button>
      </Form.Group>                    
    </Form>
  );
}