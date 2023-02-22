import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardPrincipal = (props) => {
  return (
    <Card className="p-1" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.precio}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CardPrincipal;
