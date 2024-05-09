import React from 'react'
import './Footer.css'
import logo from '../../assets/imgs/logoFooter.png'
import social1 from '../../assets/imgs/social1.png'
import social2 from '../../assets/imgs/social2.png'
import social3 from '../../assets/imgs/social3.png'
import social4 from '../../assets/imgs/social4.png'
import social5 from '../../assets/imgs/social5.png'
import appStore from '../../assets/imgs/appStore.png'
import playStore from '../../assets/imgs/playStore.png'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
    const navigate = useNavigate();
    const handleNavigate = (to) => {
        navigate(to);
    }
    return (
        <div className='f-box'>
            <div className="padding" style={{ paddingBottom: '3%' }}>
                <Grid container spacing={3}>
                    <Grid item sm={2.5} xs={12} >
                        <img src={logo} alt="logo" className='f-logo' />
                    </Grid>
                    <Grid item sm={2.5} xs={6} >
                        <div className="f-linkBold">Applications</div>
                        <div className="f-link"  onClick={()=>handleNavigate('/')}>Partners</div>
                        <div className="f-link"  onClick={()=>handleNavigate('/GuestRecognition')}>Guest Recognition</div>
                        <div className="f-link"  onClick={()=>handleNavigate('/MobileMarketStrategies')}>Mobile Strategies</div>
                        <div className="f-link"  onClick={()=>handleNavigate('/Personalization')}>Personalizaiton</div>
                    </Grid>
                    <Grid item sm={2.75} xs={6} >
                        <div className="f-linkBold" style={{visibility:'hidden'}} >Applications</div>
                        <div className="f-link"  onClick={()=>handleNavigate('/MessageMarketSegmentation')}>Market Segmentation</div>
                        <div className="f-link"  onClick={()=>handleNavigate('/GeoFencing')}>Geo Fencing</div>
                        <div className="f-link"  onClick={()=>handleNavigate('/SpecialityMessaging')}>Messaging</div>
                        <div className="f-link"  onClick={()=>handleNavigate('/TickeitngTours')}>Ticket Tours Activities</div>
                    </Grid>
                    <Grid item sm={2.25} xs={6} >
                        <div className="f-linkBold" onClick={()=>handleNavigate('/Pricing')}>Pricing</div>
                        <div className="f-link"  onClick={()=>handleNavigate('/')}>About iVeew</div>
                        <div className="f-link"  onClick={()=>handleNavigate('/')}>Careers</div>
                        <div className="f-link"  onClick={()=>handleNavigate('/')} >Contact</div>
                        <div className="f-link"  onClick={()=>handleNavigate('/')}>Partner portal</div>
                    </Grid>
                    <Grid item sm={2} xs={6} >
                        <div className="f-linkBold">Resources</div>
                        <div className="f-link" onClick={()=>handleNavigate('/')} >Customer Hub</div>
                        <div className="f-link" onClick={()=>handleNavigate('/')} >Help center</div>
                        <div className="f-link" onClick={()=>handleNavigate('/')} >Status</div>
                        <div className="f-link" onClick={()=>handleNavigate('/')} >Privacy</div>
                    </Grid>
                </Grid>
                <div className='f-bottom'>
                    <Grid container spacing={3}>
                        <Grid item sm={2.5} xs={12} >
                            <div className="f-bottom-socials">
                                <img src={social1} alt="social" />
                                <img src={social2} alt="social" />
                                <img src={social3} alt="social" />
                                <img src={social4} alt="social" />
                                <img src={social5} alt="social" />
                            </div>
                        </Grid>
                        <Grid item sm={8} xs={12} >
                            <div className="f-stores-imgs">
                                <img src={appStore} alt="appStore" />
                                <img src={playStore} alt="playStore" />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}
