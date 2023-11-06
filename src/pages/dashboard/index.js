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
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className="cardDash">
      <Card.Body>
        <Card.Title>Despesas</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

      </Container>
    </div>
  );
}

export default Dashboard;
