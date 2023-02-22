import React from "react";
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
    </div>
  );
};

export default Home;
