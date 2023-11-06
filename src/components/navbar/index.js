import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

function NavbarHeader() {

  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  const goDespesas = () => {
    navigate("/despesas");
  };
  const goReceitas = () => {
    navigate("/receitas");
  };

    return (
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Controla Gastos</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link  onClick={() => {goHome();}}>Inicio</Nav.Link>
                
                <NavDropdown title="Cadastrar" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => {goDespesas();}}>Despesas</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => {goReceitas();}}>
                    Receitas
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
  
  export default NavbarHeader;
  