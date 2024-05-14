import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import NavBar from '../../components/navbar/Navbar';
import { Grid } from '@mui/material';
import imgWatch from '../../assets/imgs/imgWatch.png'
import PricingCard from './PricingCard';
import Footer from '../../components/footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FullScreenVideo from '../../components/fullScreenVideo/FullScreenVideo';
import { useNavigate } from 'react-router-dom';
import pricingData from '../../assets/json/pricingData.json'


export default function Home() {
    let [hideModal, setHideModal] = useState(true);
    const navigate = useNavigate()
 

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handleThumbnailClick = () => {
        setIsVideoPlaying(true);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [highlightIndex, setHighlightIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setHighlightIndex((prevIndex) => (prevIndex + 1) % words.length); // Assuming there are 6 words in the heading
        }, 1000); // Adjust the interval as needed

        return () => clearInterval(interval);
    }, []);

    const words = ['ai', 'Powered', 'Hospitality', 'Tools', 'connecting', 'with', 'guests'];


    return (
        <>
            <NavBar hideModal={hideModal} />
            {/* <AutoScroll /> */}
            <div onMouseEnter={() => setHideModal(!hideModal)}>
                {/* section 1 banner section  */}
                <section className='home-banner-box'>
                    <Grid container spacing={5}>
                        <Grid item xs={12} >
                            <div className='home-banner'>
                                {/* <div className="home-banner-heading">
                                    ai Powered Hospitality Tools connecting <span> with </span> guests
                                </div> */}
                                <div className="home-banner-heading">
                                    {words.map((word, index) => (
                                        <span
                                            key={index}
                                            style={{ color: index === highlightIndex ? 'red' : 'inherit' }}
                                        >
                                            {word}{' '}
                                        </span>
                                    ))}
                                </div>
                                <div className="home-banner-content">
                                    Using artificial intelligence (ai) and machine learning (ml), brands can analyze data objectively, improving insights and generating actionable reports that can be used to make data-driven decisions.
                                    <br /><br />
                                    With ai and ml, these insights are more sophisticated and valuable to brands, allowing them to enhance and improve the customer journey.

                                </div>
                            </div>

                        </Grid>
                        <Grid item sm={6} >

                        </Grid>
                    </Grid>
                </section>
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
                                <Grid item sm={4} xs={12}>
                                    <div className="home-watch-img1" >
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
                    <div>
                    </div>
                </section>
                {/* section 8  */}
                {/* Footer  */}
                <Footer />
            </div>
        </>
    )
}
