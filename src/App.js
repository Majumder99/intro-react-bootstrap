import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Alert,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  CardProps,
  Card,
  CardImg,
  Form,
  FormGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form className="mb-4">
            <Row>
              <Col md>
                <FormGroup controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Example@gmail.com" />
                  <Form.Text className="text-muted">
                    We'll never share your email address, trust us!
                  </Form.Text>
                </FormGroup>
              </Col>
              <Col md>
                <FormGroup controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </FormGroup>
              </Col>
            </Row>
            <Button variant="secondary" type="submit">
              Login
            </Button>
          </Form>
          <Card className="mb-3" style={{ color: "#000" }}>
            <CardImg src="https://picsum.photos/200/50" />
            <Card.Body>
              <Card.Title>Card Example</Card.Title>
              <Card.Text>
                This is and example of react bootstrap cards
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          <Breadcrumb>
            <BreadcrumbItem active>Test1</BreadcrumbItem>
            <BreadcrumbItem>Test2</BreadcrumbItem>
            <BreadcrumbItem>Test3</BreadcrumbItem>
          </Breadcrumb>
          <Alert variant="success">This is a button</Alert>
          <Button>Click</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
