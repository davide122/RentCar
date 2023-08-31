import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../utlis/Rent_Car--removebg-preview.png"
const Mynav = () =>{
    return(
<Navbar expand="lg" className="mb-3 justify-content-center w-100 ">
      <Container>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-center w-100">
          <Navbar.Brand href="#home" className='text-light'>Car Rent</Navbar.Brand>
            <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-light'>Link</Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default Mynav;