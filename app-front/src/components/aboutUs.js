/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Footer from './footer';
import img from '../images/logos.png';
import Button from "react-bootstrap/Button";
import { useNavigate  } from "react-router-dom";

function AboutUs(){
    const navigate = useNavigate();
    return(
        <div>
           <header>
            <span>
                <img src={img} width="25%"/>
            </span>
            <span style={{marginLeft: "25%", alignItems: "center", justifyContent: "space-around"}}>
                <span>
                    <label onClick={() => navigate("/home")}>
                        Accueil
                    </label>
                </span>
                <span style={{margin:15}}>
                    <label label onClick={() => navigate("/contact")}>
                        Nous contacter
                    </label>
                </span>
                <span style={{margin:15}}>
                    <Button onClick={() => navigate("/inscription")} style={{width:80, height: 30, background: ' #1846a3 ', color: 'white', border: 'none'}}>
                        S'inscrire
                    </Button> 
                </span>
                <span>
                    <Button onClick={() => navigate("/login")} style={{width:100, height: 30, background: ' #1846a3 ', color: 'white', border: 'none'}}>
                        Se connecter
                    </Button>
                </span>
            </span>
        </header>
        <br/><br/><br/>
        <body>
            <div className="aboutUs">
                <p>
                    <b>
                        Qui suis je ?
                    </b>
                </p>
                <p>
                    E-Polytech, le 1er site E-commerce du réseau Polytech a vu le jour en 2022, à la Roche-sur-Yon, en France. Créé par SAMB Penda <br/>
                    avec l’envie de donner aux étudiants du réseau Polytech la facilité d’acheter les produits de leur BDE.<br/>
                </p>
                    
                <p>
                    Mon rêve était tout simple, aider les BDE du réseau Polytech à vendre leurs créations à leur façon.<br/>
                    Aujourd’hui, je connecte plus de 10 BDE comme celui de Polytech-Paris. La créativité des étudiants a enfin<br/>
                    trouvé le terrain de jeu.<br/>
                </p>
                <br/>
                <p>
                    <b>
                        La boutique
                    </b>
                </p>
                <p>
                    Les sweats à capuche, les sweatshirts et des sacs de sport sur le thème Polytechnique sont issus <br/>
                    du commerce éthique, imprimés avec savoir-faire et disponibles dans divers styles, <br/>
                    couleurs et tailles.<br/>
                    Quelle que soit votre idée, vous trouverez des designs qui vous vont droit au cœur <br/>
                    sur des produits de super qualité. De la personnalité, de l'originalité et de la qualité ?  <br/>
                    Difficile de faire mieux.
                </p>
            </div>   
        </body>
            <Footer/>
        </div>
    )
}

export default AboutUs;