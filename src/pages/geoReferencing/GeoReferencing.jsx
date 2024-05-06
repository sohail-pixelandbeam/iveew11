import React, { useEffect, useState } from 'react';
import './GeoReferencing.css';
import geoReferencingImg1 from '../../assets/imgs/geoReferencingImg1.jpeg';
import geoImg1 from '../../assets/imgs/geoImg1.png'
import geoFenceImg2 from '../../assets/imgs/geoFenceImg2.png'
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





export default function GeoReferencing() {
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
                    <div className="geoFence-hero-heading">Geo
                        <br className='desktop' /> Referencing</div>
                </div>
            </section>
            {/* section 2  */}
            <section className="padding ">
                <div className="global-heading1 mb-8per">Learn more about Guest <br className="desktop" />
                    Geo Referencing</div>
                <div className="geoReference-sec2-blackBox">
                    <img src={geoImg1} alt="img" width='100%' />
                    <div>
                        Geofencing your property can help identify guests, location and interest. Partner with local businesses that provide the same qualities that you guest may like. Impove Guest Experience.
                    </div>
                </div>
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
                            For more satisfied guests, partner with like minded retail stores, gyms, we will provide a list or select the ones we feel match your property.

                        </div>
                    </Grid>
                    {!isMobile && <Grid item sm={6} xs={12}>
                        <div className="geoReference-sec3-blackBox">
                            <img src={geoFenceImg2} alt="img" />
                            <div>Provide your guests offer from local Business where they will shop. This creates a hyper-local market opportunity.</div>
                        </div>
                    </Grid>}
                    {/* 2nd  */}
                    <Grid item sm={6} xs={12}>
                        <div className="geoReference-sec3-blackBox">
                            <img src={geoReferencingImg1} alt="img" />
                            <div>Contact Ginny at <br /> sales@iveew.co</div>
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <div className="geoReference-sec3-right">
                            We will set it up, provide access to your information, set up automated messages when in proximity to an amenity at the hotel or surrounding area


                        </div>
                    </Grid>
                </Grid>
            </section>
            <Footer />
        </>
    )
}
