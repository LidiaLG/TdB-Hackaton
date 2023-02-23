import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {  AiFillHeart, } from "react-icons/ai";
import styles from './Card.module.css'


const CardPrincipal = (props) => {
  return (
    <Card className={styles.card} >
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.precio}</Card.Text>
        <Button variant="primary">Comprar</Button>
        <AiFillHeart className={styles.icon} />
      </Card.Body>
    </Card>
  );
};

export default CardPrincipal;
