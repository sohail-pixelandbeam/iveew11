import React, { useEffect } from 'react'
import './AIBot.css'
import bookEngImg2 from '../../assets/imgs/bookEngImg2.png'
import bookEngImg3 from '../../assets/imgs/bookEngImg3.png'
import aiBotImg2 from '../../assets/imgs/aiBotImg2.png'
import aiBotImg3 from '../../assets/imgs/aiBotImg3.png'
import aiBotImg4 from '../../assets/imgs/aiBotImg4.png'
import aiBotImg5 from '../../assets/imgs/aiBotImg5.png'
import aiBotImg6 from '../../assets/imgs/aiBotImg6.png'
import aiBotImg7 from '../../assets/imgs/aiBotImg7.png'
import aiBotImg8 from '../../assets/imgs/aiBotImg8.png'
import aiBotImg9 from '../../assets/imgs/aiBotImg9.png'
import aiBotIcon1 from '../../assets/imgs/aiBotIcon1.png'
import aiBotIcon2 from '../../assets/imgs/aiBotIcon2.png'
import aiBotIcon3 from '../../assets/imgs/aiBotIcon3.png'
import aiBotIcon4 from '../../assets/imgs/aiBotIcon4.png'
import aiBotIcon5 from '../../assets/imgs/aiBotIcon5.png'
import aiBotIcon6 from '../../assets/imgs/aiBotIcon6.png'
import { Grid } from '@mui/material'
import Btn from '../../components/btn/Btn'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import SliderCustom from '../../components/sliderCustom/SliderCustom'
import useIsMobile from '../../hooks/useIsMobile'


