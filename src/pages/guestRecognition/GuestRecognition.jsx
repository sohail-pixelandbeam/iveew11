import React, { useEffect, useState } from 'react'
import './GuestRecognition.css'
import guestRecImg2 from '../../assets/imgs/guestRecImg2.png'
import guestRecImg4 from '../../assets/imgs/guestRecImg4.png'
import { Grid } from '@mui/material'
import Btn from '../../components/btn/Btn'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import imgWatch from '../../assets/imgs/imgWatch.png'



export default function GuestRecognition() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handleThumbnailClick = () => {
        setIsVideoPlaying(true);
    };

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
                                <div className="spMsg-hero-heading ">Patented <br className='desktop' /> Guest Recognition</div>
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
                {/* section 2 watch */}
                <div className='home-sec2-watch-main' >
                    <div className="home-sec2-watch-box">
                        <Grid container spacing={5}>
                            <Grid item md={6.5} xs={12}>
                                <div className="home-watch-heading">Guest Recognition</div>
                                <div className="home-watch-content">
                                    <ul>
                                        <li>The search results highlight the significant value of recognizing and rewarding loyal and repeat guests in the hospitality industry. Here are the key points: Knowing your guests on a deeper level provides numerous benefits1: Better identify high-value guests and cater to their needs.</li>
                                        <li>Upsell and personalize the experience for repeat guests before they arrive.</li>
                                        <li>Provide more personalized service based on guest preferences and behavior.</li>
                                        <li>
                                            Improve marketing efforts by targeting guests with relevant, personalized messages.
                                        </li>

                                    </ul>
                                </div>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <div className="home-watch-img1">
                                    {isVideoPlaying ? (
                                        <FullScreenVideo isVideoPlaying={isVideoPlaying} setIsVideoPlaying={setIsVideoPlaying} />
                                    ) : (
                                        <img src={imgWatch} alt="Thumbnail" onClick={handleThumbnailClick} />
                                    )}
                                </div>
                                {/* <img src={imgWatch} alt="imgWatch" className='home-watch-img1' /> */}
                            </Grid>
                        </Grid>
                    </div>
                    <div className="home-sec2-video-box">
                        <Grid container spacing={5}>
                            <Grid item md={7} xs={12}>
                            </Grid>
                            <Grid item md={5} xs={12}>
                                <div className="home-watch-img">
                                    {isVideoPlaying ? (
                                        <FullScreenVideo isVideoPlaying={isVideoPlaying} setIsVideoPlaying={setIsVideoPlaying} />
                                    ) : (
                                        <img src={imgWatch} alt="Thumbnail" onClick={handleThumbnailClick} />
                                    )}
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
