import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

export default function Login(){
    
    return (
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
    </Container>
    );
}