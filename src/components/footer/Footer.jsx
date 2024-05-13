import React, { useState } from 'react'
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
    let [active, setActive] = useState("")
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
                        <div className="f-link" onClick={() => handleNavigate('/')}>Partners</div>
                        <div className="f-link" onClick={() => handleNavigate('/GuestRecognition')}>Guest Recognition</div>
                        <div className="f-link" onClick={() => handleNavigate('/MobileMarketStrategies')}>Mobile Strategies</div>
                        <div className="f-link" onClick={() => handleNavigate('/Personalization')}>Personalizaiton</div>
                    </Grid>
                    <Grid item sm={2.75} xs={6} >
                        <div className="f-linkBold" style={{ visibility: 'hidden' }} >Application</div>
                        <div className="f-link" onClick={() => handleNavigate('/MessageMarketSegmentation')}>Market Segmentation</div>
                        <div className="f-link" onClick={() => handleNavigate('/GeoFencing')}>Geo Fencing</div>
                        <div className="f-link" onClick={() => handleNavigate('/SpecialityMessaging')}>Messaging</div>
                        <div className="f-link" onClick={() => handleNavigate('/TickeitngTours')}>Ticket Tours Activities</div>

                    </Grid>
                    <Grid item sm={2.25} xs={6} >
                        <div className="f-linkBold" onClick={() => handleNavigate('/Pricing')} style={{visibility:'hidden'}}>P</div>
                        <div className="f-link" onClick={() => handleNavigate('/About')}>About iVeew</div>
                        <div className="f-link"
                            onClick={() => setActive('Careers')}
                            onMouseEnter={() => setActive('Careers')}
                        >Careers</div>
                        {active === 'Careers' && <div>
                            Check us out and if you think there is a match, email us at <a href='mailto:info@iveew.co'>info@iveew.co</a>
                        </div>}
                        <div className="f-link"
                            onClick={() => setActive('Contact')}
                            onMouseEnter={() => setActive('Contact')}
                        >
                            <a href='https://passtrek.com/#contact' target='_blank' className='f-link' style={{ textDecoration: 'none' }} >Contact</a>
                        </div>
                        <div className="f-link"
                            onClick={() => setActive('Partner portal')}
                            onMouseEnter={() => setActive('Partner portal')}
                        >Partner portal</div>
                        {active === 'Partner portal' && <div>
                            Our partner portal connects our platforms and applications .  Fill out the form to  talk with us about our APIs or yours.  </div>}
                    </Grid>
                    <Grid item sm={2} xs={6} >
                        <div className="f-linkBold">Resources</div>
                        <div className="f-link" onClick={() => handleNavigate('/')} >Customer Hub</div>
                        <div className="f-link" onClick={() => handleNavigate('/')} >Help center</div>
                        <div className="f-link" onClick={() => handleNavigate('/')} >Status</div>
                        <div className="f-link" onClick={() => handleNavigate('/Privacy')} >Privacy</div>
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
                        {/* <Grid item sm={8} xs={12} >
                            <div className="f-stores-imgs">
                                <img src={appStore} alt="appStore" />
                                <img src={playStore} alt="playStore" />
                            </div>
                        </Grid> */}
                    </Grid>
                </div>
            </div>
        </div>
    )
}
