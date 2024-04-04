import React, { useEffect } from 'react'
import './GuestRecognition.css'
import guestRecImg2 from '../../assets/imgs/guestRecImg2.png'
import guestRecImg4 from '../../assets/imgs/guestRecImg4.png'
import { Grid } from '@mui/material'
import Btn from '../../components/btn/Btn'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import SliderCustom from '../../components/sliderCustom/SliderCustom'


export default function GuestRecognition() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <NavBar hideModal={true} />
            <div className="guestRec-hero">
                <div>
                    <Grid container spacing={5}>
                        <Grid item sm={6} xs={12}>
                            <div className="spMsg-hero-contentBox">
                                <div className="spMsg-hero-heading ">Our <br className='desktop' /> patented <br className='desktop' /> guest recognition</div>
                                <div className="spMsg-hero-btns">
                                    <Btn label='Get Started' />
                                    <Btn label="Open an account" className='geoFence-hero-btn' style={{ padding: '0px 45px' }} />
                                </div>
                            </div>
                        </Grid>

                    </Grid>
                </div>
            </div>
            {/* section 2  */}
            <section className="padding" style={{ paddingTop: '2%' }}>
                <div className="global-heading1 mb-8per mt-8per">Learn more about guest recognition</div>
                {/* 1st  */}
                <div>
                    <Grid container spacing={5}>
                        <Grid item sm={5} xs={12}>
                            <div className="message360Padding marginT-mobile">
                                <img src={guestRecImg2} alt="img" />
                            </div>
                        </Grid>
                        <Grid item sm={7} xs={12}>
                            <div className="message360Padding">

                                <div className="message360-heading1 mb-40">Guest recognition</div>
                                <div className="spMsg-text1 mb-40">
                                    Our patented guest recognition application allows hotels and businesses to recognize guests and customers when approaching the hotel or entering a store.  Geofencing and beacons allow hotels and businesses to recognize guests and customers.
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </section>
            <SliderCustom />
            <Footer />
        </>
    )
}
