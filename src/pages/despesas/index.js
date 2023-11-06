import NavbarHeader from "../../components/navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Despesas() {
  return (
    <>
      <NavbarHeader />
      <Container className="mt-3">
        <h2>Cadastro de despesas</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Descrição</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Valor</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Check type="switch" id="custom-switch" label="Despesa fixa " />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Parcelas</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Inicio da despesa</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Mês inicio</option>
              <option value="1">01 - Janeiro</option>
              <option value="2">02 - Fevereiro</option>
              <option value="3">03 - Março</option>
              <option value="4">04 - Abril</option>
              <option value="5">05 - Maio</option>
              <option value="6">06 - Junho</option>
              <option value="7">07 - Julho</option>
              <option value="8">08 - Agosto</option>
              <option value="9">09 - Setembro</option>
              <option value="10">10 - Outubro</option>
              <option value="11">11 - Novembro</option>
              <option value="12">12 - Dezembro</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <div className="d-grid gap-2">
            <Button variant="primary" size="sm">
              Adcicionar
            </Button>
          </div>
      </Container>
    </>
  );
}

export default Despesas;
