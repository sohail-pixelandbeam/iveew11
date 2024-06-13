import React, { useEffect, useState } from 'react'
import './GuestRecognition.css'
import guestRecImg2 from '../../assets/imgs/guestRecImg2.png'
import guestRecImg4 from '../../assets/imgs/guestRecImg4.png'
import { Grid } from '@mui/material'
import Btn from '../../components/btn/Btn'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import imgWatch from '../../assets/imgs/imgWatch.png'
import FullScreenVideo from '../../components/fullScreenVideo/FullScreenVideo'
import useIsMobile from '../../hooks/useIsMobile'



export default function GuestRecognition() {
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
            <div className="guestRec-hero">
                <div>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <div className="spMsg-hero-contentBox">
                                <div className="spMsg-hero-heading ">Patented <br className='desktop' /> Guest Recognition</div>
                            </div>
                        </Grid>

                    </Grid>
                </div>
            </div>
             {/* section 2  */}
             <section className='home-sec2-box padding'>
                    
                    {/* section 2 watch */}
                    <div className='home-sec2-watch-main' >
                        <div className="home-sec2-watch-box">
                            <Grid container spacing={5}>
                                <Grid item md={6.5} xs={12}>
                                    <div className="home-watch-heading">Guest Recognition</div>
                                    <div className="home-watch-content">
                                        <ul>
                                            <li>Knowing your guests on a deeper level makes it easier to identify high-value customers and cater to their needs
                                            </li>
                                            <li>Provide more personalized service based on guest preferences and behavior
                                            </li>
                                            <li>Improve marketing efforts by targeting guests with a relevant, personalized message
                                            </li>
                                        </ul>
                                    </div>
                                </Grid>
                               {isMobile && <Grid item sm={12} xs={12}>
                                    <div className="home-watch-img1" >
                                        {isVideoPlaying ? (
                                            <FullScreenVideo isVideoPlaying={isVideoPlaying} setIsVideoPlaying={setIsVideoPlaying} />
                                        ) : (
                                            <img src={imgWatch} alt="Thumbnail" onClick={handleThumbnailClick} />
                                        )}
                                    </div>
                                </Grid>}
                            </Grid>
                        </div>
                       {!isMobile && <div className="home-sec2-video-box">
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
                        </div>}
                    </div>
                    <div>
                    </div>
                </section>
            <Footer />
        </>
    )
}
