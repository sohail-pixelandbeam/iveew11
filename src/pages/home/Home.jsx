import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import NavBar from '../../components/navbar/Navbar';
import { Grid } from '@mui/material';
import imgWatch from '../../assets/imgs/imgWatch.png'
import Footer from '../../components/footer/Footer';
import FullScreenVideo from '../../components/fullScreenVideo/FullScreenVideo';
import { useNavigate } from 'react-router-dom';
import img90 from '../../assets/imgs/partnersImg.png';
import img9 from '../../assets/imgs/partnersImg1.png';
import guestRecImg2 from '../../assets/imgs/guestRecImg2.png'
import guestReturnImg1 from '../../assets/imgs/guestReturnImg.jpg';
import ttaImg5 from '../../assets/imgs/ttaImg5.png';
import geoImg1 from '../../assets/imgs/geoImg1.png'
import perImg1 from '../../assets/imgs/perImg1.png'
import { CardLeft } from './CardLeft';
import { CardRight } from './CardRight';
import useIsMobile from '../../hooks/useIsMobile';


export default function Home() {
    let [hideModal, setHideModal] = useState(true);
    const isMobile = useIsMobile();
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

    const words = ['AI', 'Powered', 'Hospitality', 'Tools', 'connecting', 'with', 'guests'];


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
                                            <li>Know guests on a different level makes it easier to identify high-value customers

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

                {/* section 5  */}
                <section className="home-sec5-box padding">
                    <div className="global-heading1">Applications</div>
                    <div className="sec5-cards-box">
                        <CardLeft
                            img={img9}
                            heading="Partners "
                            content="Integration with quality of suppliers, providing over 20,000 hotels and 150,000 tickets, tours and activities. Our partners include Oracle, Sabre SynXis Platform, Stayntouch, Viator, GetYourGuide, Rezdy and more are on the way"
                            to='/Partners'

                        />
                        <CardRight
                            img={guestRecImg2}
                            heading="Guest Recognition"
                            content="Our patented guest recognition application allows hotels and businesses to recognize guests and customers when approaching the hotel or entering a store.  Geofencing and beacons allow hotels and businesses to recognize guests and customers."
                            to='/GuestRecognition'
                        />
                        <CardLeft
                            img={guestReturnImg1}
                            heading="Guest Direct "
                            content="Converting guest bookings  from OTAs to the hotel website saves  20-30% per booking.  Calculating the annual saving reveals the value of direct bookings versus OTAs.  

                            Use the Guest Direct Calculator to determine your potential savings.
                            "
                            to='/MobileMarketStrategies'
                        />
                        <CardRight
                            img={perImg1}
                            heading="Personalization"
                            content="Select mobile confirmation from the page that shows the travel information.
                            Link to Personalization Engine that utilizes AI to help the guest figure out what their best options are.
                            Guest receives the information
                            Guest reviews offers based on their personal references
                            Guest purchases or places on hold a ticket
                            Guest receives a customized curated page that can be saved to their mobile phone along with their digital vouchers to save in mobile wallet
                            "
                            to='/Personalization'
                        />
                        <CardLeft
                            img={geoImg1}
                            heading="Geo Fencing"
                            content="Geofencing your property can help identify guests, location and interest. Partner with local businesses that provide the same qualities that you guest may like. Impove Guest Experience.
                            For more satisfied guests, partner with like minded retail stores, gyms, we will provide a list or select the ones we feel match your property.
                            Provide your guests offer from local Business where they will shop. This create a hyper-local market opportunity.
                            We will set it up, provide access to your information, set up automated messages when in proximity to an amenity at the hotel or surrounding area
                            "
                            to='/GeoFencing'
                        />
                        <CardRight
                            img={ttaImg5}
                            heading="Tickets Tours & Activities"
                            content="With over 150,000, covering 1,600 airports in cities around the world. 
                            Fascinated by water-and its power to cut through the rock adn change the shape of landscapes adn coastlines? Then consider our Aquatic Wonder itinerary. Experience the crahed thunder of Niagara Falls and the diverse beaches of Sydney and Miami. Explore the stiking Norwegian fjords. Marvel at the man-made Panama Canal, offering a short-cut across the centre of the Americas and bringing new-found prosperity to the country it crosses.
                            "
                            to='/TickeitngTours'
                        />
                    </div>
                </section>
                {/* Footer  */}
                <Footer />
            </div>
        </>
    )
}
