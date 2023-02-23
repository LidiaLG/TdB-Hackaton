import React from "react";
import { Container } from "react-bootstrap";
import DetailCard from "../DetailCard";
import Footer from "../footer/Footer";
import NavBar from "../navbar/Navbar";


export default function Product() {
    return (
      <>
        <NavBar/>
        <Container className="d-flex justify-content-center" >
        <DetailCard
          img="https://www.shbarcelona.es/blog/es/wp-content/uploads/2015/06/clases-guitarra-ensenada-mexico.jpg"
          title="Clases de guitarra"
          descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived"
          precio="15 €"
        />
        </Container>
        
        <Footer/>
      </>
    );
  }