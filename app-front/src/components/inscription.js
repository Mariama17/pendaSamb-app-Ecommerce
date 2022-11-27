/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Footer from './footer';
import img from '../images/logos.png';
import Button from "react-bootstrap/Button";
import { useNavigate  } from "react-router-dom";

function Inscription(){
    const navigate = useNavigate();
    return(
        <div>
            <header>
                <span>
                    <img src={img} width="25%"/>
                </span>
                <span style={{marginLeft: "25%", alignItems: "center", justifyContent: "space-around"}}>
                    
                <span style={{margin:15}}>
                    <span onClick={() => navigate("/contact")} style={{margin:15}}>
                        <label>
                            Nous contacter
                        </label>
                    </span>
                    <span onClick={() => navigate("/aboutUs")} style={{margin:15}}>
                        <label>
                            A propos
                        </label>
                    </span>
                </span>
                <span>
                    <Button onClick={() => navigate("/login")} style={{width:100, height: 30, background: ' #1846a3 ', color: 'white', border: 'none'}}>
                        Se connecter
                    </Button>
                </span>
            </span>
        </header>
            <body>
                <div className='Inputs'>
                    <div>
                        <p>
                            <b>
                                Vous pouvez vous inscrire
                            </b>
                        </p>
                    </div>
                    <br/>
                    <div className="mesInput">
                        <input 
                            type="text" class='form-control' placeholder="Nom" style={{ width:"25%", height: "25%", margin:10 }}>
                        </input>
                            <br/>
                        <input 
                            type="text" class='form-control' placeholder="Prénom" style={{ width:"25%", height: "25%", margin:10 }}>
                        </input>
                            <br/>
                        <input 
                            type="text" class='form-control' placeholder="Identifiant" style={{ width:"25%", height: "25%", margin:10 }}>
                        </input> 
                            <br/>
                        <input 
                            type='password' class='form-control' placeholder="Mot de passe" style={{ width:"25%", height: "25%", margin:10 }}>
                        </input>
                            <br/>
                        <input 
                            type='password' class='form-control' placeholder="Confirmer votre mot de passe" style={{ width:"25%", height: "25%", margin:10 }}>
                        </input>
                    </div>
                    <div className="Ajouter">
                        <Button onClick={() => navigate("/login")} style={{width:200, height: 40, background: ' #1846a3 ', color: 'white'}}>
                            <b>
                                S'inscrire
                            </b>
                        </Button>
                    </div>
                </div>
            </body>
            <Footer/>
        </div>
    )
} 

export default Inscription;