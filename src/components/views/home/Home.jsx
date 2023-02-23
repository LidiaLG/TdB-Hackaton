import React from "react";
import Footer from "../../footer/Footer";
import NavbarTop from "../../navbar/Navbar";
import CardPrincipal from "./CardPrincipal";
import styles from './Home.module.css'

const Home = () => {
  return (
    <div>

<NavbarTop/>
<h1 className={styles.h1}> Tu tienda de barrio al ancance de tu mano</h1>

      <CardPrincipal
        img="https://www.shbarcelona.es/blog/es/wp-content/uploads/2015/06/clases-guitarra-ensenada-mexico.jpg"
        title="Clases de guitarra"
        precio="15 €"
      />
      <CardPrincipal
      img="https://www.shbarcelona.es/blog/es/wp-content/uploads/2015/06/clases-guitarra-ensenada-mexico.jpg"
      title="Clases de guitarra"
      precio="15 €"/>

<CardPrincipal
      img="https://www.shbarcelona.es/blog/es/wp-content/uploads/2015/06/clases-guitarra-ensenada-mexico.jpg"
      title="Clases de guitarra"
      precio="15 €"/>

<CardPrincipal
      img="https://www.shbarcelona.es/blog/es/wp-content/uploads/2015/06/clases-guitarra-ensenada-mexico.jpg"
      title="Clases de guitarra"
      precio="15 €"/>

<CardPrincipal
      img="https://www.shbarcelona.es/blog/es/wp-content/uploads/2015/06/clases-guitarra-ensenada-mexico.jpg"
      title="Clases de guitarra"
      precio="15 €"/>
      <Footer/> 
    </div>
  );
};

export default Home;
