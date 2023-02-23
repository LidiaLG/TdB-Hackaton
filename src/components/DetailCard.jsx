import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MDBIcon } from 'mdb-react-ui-kit';


const DetailCard = (props) => {
    return (
        <>
            <Card className="p-1 m-4 mb-10" style={{ maxWidth: "30rem", height: "100%"}}>
                <Card.Img src={props.img} />
                <Card.Body>
                    <Card.Title style={{fontSize: '25px'}}>{props.title}</Card.Title>
                    <Card.Text>{props.descripcion}</Card.Text>
                    <Card.Text style={{fontSize: '20px', marginTop: '15px'}}>{props.precio}</Card.Text>
                    <Card.Body className="d-flex justify-content-around">
                        <Button className="rounded-8" style={{backgroundColor: '#C06500'}}>Comprar</Button>
                        <MDBIcon fas icon="heart" role='button' style={{color: '#C06500', fontSize: '40px'}}/>
                    </Card.Body>
                </Card.Body>
            </Card>
        </>
    )
}

export default DetailCard