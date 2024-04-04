import React from 'react'
import './Message360.css'
import NavBar from '../../components/navbar/Navbar'
import Btn from '../../components/btn/Btn'
import { Grid } from '@mui/material'
import message360img1 from '../../assets/imgs/message360img1.png'
import message360img2 from '../../assets/imgs/message360img2.png'
import message360img3 from '../../assets/imgs/message360img3.png'
import message360icon1 from '../../assets/imgs/message360icon1.png'
import message360icon2 from '../../assets/imgs/message360icon2.png'
import geoFenceImg6 from '../../assets/imgs/geoFenceImg6.png';
import { useEffect } from 'react'
import Footer from '../../components/footer/Footer'
import useIsMobile from '../../hooks/useIsMobile'

export default function Message360() {
    let isMobile = useIsMobile();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <NavBar hideModal={true} />
            {/* section 1  */}
            <section className='message360-hero'>
                <div className="geoFence-hero-contentBox">
                    <div className="message360-hero-heading">Message <br /> 360</div>
                    <div className="message360-hero-content">The value of adding messaging to your business lies in improved communication, customer engagement, and revenue generation. Messaging apps offer a convenient and efficient way to interact with customers, leading to increased customer loyalty and satisfaction. Recently study reflects 75% SMS adoption.</div>
                    <div className="geoFence-hero-btns">
                        <Btn label='Get Started' />
                        <Btn label="Open an account" className='geoFence-hero-btn' style={{ padding: '0px 45px' }} />
                    </div>
                </div>
            </section>
            {/* section 2  */}
            <section className="padding">
                <Grid container spacing={5}>
                    <Grid item sm={6} xs={12}>
                        <div className="message360Padding">
                            <img src={message360img1} alt="img" />
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <div className="message360-heading1 mb-30">Message 360</div>
                        <div className="message360-text1">Messaging customers value quick, direct communication, leading to increased loyalty and satisfaction. According to a Podium report, 90% of consumers prefer interacting with brands via text message.
                            <br /> <br />
                            With 86% feeling more positive about a brand after a messaging experience.  If message is contextual, it increases the conversion rate.
                        </div>
                    </Grid>
                </Grid>
            </section>
            {/* section 3  */}
            <section className="padding" style={{ paddingTop: '2%' }}>
                <div className="global-heading1 mb-8per marginT-mobile">What does message-360 <br className='desktop' /> does?</div>
                <div className="mb-8per">
                    <Grid container spacing={5}>
                        {isMobile &&
                            <Grid item sm={6} xs={12}>
                                <div className="message360Padding ">
                                    <img src={message360img2} alt="img" />
                                </div>
                            </Grid>
                        }
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding">
                                <div className="message360-icon">
                                    <img src={message360icon1} alt="icon" />
                                </div>
                                <div className="message360-heading1 mb-30">Individual Messaging</div>
                                <div className="message360-text1">This is dummy text to show design feel and how does it look. Increased loyalty and satisfaction. According to a Podium report, 90% of consumers prefer interacting with brands via text message.
                                    <br /> <br />
                                    With 86% feeling more positive about a brand after a messaging experience.  If message is contextual, it increases the conversion rate.
                                </div>
                            </div>
                        </Grid>
                        {!isMobile && <Grid item sm={6} xs={12}>
                            <div className="message360Padding message360-desktopImg">
                                <img src={message360img2} alt="img" />
                            </div>
                        </Grid>}
                    </Grid>
                </div>
                <div className="">
                    <Grid container spacing={5}>
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding">
                                <img src={message360img3} alt="img" />
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding">
                                <div className="message360-icon1">
                                    <img src={message360icon2} alt="icon" />
                                </div>
                                <div className="message360-heading1 mb-30">Bulk messaging</div>
                                <div className="message360-text1">This is dummy text to show design feel and how does it look. Increased loyalty and satisfaction. According to a Podium report, 90% of consumers prefer interacting with brands via text message.
                                    <br /> <br />
                                    With 86% feeling more positive about a brand after a messaging experience.  If message is contextual, it increases the conversion rate.
                                </div>
                            </div>
                        </Grid>

                    </Grid>
                </div>

            </section>
            {/* section 4  */}
            <section className="padding" style={{ paddingTop: 0 }}>
                <div className='message360-ListSection' >
                    <div className="global-heading1 mb-8per">Message-360 <br /> widgets</div>
                    <Grid container spacing={3}>
                        <Grid item sm={8} xs={12}>
                            <div className='message360-list'>
                                • Geo-Location
                                <br /><br />
                                • Special Occasions
                                <br /><br />
                                • Confirmation Widget
                                <br /><br />
                                • Guest Back
                            </div>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <div className='message360-list'>
                                • Gift Cards
                                <br /><br />
                                • Loyalty Cards
                                <br /><br />
                                • Vouchers
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </section>
            <Footer />

        </>

    )
}
