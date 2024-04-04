import React, { useEffect } from 'react'
import './ReputationManagement.css'
import guestRecImg2 from '../../assets/imgs/guestRecImg2.png'
import guestRecImg4 from '../../assets/imgs/guestRecImg4.png'
import { Grid } from '@mui/material'
import Btn from '../../components/btn/Btn'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import SliderCustom from '../../components/sliderCustom/SliderCustom'
import repMgtImg2 from '../../assets/imgs/repMgtImg2.png'
import repMgtImg3 from '../../assets/imgs/repMgtImg3.png'
import repImg2 from '../../assets/imgs/repImg2.png'
import repImg3 from '../../assets/imgs/repImg3.png'
import EastIcon from '@mui/icons-material/East';
import useIsMobile from '../../hooks/useIsMobile'



export default function ReputationManagement() {
    let isMobile = useIsMobile();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <NavBar hideModal={true} />
            <div className="repMgt-hero" >
                <div style={{ textAlign: 'center' }}>
                    <div className="spMsg-hero-contentBox">
                        <div className="spMsg-hero-heading ">Discover our reputation  <br className='desktop' /> management</div>
                        <div className="spMsg-hero-btns" style={{ justifyContent: 'center' }}>
                            <Btn label='Get Started' />
                            <Btn label="Open an account" className='geoFence-hero-btn' style={{ padding: '0px 45px' }} />
                        </div>
                    </div>
                </div>
            </div>
            {/* section 2  */}
            <section className="padding" style={{ paddingTop: '2%' }}>
                <div className="global-heading1 mb-8per mt-8per">Learn more about reputation <br className='desktop' /> management</div>
                {/* 1st  */}
                <div className="mb-8per mt-8per">
                    <Grid container spacing={5}>
                        <Grid item sm={5} xs={12}>
                            <div className="message360Padding marginT-mobile">
                                <img src={repImg2} alt="img" />
                            </div>
                        </Grid>
                        <Grid item sm={7} xs={12}>
                            <div className="message360Padding">
                                <div className="message360-heading1 mb-40">Reputation management</div>
                                <div className="spMsg-text1 mb-40">
                                    Reputation management is the practice of influencing stakeholder perceptions and public conversations about an  organization and its brands. It includes monitoring perceptions and conversations, responding to reputation threats, and  proactively seizing opportunities to boost reputation
                                    <br /><br />
                                    Reputation management is part of a comprehensive organizational strategy that implicates most business functions in some  capacity, including communications, marketing, legal, customer experience, and sales and loyalty.
                                </div>
                                <div className="home-card-btnTxt mb-30">Learn more about us <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                {/* 2nd  */}
                <div className='mb-8per' >
                    <Grid container spacing={5}>
                        {isMobile && <Grid item sm={6} xs={12}>
                            <div className="message360Padding">
                                <img src={repImg3} alt="img" width='90%' />
                            </div>
                        </Grid>}
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding">
                                <div className="message360-heading1 spMsgcontentTopMargin mb-40">Online reputation improvement</div>
                                <div className="spMsg-text1 mb-40">
                                    Directful empowers hoteliers to actively manage their online reputation takeholder perceptions and public conversations about an  organization and its brands. It includes monitoring perceptions and conversations, responding to reputation threats, and  proactively seizing opportunities to boost reputation
                                </div>
                                <div className="home-card-btnTxt mb-30">Learn more about us <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
                            </div>
                        </Grid>
                        {!isMobile && <Grid item sm={6} xs={12}>
                            <div className="message360Padding">
                                <img src={repImg3} alt="img" width='90%' />
                            </div>
                        </Grid>}
                    </Grid>
                </div>
                {/* 3rd  */}
                <div>
                    <Grid container spacing={5}>
                        <Grid item sm={5} xs={12}>
                            <div className="message360Padding">
                                <img src={guestRecImg2} alt="img" />
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding">
                                <div className="message360-heading1 mb-40">Reputation management</div>
                                <div className="spMsg-text1 mb-40">
                                    Reputation management is the practice of influencing stakeholder perceptions and public conversations about an organization and its brands. It includes monitoring perceptions and proactively seizing opportunities to boost reputation.
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                {/* 4th  */}
                <div className='mt-8per'>
                    <Grid container spacing={5}>
                        {isMobile && <Grid item sm={5} xs={12}>
                            <div className="message360Padding ">
                                <img src={repMgtImg2} alt="img" />
                            </div>
                        </Grid>}
                        <Grid item sm={5.5} xs={12}>
                            <div className="message360Padding mt-40">
                                <div className="message360-heading1 mb-40">Organizational strategy</div>
                                <div className="spMsg-text1 mb-40">
                                    Reputation management is part of a comprehensive organizational strategy that implicates most business functions in some capacity, including communications, marketing, legal, customer experience, and sales and loyalty.
                                </div>
                            </div>
                        </Grid>
                        {!isMobile && <Grid item sm={5} xs={12}>
                            <div className="message360Padding ">
                                <img src={repMgtImg2} alt="img" />
                            </div>
                        </Grid>}
                    </Grid>
                </div>
            </section>
            {/* section 3  */}
            <section className="padding">
                <div className="global-heading1 mb-8per ">Messages that can be sent out after</div>
                {/* 1st  */}
                <div>
                    <Grid container spacing={5}>
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding">
                                <img src={repMgtImg3} alt="img" />
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding">

                                <div className="message360-heading1 mb-40">In Hospitatility</div>
                                <div className="spMsg-text1 mb-40">
                                    <div className='repMgt-list'>
                                        • Check-in
                                        <br /><br />
                                        • Room service
                                        <br /><br />
                                        • Housekeeping
                                        <br /><br />
                                        • Restaurant
                                        <br /><br />
                                        • Valet
                                        <br /><br />
                                        • Spa
                                    </div>
                                </div>
                            </div>
                        </Grid>

                    </Grid>
                </div>
            </section>


            <Footer />
        </>
    )
}
