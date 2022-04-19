import React from "react";
import Logo from '../components/header/Logo';
// import themovie_logo from 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg'

function Footer() {
  return (
    <div className="footer">
        <Logo/>
        <div className="footer-droit-auteur-section">
        Copyright © 2021 HappyStream
        AllRight reserved.
        </div>
        <div>
          <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg" alt="Logo de l'API The movie DB" 
            className="img_logo"
          />
        </div>
        <div>
          This site uses TMB's API
        </div>
     
    </div>
  );
}

export default Footer;