export default function AIBot() {
    let isMobile = useIsMobile();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const data1 = [
        {
            icon: aiBotIcon4,
            heading: "Quickened accounting.",
            content: "Get accounting rule suggestions to further automate GL coding. Shorten the tail end of transactions that need manual attention",
        },
        {
            icon: aiBotIcon5,
            heading: "Access personalized spending insights.",
            content: "Customize what you want Brex AI to find for you, such as expensive purchases, anomalies or expenses that exceed per-diem limits."
        },
        {
            icon: aiBotIcon6,
            heading: "Enhance forecasting capabilities.",
            content: "Brex AI can help analyze your budgets, spend limits, and utlization patterns to offer insights on spend optimization.",
        },
    ]

    return (
        <>
            <NavBar hideModal={true} />
            <div className="aiBot-hero">
                <div>
                    <Grid container spacing={5}>
                        <Grid item sm={6} xs={12}>
                            <div className="spMsg-hero-contentBox">
                                <div className="aiBot-heading-box">
                                    <div className="spMsg-hero-heading ">iVeeW
                                        <br />
                                        Chatbot</div>
                                    <img src={aiBotImg2} alt="aiImg" />
                                </div>
                                <div className="ai-bot-hero-content">
                                    Meet iVeew Bot... Your personal travel
                                    assistant in booking tour and activities
                                </div>
                                <div className="spMsg-hero-btns">
                                    <Btn label='Chat with iVeew bot' style={{ width: 'auto' }} />
                                    <Btn label="Get Started" className='geoFence-hero-btn' style={{ padding: '0px 45px' }} />
                                </div>
                            </div>
                        </Grid>
                        <Grid sm={6} xs={12} item>
                            <div className="aiBot-hero-ImgBox marginT-desktop">
                                <img src={aiBotImg3} alt="img" />
                            </div>
                        </Grid>

                    </Grid>
                </div>
            </div>
            {/* section 2  */}
            <section className="padding" style={{ paddingTop: '2%' }}>
                <div className="global-heading1  mt-8per">Streamline processes for all expenditure <br className='desktop' /> types through automation
                </div>
                <div className="global-text1 home-sec2-content">Brex AI eliminates manual work by automating tasks across <br className="desktop" /> our spend platform.</div>
                <div className="marginT-mobile"></div>
                <Grid container spacing={5}>
                    <Grid item sm={4} xs={12}>
                        <div className="aiBot-sec2-card-box">
                            <img src={aiBotIcon1} alt='icon' />
                            <div className="aiBot-sec2-card-heading">Cultivate trust and transparency. </div>
                            <p>iVeeW is transparent in how AI works to automate workflows, guide reviews, and
                                provide insights.</p>
                        </div>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <div className="aiBot-sec2-card-box">
                            <img src={aiBotIcon2} alt='icon' />
                            <div className="aiBot-sec2-card-heading">Maintain control.
                            </div>
                            <p>iVeeW Bot acts as an extension of your own decision making, providing the
                                automations and suggestions you want.</p>
                        </div>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <div className="aiBot-sec2-card-box">
                            <img src={aiBotIcon3} alt='icon' />
                            <div className="aiBot-sec2-card-heading">Guarantee total privacy.
                            </div>
                            <p>Your data is protected by strict security protocols and is never used to improve
                                third-party AI models.</p>
                        </div>
                    </Grid>
                </Grid>
            </section>
            {/* section 3  */}
            <section className="aiBot-sec3 padding" style={{ paddingBottom: '0px' }}>
                <div className="global-heading1" style={{ color: 'white' }}>Optimize spending <br className='desktop' /> management using AI solutions
                </div>
                <Grid container spacing={5}>
                    <Grid item sm={6} xs={12}>
                        <div className="aiBot-paddingT-desktop">
                            <div className="aiBot-sec3-heading">Provide each employee with their personalized assistant. </div>
                            <p className='aiBot-sec3-content'>Executives have long enjoyed having someone else do their expenses, and Brex AI extends that luxury to every employee with Brex Assistant.</p>
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <img src={aiBotImg4} alt="img" width='100%' />
                    </Grid>
                </Grid>
            </section>
            {/* section 4  */}
            <section className="padding">
                <div className="global-heading1">See iVeew Bot in action.</div>
                <div className="aiBot-sec4-imgBox">
                    <img src={aiBotImg5} alt="img" width='100%' />
                </div>
            </section>
            {/* section 5  */}
            <div className="padding aiBot-sec5">
                {/* 1st  */}
                <div className='mb-8per'>
                    <Grid container spacing={5}>
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding">
                                <img src={aiBotImg6} alt="img" />
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding">
                                <div className="message360-heading1 mb-40" style={{ color: 'white' }}>Delegate expense-related tasks to AI.</div>
                                <div className="spMsg-text1 mb-40" style={{ color: '#BCBDBD' }}>
                                    Delegate tasks like “Assign all DoorDash charges to my WFH stipend” or “Add a memo that says 'September ad campaign' to all my Google Ads expenses in September", and Brex Assistant will follow your command.
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                {/* 2nd  */}
                <div>
                    <Grid container spacing={5}>
                        {isMobile && <Grid item sm={5} xs={12}>
                            <div className="message360Padding ">
                                <img src={aiBotImg7} alt="img" />
                            </div>
                        </Grid>}
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding ">
                                <div className="message360-heading1 mb-40 mt-8per" style={{ color: 'white' }}>Access instant 24/7 responses.</div>
                                <div className="spMsg-text1 mb-40" style={{ color: '#BCBDBD' }}>
                                    Free your finance team from expense policy and reporting questions. With Brex, you can give every employee their own virtual assistant to get answers in real time and automate tedious expense tasks.
                                </div>
                            </div>
                        </Grid>
                        {!isMobile && <Grid item sm={5} xs={12}>
                            <div className="message360Padding ">
                                <img src={aiBotImg7} alt="img" />
                            </div>
                        </Grid>}
                    </Grid>
                </div>
            </div>
            {/* section 6  */}
            <section className="padding">
                {/* 1st  */}
                <div className='mb-8per'>
                    <Grid container spacing={5}>
                        <Grid item sm={6} xs={12}>
                            <div className='message360Padding'>
                                <img src={aiBotImg8} alt="img" width='100%' />
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding mt-40">
                                <div className="aiBot-heading mb-40" >Automate expense <br className="desktop" /> report management.
                                </div>
                                <div className="spMsg-text1 mb-40">
                                    Brex auto-generates receipts from L3 payment data and uses LLMs and real-time integrations to to auto-populate memos, attendees, and expense category.
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="aiBot-heading1  mt-8per">Speed up decision making with AI- <br className='desktop' /> powered analytics.
                </div>
                <div className="global-text1 home-sec2-content">Operate faster with Brex AI running analyses and surfacing suggestions  <br className="desktop" /> for you.</div>
                <div className="marginT-mobile"></div>
                {/* 2nd  */}
                <div className='mb-8per'>
                    <Grid container spacing={5}>
                        <Grid item sm={6} xs={12}>
                            <div className='message360Padding'>
                                <img src={aiBotImg9} alt="img" width='100%' />
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <div className="mt-60">
                                {data1 && data1.length > 0 &&
                                    data1.map((item) => (
                                        <div key={item?.heading} className='aiBot-sec6-card' >
                                            <img src={item?.icon} alt="icon" />
                                            <div>
                                                <div className="aiBot-sec6-card-heading">{item?.heading}</div>
                                                <div className="aiBot-sec6-card-content">{item?.content}</div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </section>
            <Footer />
        </>
    )
}
