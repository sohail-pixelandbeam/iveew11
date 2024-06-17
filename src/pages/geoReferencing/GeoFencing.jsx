import React, { useEffect, useState } from 'react';
import './GeoFencing.css';
import geoReferencingImg1 from '../../assets/imgs/geoReferencingImg1.jpeg';
import geoConquestingImg1 from '../../assets/imgs/geoConquestingImg1.jpeg'
import geoImg1 from '../../assets/imgs/geoImg1.png'
import geoFenceImg2 from '../../assets/imgs/geoFenceImg2.png'
import geoFenceImg20 from '../../assets/imgs/geoFenceImg20.png'
import NavBar from '../../components/navbar/Navbar';
import { Grid } from '@mui/material';
import Footer from '../../components/footer/Footer';
import useIsMobile from '../../hooks/useIsMobile';


export default function GeoFencing() {
    let [hideModal, setHideModal] = useState(true);
    let isMobile = useIsMobile();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            {/* <AutoScroll /> */}
            <NavBar hideModal={hideModal} hideNote={true} />
            {/* section 1  */}
            <section className='bookingEngineWidget-hero'>
                <div className="geoFence-hero-contentBox">
                    <div className="geoFence-hero-heading geoFence-hero-heading1">Geofencing</div>
                </div>
            </section>
            {/* section 2  */}
            <section className="padding ">
                The hospitality industry has seen a significant shift towards innovative technologies to enhance guest experiences. Geofencing is one of them, it is a location-based service that allows businesses, including hotels, resorts, and restaurants to target guests with specific information to enhance guest experiences.
                <br /><br />
                Geofencing technology relies on GPS, utilizing longitude and latitude coordinates to establish a virtual fence, and other established technologies such as RFID, WiFi and Bluetooth Low Energy (BLE) beacons. Combining these 4 technologies provides the hotel, resort, and restaurants with the ability to message offers, specials, surveys, all tied to specific points within the property or business.

                <Grid container spacing={5}>

                    {/* 2nd  */}

                    <Grid item sm={5} xs={12}>
                        <div className="geoReference-sec3-right">
                            <b>
                                Benefits of Geofencing:
                                <br /><br />
                                <ol>
                                    <li>Enhanced Guest Experience</li>
                                    <br /> <li>Increased Revenue</li>
                                    <br /> <li>Improved Marketing Effectiveness:</li>
                                    <br /> <li>Operational Optimization:</li>
                                    <br /> <li>Reward loyalty program members:</li>
                                </ol>
                            </b>
                        </div>
                    </Grid>
                    <Grid item sm={7} xs={12}>
                        <div className="geoReference-sec2-blackBox">
                            <img src={geoImg1} alt="img" width='100%' />
                        </div>
                    </Grid>
                </Grid>



                {/* section 3  */}
                <Grid container spacing={5}>
                    {/* 1st  */}
                    {isMobile && <Grid item sm={6} xs={12}>
                        <div className="geoReference-sec3-blackBox">
                            <img src={geoFenceImg2} alt="img" />
                            <div>Provide your guests offer from local Business where they will shop. This creates a hyper-local market opportunity.</div>
                        </div>
                    </Grid>}
                    <Grid item sm={6} xs={12}>
                        <div className="geoReference-sec3-right">
                            Hotels can leverage their local connections to provide personalized recommendations and concierge services tailored to guests' interests and preferences. This could include suggesting local hidden gems, making reservations, arranging tours or activities, and more - adding significant value to the stay


                            <img src={geoFenceImg20} alt='img' width='100%' style={{ marginTop: '50px' }} />
                        </div>
                    </Grid>
                    {!isMobile && <Grid item sm={6} xs={12}>
                        <div className="geoReference-sec3-blackBox">
                            <img src={geoFenceImg2} alt="img" />
                            <div>Improve guest satisfaction by introducing them to businesses that compliments your hotel.  Local marketing is an important attribute towards a positive guest experience.
                            </div>
                        </div>
                    </Grid>}
                    {/* 2nd  */}
                    <Grid item sm={6} xs={12}>
                        <div className="geoReference-sec3-blackBox">
                            <img src={geoReferencingImg1} alt="img" />
                            <div style={{ textAlign: 'center' }}>Contact Ginny at <br /> sales@iveew.co</div>
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <div className="geoReference-sec3-right">
                            Our staff will help you build the right message when a guest crosses the virtual geofence.  Whether it is an offer or special notice about an event.  We can build a message when a guest is within  close proximity to an amenity the hotel provides.

                        </div>
                    </Grid>
                </Grid>
            </section>
            <section className="padding ">
                {/* section 3  */}
                <Grid container spacing={5}>
                    {/* 1st  */}
                    {isMobile && <Grid item sm={6} xs={12}>
                        <img src={geoConquestingImg1} alt="img" width={'100%'} />
                    </Grid>}
                    <Grid item sm={6} xs={12}>
                        <div className="geoReference-sec3-right">
                            GeoConquesting is used when a business wants to advertise to its competitors.  Geofencing the competitor business and sending out messages when a customer  is in proximity of their business may be a way to draw the customer back to your business. An offer is very important at this point.

                        </div>
                    </Grid>
                    {!isMobile && <Grid item sm={6} xs={12}>
                        <img src={geoConquestingImg1} alt="img" width={'100%'} />
                    </Grid>}
                </Grid>
            </section>
            <Footer />
        </>
    )
}
