import React, { useEffect, useState } from 'react';
import geoConquestingImg1 from '../../assets/imgs/geoConquestingImg1.jpeg'
import NavBar from '../../components/navbar/Navbar';
import { Grid } from '@mui/material';
import Footer from '../../components/footer/Footer';
import useIsMobile from '../../hooks/useIsMobile';


export default function GeoConquestiong() {
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
                        <br className='desktop' /> Conquesting</div>
                </div>
            </section>
            {/* section 2 */}
            <section className="padding ">
                <div className="global-heading1 mb-8per">Learn more about Guest <br className="desktop" />
                    Geo Conquesting</div>

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
