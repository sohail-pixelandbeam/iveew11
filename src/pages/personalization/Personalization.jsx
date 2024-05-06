import React, { useEffect, useState } from 'react'
import guestRecImg2 from '../../assets/imgs/guestRecImg2.png'
import personalizationImg1 from '../../assets/imgs/personalizationImg1.png'
import personalizationImg2 from '../../assets/imgs/personalizationImg2.png'
import { Grid } from '@mui/material'
import Btn from '../../components/btn/Btn'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import imgWatch from '../../assets/imgs/imgWatch.png'



export default function Personalization() {
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
            <div className="bookingEngineWidget-hero">
                <div>
                    <Grid container spacing={5}>
                        <Grid item sm={12} xs={12}>
                            <div className="spMsg-hero-contentBox" style={{textAlign: 'center'}}>
                                <div className="spMsg-hero-heading ">AI Powered Tools for Personalization
                                </div>
                            </div>
                        </Grid>

                    </Grid>
                </div>
            </div>
            {/* section 2  */}
            <section className="padding" style={{ paddingTop: '2%' }}>
                <div className="global-heading1 mb-8per mt-8per">Learn more about Personalization</div>
                {/* 1st  */}
                <div>
                    <Grid container spacing={5}>
                        <Grid item sm={12} xs={12}>
                            <div className="message360Padding marginT-mobile">
                                <img src={personalizationImg2} alt="img" />
                            </div>
                        </Grid>
                        <Grid item sm={2} xs={12}>

                        </Grid>
                        <Grid item sm={8} xs={12}>
                            <div className="message360Padding">
                                <ul>
                                    <li>Build Guest Profiles by Collecting the Right Data
                                    </li>
                                    <li>Gather information about guest preferences, past stays, special occasions, and other relevant data to create comprehensive guest profiles
                                    </li>
                                    <li>Use this data to personalize services, offers, and communications for each guest
                                    </li>
                                    <li>Regularly communicate with guests before, during, and after their stay to understand their needs and preferences
                                    </li>
                                    <li>Personalize Services and Offerings
                                    </li>
                                    <li>Provide personalized recommendations for local attractions, restaurants, and other experiences
                                    </li>
                                    <li>Recognize and celebrate guests' milestones and special occasions, such as birthdays and anniversaries, with personalized surprises or amenities
                                    </li>
                                    <li>
                                        By implementing these personalization strategies, hotels can create a unique, tailored experience for each guest, fostering loyalty and enhancing overall guest satisfaction

                                    </li>

                                </ul>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </section>
            <Footer />
        </>
    )
}
