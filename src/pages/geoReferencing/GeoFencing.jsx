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
                    <div className="geoFence-hero-heading">Geofencing</div>
                </div>
            </section>
            {/* section 2  */}
            <section className="padding ">
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
                            <img src={geoFenceImg20} alt='img' width='100%' style={{marginTop:'50px'}} />
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
                            <div style={{ textAlign: 'center' }}>Contact Ginny at <br /> sales@iveew.co</div>
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <div className="geoReference-sec3-right">
                            We will set it up, provide access to your information, set up automated messages when in proximity to an amenity at the hotel or surrounding area


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
                            In the same way as we can help with complementary businesses around a location,  can provide incentives from your business when a guest approaches a competitive business.
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
