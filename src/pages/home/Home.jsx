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

export default function Home() {
    let [hideModal, setHideModal] = useState(true);
    const navigate = useNavigate()
    const pricingData = [
        {
            heading: "SMB-Essentials",
            explanation: "Per Location",
            price: "$350/month per location",
            btnLabel: "Set-up account to get started",
            features: ['Messaging', 'Market Segmentation', 'Personalization', 'Reputation Management', 'Booking/Purchase Confirmation', 'Chatbot AI', 'QR Platform (20 Codes)'],
            specialNote: 'Select 4'
        },
        {
            heading: "SME-Premium",
            explanation: "Per Location",
            price: "$450/month per location",
            btnLabel: "Contact sales",
            features: ['Customer Recognition', 'Blast-M', 'Message-360', 'Loyality Integration', 'Geofencing', 'Voucher & Gift Cards'],
            specialNote: 'Select 4',
        },
        {
            heading: "Enterprise",
            explanation: "Per Location",
            price: "$700/month per location",
            btnLabel: "Contact sales",
            features: ['Inspirations', 'Asset Tracking', 'RFID (100 tags)', 'QR Platform (100 Codes)'],
            specialNote: 'All Platforms',
        },
    ]

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handleThumbnailClick = () => {
        setIsVideoPlaying(true);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <NavBar hideModal={hideModal} />
            <div onMouseEnter={() => setHideModal(!hideModal)}>
                {/* section 1 banner section  */}
                <section className='home-banner-box'>
                    <Grid container spacing={5}>
                        <Grid item sm={6} >
                            <div className="home-banner-heading">
                                The AI Powered Tools <br className='desktop' />
                                To Connect Customers <br />
                                And Guests
                            </div>
                            <div className="home-banner-content">
                                This is dummy text which is used to inesses involves using location-based technology to create virtual boundaries around a physical location, such as a hotel, to trigger personalized interactions with guests. This technology allows hotels to offer tailored services and promotions based on a guest's location .
                            </div>
                            <Btn label='Get Started' />
                        </Grid>
                        <Grid item sm={6} >

                        </Grid>
                    </Grid>
                </section>
                {/* section 2  */}
                <section className='home-sec2-box padding'>
                    <div className="global-heading1" >Empower customers or guests to receive   <br />personalized offers that relate to them the most</div>
                    <div className="home-sec2-text">Trusted Partners</div>
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
                                                price={item.price}
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
