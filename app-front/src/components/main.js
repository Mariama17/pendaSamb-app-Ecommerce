import React from 'react';
import img from '../images/pull.png';
import img2 from '../images/sac.png';

const Main = () => {
    return (
        <div className='home'>
            <div className="image">
                <img src={img} alt="logos" width="25%" height="25%"/>
            </div>
            <div className="texte">
                <h4>
                    <b> 
                        Faites vos achats
                    </b>
                </h4>
                <p>
                    Les sweats à capuche, les sweatshirts et <br/> 
                    des sacs de sport sur le thème Polytechnique  <br/>   
                    sont issus du commerce éthique, imprimés<br/> 
                    avec savoir-faire et disponibles dans divers styles,<br/> 
                    couleurs et tailles.
                </p>
            </div>
            <div className="text">
                <h4>
                    <b>
                        Achetez en sécurité
                    </b>
                </h4>
                <p>
                    Quelle que soit votre idée, vous trouverez des designs<br/>  
                    qui vous vont droit au cœur sur des produits<br/>  
                    de super qualité.<br/>  
                    De la personnalité, de l'originalité et de la qualité ? <br/> 
                    Difficile de faire mieux.<br/> 
                </p>
            </div>
            <div className="img2">
                <img src={img2} alt="logos" width="55%" height="55%"/>
            </div>
        </div>
    ); 
}

export default Main;