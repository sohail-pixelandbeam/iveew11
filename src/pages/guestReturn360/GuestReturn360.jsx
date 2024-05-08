import React, { useEffect, useState } from 'react';
import guestReturnImg1 from '../../assets/imgs/guestReturnImg.jpg';
import NavBar from '../../components/navbar/Navbar';
import EastIcon from '@mui/icons-material/East';
import Btn from '../../components/btn/Btn';
import InputField from '../../components/inputField/InputField'
import { Grid } from '@mui/material';
import Footer from '../../components/footer/Footer';
import useIsMobile from '../../hooks/useIsMobile';
import InputIcon from '../../components/inputIcon/InputIcon';
import { BorderAll } from '@mui/icons-material';
import SelectBox from '../../components/selectBox/SelectBox';
import languages from '../../assets/json/languages.json';





export default function GuestReturn360() {
    let [hideModal, setHideModal] = useState(true);
    let isMobile = useIsMobile();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <NavBar hideModal={hideModal} />
            {/* section 1  */}
            <section className='bookingEngineWidget-hero'>
                <div className="geoFence-hero-contentBox">
                    <div className="geoFence-hero-heading">Guest
                        <br className='desktop' /> Return - 360</div>
                </div>
            </section>
            {/* section 2  */}
            <section className="padding ">
                <Grid container spacing={5}>

                    {isMobile && <Grid item sm={6} xs={12}>
                        <div className="geoFence-sec7-leftBox">
                            <img src={guestReturnImg1} alt="img" width='100%' />
                        </div>
                    </Grid>}
                    <Grid item sm={6} xs={12}>
                        <div className="geoFence-sec7-rightBox">
                            <div>Communicating with guests has never been easier.  Our Guest Return-360  application uses AI insights to help hotels automate communication with guests who booked through a 3rd party site and have not visited for 60 days.  You have full control of all communication and offers that are sent out.
                                <br /><br />
                                AI insights allow you to:

                            </div>
                            <ul>
                                <li>Determine your guests' preferences</li>
                                <li>Search their visit dates and number of times stayed
                                </li>
                                <li>
                                    Activities and events occurring during their past visits, as well as weather during the stays and reasons for the stay
                                </li>
                                <li>Information from partnership apps to see where past and current guests are at any time, plus additional AI insights
                                </li>
                            </ul>
                            <div>
                                Integrating a 2-way interface with hotels through their PMSs, iVeew determines how to bring them back with incentives and special offers. If we are currently not a partner with your PMS, please email sales@iveew.co.
                                <br /><br />
                                Ask about our SaaS application to increase bookings and creates incentives for your returning guests to bring friends.

                            </div>

                        </div>
                    </Grid>
                    {!isMobile && <Grid item sm={6} xs={12}>
                        <div className="geoFence-sec7-leftBox">
                            <img src={guestReturnImg1} alt="img" width='90%' />
                        </div>
                    </Grid>}
                </Grid>
            </section>
            <Footer />
        </>
    )
}
