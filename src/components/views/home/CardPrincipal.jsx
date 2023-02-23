import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {  AiFillHeart, } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from './Card.module.css'


const CardPrincipal = (props) => {
  return (
    <Card className={styles.card} >
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.precio}</Card.Text>
        <div className="d-flex justify-content-between mt-4" >
        <Link to="/product"> <Button className="rounded-8 mt-2" style={{backgroundColor: '#C06500'}} variant="primary">Detalles</Button></Link>
        <AiFillHeart className={styles.icon} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPrincipal;
