import React, { useEffect } from 'react'
import './MobileMarketStrategies.css'
import { Grid } from '@mui/material'
import Btn from '../../components/btn/Btn'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import mblMarketImg2 from '../../assets/imgs/mblMarketImg2.png'
import mblMarketImg3 from '../../assets/imgs/mblMarketImg3.png'
import mblMarketImg4 from '../../assets/imgs/mblMarketImg4.png'
import mblMarketImg5 from '../../assets/imgs/mblMarketImg5.png'
import mblMarketImg6 from '../../assets/imgs/mblMarketImg6.png'
import useIsMobile from '../../hooks/useIsMobile'
import EastIcon from '@mui/icons-material/East';



export default function MobileMarketStrategies() {
    let isMobile = useIsMobile();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <NavBar hideModal={true} />
            <div className="mblMarket-hero" >
                <div style={{ textAlign: 'center' }}>
                    <div className="spMsg-hero-contentBox">
                        <div className="spMsg-hero-heading ">Mobile <br className='desktop' /> Strategies</div>
                    </div>
                </div>
            </div>
            {/* section 2  */}
            <section className="padding" style={{ paddingTop: '2%' }}>
                <div className="global-heading1 mb-8per mt-8per">Effective mobile marketing strategies
                </div>
                {/* 1st  */}
                <div className='mt-8per'>
                    <Grid container spacing={5}>
                        {isMobile && <Grid item sm={6} xs={12}>
                            <div className="message360Padding marginT-mobile ">
                                <img src={mblMarketImg2} alt="img" />
                            </div>
                        </Grid>}
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding marginT-desktop">
                                <div className="message360-heading1 mb-40">Personalization- <br className="desktop" /> Personalization Engine</div>
                                <div className="spMsg-text1 mb-40">
                                    This is dummy text ents based on shared characteristics or needs. By identifying and understanding the distinct needs, preferences, and behaviors of different consumer groups within a market, businesses .
                                </div>
                                <div className="home-card-btnTxt mb-30">Learn more about us <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
                            </div>
                        </Grid>
                        {!isMobile && <Grid item sm={5} xs={12}>
                            <div className="message360Padding ">
                                <img src={mblMarketImg2} alt="img" />
                            </div>
                        </Grid>}
                    </Grid>
                </div>
                {/* 2nd  */}
                <div className='mt-8per'>
                    <Grid container spacing={5}>
                        <Grid item sm={5} xs={12}>
                            <div className="message360Padding ">
                                <img src={mblMarketImg3} alt="img" />
                            </div>
                        </Grid>
                        {!isMobile && <Grid xs={1} />}
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding marginT-desktop">

                                <div className="message360-heading1 mb-40">Exclusive Offers-Segmentation    </div>
                                <div className="spMsg-text1 mb-40">
                                    Market segmentation is a fundamental strategy in marketing that involves dividing a broad target market into smaller, more manageable segments based on shared characteristics or needs. By identifying and understanding the distinct needs, preferences, and behaviors of different consumer groups within a market, businesses .
                                </div>
                                <div className="home-card-btnTxt mb-30">Learn more about us <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                {/* 3rd  */}
                <div className='mt-8per'>
                    <Grid container spacing={5}>
                        {isMobile && <Grid item sm={6} xs={12}>
                            <div className="message360Padding marginT-mobile ">
                                <img src={mblMarketImg4} alt="img" />
                            </div>
                        </Grid>}
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding marginT-desktop">
                                <div className="message360-heading1 mb-40">Hyperlocal Targeting- <br className="desktop" /> Geofencing</div>
                                <div className="spMsg-text1 mb-40">
                                    Geofencing for hotel properties surrounding businesses involves using location-based technology to create virtual boundaries around a physical location, such as a hotel, to trigger personalized interactions with guests. This technology allows hotels to offer tailored services and promotions based on a guest's location within the geofenced area. Some key strategies for utilizing geofencing in the hospitality industry include:
                                </div>
                                <div className="home-card-btnTxt mb-30">Learn more about us <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
                            </div>
                        </Grid>
                        {!isMobile && <Grid item sm={5} xs={12}>
                            <div className="message360Padding ">
                                <img src={mblMarketImg4} alt="img" />
                            </div>
                        </Grid>}
                    </Grid>
                </div>
                {/* 4th  */}
                <div className='mt-8per'>
                    <Grid container spacing={5}>
                        <Grid item sm={5} xs={12}>
                            <div className="message360Padding ">
                                <img src={mblMarketImg5} alt="img" />
                            </div>
                        </Grid>
                        {!isMobile && <Grid xs={1} />}
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding marginT-desktop">

                                <div className="message360-heading1 mb-40">Consider Time and Place-  <br className="desktop" />Messaging    </div>
                                <div className="spMsg-text1 mb-40">
                                    Messaging customers value quick, direct communication, leading to increased loyalty and satisfaction. According to a Podium report, 90% of consumers prefer interacting with brands via text message.
                                    <br /><br />
                                    With 86% feeling more positive about a brand after a messaging experience.  If message is contextual, it increases the conversion rate.
                                </div>
                                <div className="home-card-btnTxt mb-30">Learn more about us <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                {/* 5th  */}
                <div className='mt-8per'>
                    <Grid container spacing={5}>
                        {isMobile && <Grid item sm={6} xs={12}>
                            <div className="message360Padding marginT-mobile ">
                                <img src={mblMarketImg6} alt="img" />
                            </div>
                        </Grid>}
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding marginT-desktop">
                                <div className="message360-heading1 mb-40">QR Codes- Advertising</div>
                                <div className="spMsg-text1 mb-40">
                                    Geofencing for hotel properties surrounding businesses involves using location-based technology to create virtual boundaries around a physical location, such as a hotel, to trigger personalized interactions with guests. This technology allows hotels to offer tailored services and promotions based on a guest's location within the geofenced area. Some key strategies for utilizing geofencing in the hospitality industry include:
                                </div>
                                <div className="home-card-btnTxt mb-30">Learn more about us <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
                            </div>
                        </Grid>
                        {!isMobile && <Grid item sm={5} xs={12}>
                            <div className="message360Padding ">
                                <img src={mblMarketImg6} alt="img" />
                            </div>
                        </Grid>}
                    </Grid>
                </div>
            </section>
            {/* section 3  */}
            <Footer />
        </>
    )
}
