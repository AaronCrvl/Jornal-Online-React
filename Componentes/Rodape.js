import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Rodape(){
    return(
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">            
            https://github.com/AaronCrvl?tab=repositories
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
}