/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Button from "react-bootstrap/Button";
import img from '../images/logos.png';
import Connexion from './connexion';
import { useNavigate  } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    return (
        <div>
            <header className='login'>
                <span>
                    <img src={img}  width="35%" style={{marginLeft: "110%"}} />
                </span>
                <span style={{marginLeft: "30%", alignItems: "center"}}>
                    <span>
                        <label onClick={() => navigate("/home")}>
                            Accueil
                        </label>
                    </span>
                    <span style={{margin:15}}>
                        <label onClick={() => navigate("/contact")}>
                            Nous contacter
                        </label>
                    </span>
                    <span >
                        <label onClick={() => navigate("/aboutUs")}>
                            A propos
                        </label>
                    </span>
                    <span style={{margin:15}}>
                        <Button onClick={() => navigate("/inscription")} style={{width:80, height: 30, background: ' #1846a3 ', color: 'white', border: 'none'}}>
                            S'inscrire
                        </Button> 
                    </span>
                </span> 
            </header>
            <Connexion/>
        </div>
    )
}

export default Login;