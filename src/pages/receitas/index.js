import NavbarHeader from "../../components/navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

function Receitas() {
  return (
    <>
      <NavbarHeader />
      <Container>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Descrição</Form.Label>
            <Form.Control type="text"  />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Valor</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Check 
        type="switch"
        id="custom-switch"
        label="Receita fixa "
      />
      <br></br>
      <div className="d-grid gap-2">
      <Button variant="primary" size="sm">
        Adcicionar
      </Button>
      </div>
        </Form>
      </Container>
    </>
  );
}

export default Receitas;
