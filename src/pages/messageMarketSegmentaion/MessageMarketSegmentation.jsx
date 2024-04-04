import React, { useEffect } from 'react'
import './MessageMarketSegmentation.css'
import { Grid } from '@mui/material'
import Btn from '../../components/btn/Btn'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import SliderCustom from '../../components/sliderCustom/SliderCustom'
import geoFenceImg6 from '../../assets/imgs/geoFenceImg6.png'
import msgSegImg2 from '../../assets/imgs/msgSegImg2.png'
import msgSegImg3 from '../../assets/imgs/msgSegImg3.png'
import useIsMobile from '../../hooks/useIsMobile'


export default function MessageMarketSegmentation() {
    let isMobile = useIsMobile();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <NavBar hideModal={true} />
            <div className="msgSeg-hero" >
                <div style={{ textAlign: 'center' }}>
                    <div className="spMsg-hero-contentBox">
                        <div className="spMsg-hero-heading ">Message market <br className='desktop' /> segmentation</div>
                        <div className="spMsg-hero-btns" style={{ justifyContent: 'center' }}>
                            <Btn label='Get Started' />
                            <Btn label="Open an account" className='geoFence-hero-btn' style={{ padding: '0px 45px' }} />
                        </div>
                    </div>
                </div>
            </div>
            {/* section 2  */}
            <section className="padding" style={{ paddingTop: '2%' }}>

                {/* 1st  */}
                <div className='mt-8per'>
                    <Grid container spacing={5}>
                        {isMobile && <Grid item sm={6} xs={12}>
                            <div className="message360Padding marginT-mobile ">
                                <img src={msgSegImg2} alt="img" />
                            </div>
                        </Grid>}
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding">
                                <div className="message360-heading1 mb-40">Market segmentation</div>
                                <div className="spMsg-text1 mb-40">
                                    Market segmentation is a fundamental strategy in marketing that involves dividing a broad target market into smaller, more manageable segments based on shared characteristics or needs. By identifying and understanding the distinct needs, preferences, and behaviors of different consumer groups within a market, businesses .
                                </div>
                            </div>
                        </Grid>
                        {!isMobile && <Grid item sm={6} xs={12}>
                            <div className="message360Padding ">
                                <img src={msgSegImg2} alt="img" />
                            </div>
                        </Grid>}
                    </Grid>
                </div>
                {/* 2nd  */}
                <div className='mt-8per'>
                    <Grid container spacing={5}>
                        <Grid item sm={5} xs={12}>
                            <div className="message360Padding ">
                                <img src={msgSegImg3} alt="img" />
                            </div>
                        </Grid>
                        {!isMobile && <Grid xs={1}/>}
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding">

                                <div className="message360-heading1 mb-40">Effective market segmentation    </div>
                                <div className="spMsg-text1 mb-40">
                                    Effective market segmentation relies on careful analysis of various demographic, geographic, psychographic, and behavioral factors to identify meaningful differences among consumers. Through segmentation, businesses can identify niche markets with unmet needs or underserved segments where they can gain a competitive advantage.
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </section>
            <img src={geoFenceImg6} alt="img" width='100%' />
            {/* section 3  */}
            <div className="mt-8per"></div>
            <SliderCustom/>
            <Footer />
        </>
    )
}
