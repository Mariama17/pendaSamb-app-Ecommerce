/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img from '../images/logos.png';
import Button from "react-bootstrap/Button";
import { useNavigate  } from "react-router-dom";

function Header () {
    const navigate = useNavigate();
    return (
        <header>
            <span>
                <img src={img} width="25%"/>
            </span>
            <span style={{marginLeft: "25%", alignItems: "center", justifyContent: "space-around"}}>
                <span style={{margin:15}}>
                    <label onClick={() => navigate("/contact")}>
                        Nous contacter
                    </label>
                </span>
                <span>
                    <label onClick={() => navigate("/aboutUs")}>
                        A propos
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
    ); 
}

export default Header;