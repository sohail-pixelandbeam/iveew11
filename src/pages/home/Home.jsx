import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import NavBar from '../../components/navbar/Navbar';
import { Grid } from '@mui/material';
import Btn from '../../components/btn/Btn';
import imgWatch from '../../assets/imgs/imgWatch.png'
import img9 from '../../assets/imgs/img9.png';
import img10 from '../../assets/imgs/img10.png';
import img11 from '../../assets/imgs/img11.png';
import img12 from '../../assets/imgs/img12.png';
import img13 from '../../assets/imgs/img13.png';
import img14 from '../../assets/imgs/img14.png';
import img15 from '../../assets/imgs/img15.png';
import img16 from '../../assets/imgs/img16.png';
import affImg1 from '../../assets/imgs/affImg1.jpeg'
import affImg2 from '../../assets/imgs/affImg2.jpeg'
import affImg3 from '../../assets/imgs/affImg3.jpeg'
import affImg4 from '../../assets/imgs/affImg4.png'
import affImg5 from '../../assets/imgs/affImg5.png'
import affImg6 from '../../assets/imgs/affImg6.png'
import { CardLeft } from './CardLeft';
import { CardRight } from './CardRight';
import EastIcon from '@mui/icons-material/East';
import PricingCard from './PricingCard';
import Footer from '../../components/footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCustom2 from '../../components/sliderCustom2/SliderCustom2';
import FullScreenVideo from '../../components/fullScreenVideo/FullScreenVideo';
import SliderCustom from '../../components/sliderCustom/SliderCustom'
import { useNavigate } from 'react-router-dom';
import AutoScroll from '../../components/autoScroll/AutoScroll';
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
                    <div className="global-heading1 mb-8per" >Partners</div>
                    <div className='home-sec2-imgs' >
                        <Grid container spacing={5}>
                            <Grid item sm={4} xs={12}>
                                <div className='home-sec-2-img-box' >
                                    <img className='home-sec-2-img' src={affImg1} alt="companies" />
                                </div>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <div className='home-sec-2-img-box' >
                                    <img className='home-sec-2-img' src={affImg2} alt="companies" />
                                </div>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <div className='home-sec-2-img-box' >
                                    <img className='home-sec-2-img' src={affImg3} alt="companies" />
                                </div>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <div className='home-sec-2-img-box' >
                                    <img className='home-sec-2-img' src={affImg4} alt="companies" />
                                </div>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <div className='home-sec-2-img-box' >
                                    <img className='home-sec-2-img' src={affImg5} alt="companies" />
                                </div>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <div className='home-sec-2-img-box' >
                                    <img className='home-sec-2-img' src={affImg6} alt="companies" />
                                </div>
                            </Grid>
                        </Grid>
                        <div className='global-heading2' >
                            More on the Way
                        </div>
                    </div>
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

                {/* section 3  */}


                {/* section 7  */}
                <section>
                    <div className="home-sec7-box padding">
                        <div className="global-heading1">Everything you need to <br /> spend smart.</div>
                        <div className='margin-home'>
                            <Grid container spacing={5}>
                                {
                                    pricingData.map(item => (
                                        <Grid item md={4} sm={6} xs={12}
                                            key={item.heading}>
                                            <PricingCard
                                                onClick={() => navigate('/Pricing')}
                                                heading={item.heading}
                                                features={item.features}
                                                btnLabel={item.btnLabel}
                                                note={item?.specialNote}
                                                explanation={item.explanation}
                                            />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </div>
                    </div>
                </section>
                {/* section 8  */}
                {/* Footer  */}
                <Footer />
            </div>
        </>
    )
}
