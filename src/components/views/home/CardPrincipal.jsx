import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import styles from './Card.module.css'


const CardPrincipal = (props) => {
  return (
    <Card className={styles.card} >
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.precio}</Card.Text>
        <div className="d-flex justify-content-around mt-4 " style={{width: "100%"}} >
        <Link to="/product"> <Button className="rounded-8 mr-2" style={{backgroundColor: '#C06500'}}>Detalles</Button></Link>
        <MDBIcon fas icon="heart" role='button' style={{color: '#C06500', fontSize: '40px'}}/>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPrincipal;
