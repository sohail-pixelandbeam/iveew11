import React from 'react'
import './SignIn.css'
import { useNavigate } from "react-router-dom";
import logo from '../../assets/imgs/logoCombine.png'
import google from '../../assets/imgs/google.png'
import microsoft from '../../assets/imgs/microsoft.png'
import facebook from '../../assets/imgs/facebook.png'
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
                    New to iVeew?
                    <span onClick={()=>navigate('/SignUp')} >Sign up</span>
                </div>
            </div>
            <div className="signIn-main">
                <div className="signIn-main-heading mb-8per">Sign in to your iVeew account</div>
                <div className="signIn-main-subHeading">Sign in to your iVeew account</div>
                <InputIcon
                    label='Email address'
                    placeholder='Email address'
                />
                
                <div className="mb-8per"></div>
                <Btn label='Sign In' style={{ width: '100%', borderRadius: '11px' }} />
                <div className="signIn-text">OR</div>
                <BtnIcon
                    label='Sign in with Google'
                    icon={google}
                />
                <BtnIcon
                    label='Sign in with Facebook'
                    icon={facebook}
                />
            </div>

        </div>
    )
}
