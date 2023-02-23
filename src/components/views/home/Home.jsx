import React from "react";
import Footer from "../../footer/Footer";
import NavbarTop from "../../navbar/Navbar";
import CardPrincipal from "./CardPrincipal";
import styles from './Home.module.css'
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div>
        
        <NavbarTop/>

        <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
          <Row>
            
             <h1 className={styles.h1}> Tu tienda de barrio al ancance de tu mano</h1>
           <Col>
            <CardPrincipal
                img="https://www.shbarcelona.es/blog/es/wp-content/uploads/2015/06/clases-guitarra-ensenada-mexico.jpg"
                title="Clases de guitarra"
                precio="15 €"
              /> 
          </Col>
          <Col>
            <CardPrincipal
              img="https://www.shbarcelona.es/blog/es/wp-content/uploads/2015/06/clases-guitarra-ensenada-mexico.jpg"
              title="Clases de guitarra"
              precio="15 €"/>
          </Col>
          <Col>
            <CardPrincipal
              img="https://www.shbarcelona.es/blog/es/wp-content/uploads/2015/06/clases-guitarra-ensenada-mexico.jpg"
              title="Clases de guitarra"
              precio="15 €"/>
          </Col>
          <Col>
            <CardPrincipal
              img="https://www.shbarcelona.es/blog/es/wp-content/uploads/2015/06/clases-guitarra-ensenada-mexico.jpg"
              title="Clases de guitarra"
              precio="15 €"/>
          </Col>
          <Col>
            <CardPrincipal
              img="https://www.shbarcelona.es/blog/es/wp-content/uploads/2015/06/clases-guitarra-ensenada-mexico.jpg"
              title="Clases de guitarra"
              precio="15 €"/>
          </Col>
          </Row>    
        </Container>

              <Footer/> 
    </div>
  );
};

export default Home;
