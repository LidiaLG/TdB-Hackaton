import React from "react";
import Footer from "../../footer/Footer";
import NavbarTop from "../../navbar/Navbar";
import CardPrincipal from "./CardPrincipal";

const Home = () => {
  return (
    <div>

<NavbarTop/>

      <CardPrincipal
        img="https://www.shbarcelona.es/blog/es/wp-content/uploads/2015/06/clases-guitarra-ensenada-mexico.jpg"
        title="Clases de guitarra"
        precio="15 €"
      />
      <CardPrincipal />
      <Footer/> 
    </div>
  );
};

export default Home;
