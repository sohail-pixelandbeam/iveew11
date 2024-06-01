import React, { useEffect, useState } from 'react'
import './Personalization.css'
import guestRecImg2 from '../../assets/imgs/guestRecImg2.png'
import perImg1 from '../../assets/imgs/perImg1.png'
import personalizationImg1 from '../../assets/imgs/personalizationImg1.png'
import personalizationImg2 from '../../assets/imgs/personalizationImg2.png'
import personalizationImg3 from '../../assets/imgs/personalizationImg3.png'
import { Grid } from '@mui/material'
import Btn from '../../components/btn/Btn'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import imgWatch from '../../assets/imgs/imgWatch.png'
import useIsMobile from '../../hooks/useIsMobile'



export default function Personalization() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const isMobile = useIsMobile();

    const handleThumbnailClick = () => {
        setIsVideoPlaying(true);
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <NavBar hideModal={true} />
            <div className="bookingEngineWidget-hero">
                <div>
                    <Grid container spacing={5}>
                        <Grid item sm={12} xs={12}>
                            <div className="spMsg-hero-contentBox" style={{ textAlign: 'center' }}>
                                <div className="spMsg-hero-heading ">AI Powered Tools for Personalization
                                </div>
                            </div>
                        </Grid>

                    </Grid>
                </div>
            </div>
            {/* section 2  */}
            <section className="padding" >

                {/* 1st  */}
                <div>
                    <Grid container spacing={5}>
                        {/* <Grid item sm={12} xs={12}>
                            <div className="message360Padding marginT-mobile">
                                <img src={personalizationImg2} alt="img" />
                            </div>
                        </Grid> */}

                        <Grid item sm={12} xs={12}>
                            <div className="global-heading1 text-center mb-40">How it all works
                            </div>
                            <div className="message360Padding">
                                <br /><br />
                                <div className='personalization-img'>
                                    <img src={personalizationImg1} alt="img" />
                                </div>
                            </div>
                            <div className="global-heading2 text-center mb-40 mt-8per">Six  Easy Steps to Guest Engagement</div>
                            <div className="message360Padding mb-40 mt-40 ">
                                <ol>
                                    <li>Select mobile confirmation</li>
                                    <li>Link to personalization form</li>
                                    <li> Select things that interest them</li>
                                    <li>Receive all that  interest</li>
                                    <li>Select which to buy or place on hold</li>
                                    <li>Receive link to coupons to save to mobile wallet & a link to save to their phone as mobile web app</li>
                                </ol>
                                <div className="mt-40">
                                    All of these are handled by AI and automation, selecting the items of interest.
                                    <br /><br />
                                    All of this does not take more than a few minutes to get to the final page to make selections
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </section>
            {/* section 2 */}
            <section className="padding">
                <div>
                    <Grid container spacing={5}>
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding marginT-mobile">
                                <img src={perImg1} alt="img" width='90%' />
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding1">
                                <div className="message360-heading1 mb-40">Personalizing the Guest Experience
                                </div>
                                <div className="spMsg-text1 mb-40">
                                    <ul>
                                        <li>Automation is key to being successful with Personalization
                                        </li>
                                        <li>AI can identify their interest and automatically send personalized product information via email or SMS </li>
                                        <li>Tickets Activities, Adventures & Tours in over 130 countries
                                        </li>
                                        <li>Message platform serves over 130 countries
                                        </li>
                                        <li>Currency in over 100 countries</li>
                                    </ul>
                                </div>
                            </div>
                        </Grid>
                        <Grid item sm={12} xs={12}>
                            <div className="message360Padding">
                                <img src={personalizationImg2} alt="img" />
                            </div>
                            <div className="message360Padding mt-8per">
                                <img src={personalizationImg3} alt="img" />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </section>

            <Footer />
        </>
    )
}
