import React from 'react'
import './SignUp.css'
import { useNavigate } from "react-router-dom";
import logo from '../../assets/imgs/logoCombine.png'
import google from '../../assets/imgs/google.png'
import microsoft from '../../assets/imgs/microsoft.png'
import InputIcon from '../../components/inputIcon/InputIcon';
import Btn from '../../components/btn/Btn';
import BtnIcon from '../../components/BtnIcon/BtnIcon';
import { Grid } from '@mui/material'
import { Visibility } from '@mui/icons-material';
import useIsMobile from '../../hooks/useIsMobile';

export default function SignUp() {
    const navigate = useNavigate();
    const isMobile = useIsMobile();
    return (
        <div className='signUp-box'>
            <Grid container spacing={0}>
                {!isMobile && <Grid item sm={5}>
                    <div className="signUP-left">
                        <img src={logo} alt="logo" className='signUp-logo' onClick={() => navigate('/')} />
                        <div className="global-heading2 mt-40" style={{ textAlign: 'left' }}>Get started with iVeew</div>
                        <div>Answer a couple of questions and we'll connect you with the right team member</div>
                    </div>
                </Grid>}
                <Grid item sm={7} xs={12}>
                    <div className="signUP-right">
                        <div>
                            <div className="signUp-right-top">
                                Have An Account?
                                <BtnIcon label='Sign in' onClick={()=>navigate('/SignIn')} />
                            </div>
                            <div className="signUp-right-main">
                                <div className="signIn-main-heading">Let’s start with the basics</div>
                                <div className="signUp-names">
                                    <div>
                                        <InputIcon
                                            label='First name'
                                        />
                                    </div>
                                    <div>
                                        <InputIcon
                                            label='Last  name'
                                        />
                                    </div>
                                </div>
                                <InputIcon label='Company name' />
                                <InputIcon label='Work email' />
                                <InputIcon label='Mobile number' />
                            </div>
                        </div>
                        <div className="signUp-bottom-bar">
                            <Btn label="Continue" style={{visibility:'hidden'}} />
                            <Btn label="Continue" />
                        </div>
                    </div>
                </Grid>
            </Grid>

        </div>
    )
}
