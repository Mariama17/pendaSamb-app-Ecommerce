/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Button from "react-bootstrap/Button";
import img from '../images/tshirt.png';
import Footer from './footer';
import { useNavigate  } from "react-router-dom";

function Connexion() {
	const navigate = useNavigate();
    return (
        <div>
			<span className= 'logo'>
				<img src={img} width="30%"/>
			</span>
            <span className='loginBody'>
				<p style={{ fontSize: '150%', textAlign: 'center'}}>
					<b>
                        Connectez vous 
                    </b>
				</p>  
                <div className='inputLogin'>
					<input id='login' class='form-control' type='text' placeholder="identifiant" style={{ width:"80%", height: "25%", margin:10 }}/> <br/>
                    <input id='password' class='form-control' type='password' placeholder="mot de passe" style={{ width:"80%", height: "25%", margin:10 }}/>
					<div className='loginForgetMdpDiv'>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<input type='checkbox' name='stayConnect' />
							&nbsp;&nbsp;
								<label for='stayConnect' class='text-primary' className='label'>
									<b>
                                        Restez connecté
                                    </b>
								</label>
                            <b>
								{/* <label style={{ color: 'blue', fontSize: '115%' }} onClick={() => history.push('/forgetPassword')}><FormattedMessage id='connexion.body.ForgetMDP' /></label> */}
								<label style={{ margin: 20, fontSize: '100%' }}>
                                    Mot de passe oublié ?
                                </label>
							</b>
						</div>
					</div>
				</div>
                <Button onClick={() => navigate("/home")} style={{width:200, height: 40, background: ' #1846a3 ', color: 'white'}} >
					<b>
						Me connecter
					</b>
				</Button>
            </span>
            <Footer/>
        </div>
    )
}

export default Connexion;



