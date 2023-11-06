import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import NavbarHeader from "../../components/navbar";
import './index.css';

function Dashboard() {
  return (
    <div>
     <NavbarHeader/>
     

      <Container className="bodyDash">
    <br></br>
      <Card style={{ width: '18rem' }} className="cardDash">
      <Card.Body>
        <Card.Title>Receitas </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">R$ 0.00</Card.Subtitle>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className="cardDash">
      <Card.Body>
        <Card.Title>Despesas</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">R$ 0.00</Card.Subtitle>
      </Card.Body>
    </Card>

      </Container>
    </div>
  );
}

export default Dashboard;
