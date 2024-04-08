import React from 'react'
import './SignIn.css'
import { useNavigate } from "react-router-dom";
import logo from '../../assets/imgs/logoCombine.png'
import google from '../../assets/imgs/google.png'
import microsoft from '../../assets/imgs/microsoft.png'
import InputIcon from '../../components/inputIcon/InputIcon';
import Btn from '../../components/btn/Btn';
import BtnIcon from '../../components/BtnIcon/BtnIcon';

export default function SignIn() {
    const navigate = useNavigate();
    return (
        <div className='signIn-box'>
            <div className="signIn-header">
                <img src={logo} alt="logo" onClick={() => navigate('/')} />
                <div>
                    New to IVeeW?
                    <span onClick={()=>navigate('/SignUp')} >Sign up</span>
                </div>
            </div>
            <div className="signIn-main">
                <div className="signIn-main-heading">Hello</div>
                <div className="signIn-main-subHeading">Sign in to your IVeeW account</div>
                <InputIcon
                    label='Email'
                />
                <div className="checkBox-style-global">
                    <input type="checkBox" />
                    <div>Remember this account</div>
                </div>
                <Btn label='Sign In' style={{ width: '100%', borderRadius: '11px' }} />
                <div className="signIn-text">OR</div>
                <BtnIcon
                    label='Sign in with Google'
                    icon={google}
                />
                <BtnIcon
                    label='Sign in with Microsoft'
                    icon={microsoft}
                />

                <div className="signIn-footer">
                    <div>        Copyright © 2024 Brex Inc.</div>
                    <p className='signIn-link-text'> Brex Platform Agreement</p>
                    <div>|</div>
                    <p className='signIn-link-text'>Privacy Policy</p>
                </div>
            </div>

        </div>
    )
}
