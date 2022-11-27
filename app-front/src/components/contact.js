/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Footer from './footer';
import img from '../images/logos.png';
import Button from "react-bootstrap/Button";
import { useNavigate  } from "react-router-dom";

function Contact(){
    const navigate = useNavigate();
    return(
        <div>
            <header>
                <span>
                    <img src={img} width="25%"/>
                </span>
                <span onClick={() => navigate("/aboutUs")} style={{marginLeft: "40%", alignItems: "center", justifyContent: "space-around"}}>
                    <label style={{marginLeft: -150}}>
                        A propos
                    </label>
                    <span onClick={() => navigate("/inscription")} style={{margin:15}}>
                        <Button style={{width:80, height: 30, background: ' #1846a3 ', color: 'white', border: 'none'}}>
                            s'inscrire
                        </Button> 
                    </span>
                    <span>
                        <Button onClick={() => navigate("/login")} style={{width:80, height: 30, background: ' #1846a3 ', color: 'white', border: 'none'}}>
                            se connecter
                        </Button>
                    </span>
                </span>
            </header>
            <br/><br/>
            <body>
                <div className="TitleContact">
                    <p>
                        <b> 
                            N'hésitez pas à me contacter
                        </b>
                    </p>
                </div>  
                <br/>
                <div className="Input">
                    <input 
                        class = 'form-control' 
                        type="text" 
                        style={{ width:"35%", margin:"0.5%"}} 
                        placeholder="Nom"
                    /> 
                    <input 
                        class = 'form-control' 
                        type="text" 
                        style={{ width:"35%", margin:"0.5%"}} 
                        placeholder="Prénom"
                    /> 
                    <br/><br/>
                    <input 
                        class = 'form-control' 
                        type="text" style={{ width:"35%", margin:"0.5%"}} 
                        placeholder="Adresse mail"
                    /> 
                    <input 
                        class = 'form-control' 
                        type="text" 
                        style={{ width:"35%", margin:"0.5%"}} 
                        placeholder="Téléphone"
                    /> 
                    <br/><br/>
                    <input 
                        class = 'form-control' 
                        type="text" 
                        style={{ width:"71%", height:75}} 
                        placeholder="Message"
                    /> 
                </div>
                <br/>
                <div className="envoyer">
                    <Button style={{width:200, height: 40, background: ' #1846a3 ', color: 'white'}}>
                        <b>
                            Envoyer
                        </b>
                    </Button>
                </div>
                <br/>
            </body>
            <br/>
            <Footer/>
        </div>
    )
}
export default Contact;