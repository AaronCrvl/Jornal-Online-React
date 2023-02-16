import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function  Anotacoes() {
  return (    
    <Form className='p-3'>
        <Form style={{"float": "right"}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Encontrou algum problema? Qual?</Form.Label>
            <Form.Control type="email" placeholder="Email" />
            <Form.Text className="text-muted">
              Preencha com o erro encontrado
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Detalhes do Caso</Form.Label>
            <Form.Control type="email" placeholder="Caso" />
            <Form.Text className="text-muted">
              Seja breve e objetivo
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form> 
      </Form>
  );
}