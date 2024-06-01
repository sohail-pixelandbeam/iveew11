import React, { useEffect, useState } from 'react'
import './MobileMarketStrategies.css'
import { Grid } from '@mui/material'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import useIsMobile from '../../hooks/useIsMobile'
import bookingEngWidgetImg2 from '../../assets/imgs/bookingEngWidgetImg2.jpeg';
import spMsgImg5 from '../../assets/imgs/spMsgImg5.png'
import guestReturnImg1 from '../../assets/imgs/guestReturnImg.jpg';
import msgSegImg2 from '../../assets/imgs/msgSegImg2.png'
import msgSegImg3 from '../../assets/imgs/msgSegImg3.png'
import spMsgImg2 from '../../assets/imgs/spMsgImg2.png'
import spMsgImg3 from '../../assets/imgs/spMsgImg3.png'
import mobileMarketImg5 from '../../assets/imgs/mobileMarketImg5.png'
import Btn from '../../components/btn/Btn'
import { useNavigate } from 'react-router-dom'

export default function MobileMarketStrategies() {
    let [gender, setGender] = useState('')
    let isMobile = useIsMobile();
    const navigate = useNavigate();

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
            <section className="padding ">

                <Grid container spacing={5}>
                    {isMobile && <Grid item sm={6} xs={12}>
                        <div className="geoFence-sec7-leftBox">
                            <img src={bookingEngWidgetImg2} alt="img" width='100%' />
                        </div>
                    </Grid>}
                    <Grid item sm={6} xs={12}>
                        <div className="geoFence-sec7-rightBox">
                            <div className="geoFence-heading1" style={{ margin: '25px 0px' }}>Mobile Wallet Confirmation</div>
                            <div>
                                Guest complete their booking, then on the confirmation page sits a link that asks if they would rather store their confirmation in their mobile wallet. When the guest selects yes, then the information regarding the registration is sent over to our backend system. Process begins by breaking down who is traveling, are kids traveling, when they are traveling and how long will they be there.
                                <br /><br />
                                They receive a link to their mobile phone which they open and save to wallet.
                                The personalization process begins by sending them a link to the personalization profile, information will be taken from the confirmation and will ask for additional information such as hotel offers and then 3rd party offers.
                                <br /><br />
                                

                            </div>
                            {/* <ul>
                                <li>Application integration into almost any web or mobile based booking engine
                                </li>
                                <li>Engage with guest before arriving based usage of mobile confirmation</li>
                                <li>Automate guest engagement with a link to our Personalization Profile.</li>

                            </ul> */}

                            <div className='text-center'>
                                <img src={mobileMarketImg5} alt='img' width='40%' style={{ marginTop: '60px' }} />
                            </div>
                        </div>
                    </Grid>
                    {!isMobile && <Grid item sm={6} xs={12}>
                        <div className="geoFence-sec7-leftBox">
                            <img src={bookingEngWidgetImg2} alt="img" width='90%' />
                        </div>
                    </Grid>}
                </Grid>
            </section>
            {/* section 3  */}
            {/* <section className='padding'>
                <div className="bookEngWid-formBox">
                    <div className="bookEngWid-heading1">Create IBE</div>
                    <div className="bookEngWid-formContentBox">
                        <div className="bookEngWid-heading2">Hotel Info</div>
                        <InputIcon
                            label='Title'
                            placeholder='Booking Widget: chain 3'
                        />
                        <div className="bookEngWid-inputsBox">
                            <InputIcon
                                label='Title'
                                placeholder='5487455'
                            />
                            <InputIcon
                                label='Chain Code'
                                placeholder='5478512'
                            />
                        </div>
                        <InputIcon
                            label='Virtual Number'
                            placeholder='(970)331-9874'
                            isMobileNumber={true}
                        />
                        <InputIcon
                            label='Message'
                            placeholder='Hello, thankyou for booking.'
                            multipleLine={true}
                        />
                        <div className="bookEngWid-inputsBox">
                            <SelectBox
                                label='Languages/Pass'
                                options={languages}
                                selected='English'

                            />
                            <InputIcon
                                label='Pass ID'
                                placeholder='1235898441225'
                            />
                        </div>
                        <div className="bookEngWid-inputsBox">
                            <Btn
                                label='Cancel'
                                style={{
                                    flex: 1,
                                    color: 'black',
                                    border: '1px solid black',
                                    backgroundColor: 'white'
                                }}
                            />
                            <Btn
                                label='Add'
                                style={{
                                    flex: 3
                                }}
                            />
                        </div>

                    </div>
                </div>
            </section> */}

            {/* section 4  */}

            <section className="padding ">
                <Grid container spacing={5}>
                    <Grid item sm={6} xs={12}>
                        <div className="geoFence-sec7-leftBox">
                            <img src={guestReturnImg1} alt="img" width='100%' />
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <div className="geoFence-sec7-rightBox">
                            <div className="geoFence-heading1" style={{ margin: '25px 0px' }}>Guest Direct</div>
                            <div>Communicating with guests has never been easier.  Our Guest Direct  application uses AI insights to help hotels automate communication with guests who booked through a 3rd party site and have not visited for 60+ days.  You have full control of all communication and offers that are sent out.
                                <br />
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
                                <br />
                                Ask about our SaaS application to increase bookings and creates incentives for your returning guests to bring friends.
                            </div>
                           
                        </div>
                    </Grid>
                </Grid>
            </section>

            {/* extra  */}

            {/* section 2  */}
            <section className="padding" style={{ paddingTop: '2%' }}>
                {/* 0th  */}

                {/* <div className='mt-8per'>
                    <Grid container spacing={5}>
                        <Grid item sm={5} xs={12}>
                            <div className="message360Padding ">
                                <img src={msgMarketSegImg} alt="img" />
                            </div>
                        </Grid>
                        {!isMobile && <Grid xs={1} />}
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding">

                                <div className="message360-heading1 mb-40">Segments {'>'} Active Female Users    </div>
                                <div className="spMsg-text1 mb-40">
                                    <Grid container spacing={1}>
                                        <Grid item sm={9} xs={12}>
                                            <InputIcon
                                                placeholder='Sunglasses Special 25% Off'
                                            />
                                        </Grid>
                                        <Grid item sm={4} xs={12}>
                                            <SelectBox
                                                selected={'Gender'}
                                                options={['Gender', 'Male', 'Female']}
                                                onSelect={(e) => setGender(e)}
                                            />
                                        </Grid>
                                        <Grid item sm={4} xs={6}>
                                            <SelectBox
                                                selected={'Equals'}
                                                options={['Equals']}
                                            />
                                        </Grid>
                                        <Grid item sm={4} xs={6}>
                                            <div className="msg-market-seg-selected">{gender}</div>
                                        </Grid>
                                        <Grid item sm={9} xs={12}>
                                            <InputIcon
                                                placeholder='https://iveew.co/wsshiop30A'
                                            />
                                        </Grid>
                                        <Grid item sm={3.5} xs={12}>
                                            <SelectBox
                                                selected={'Active'}
                                                options={['Active']}
                                                onSelect={(e) => setGender(e)}
                                            />
                                        </Grid>
                                        <Grid item sm={3.5} xs={6}>
                                            <SelectBox
                                                selected={'Next'}
                                                options={['Next']}
                                            />
                                        </Grid>
                                        <Grid item sm={2} xs={6}>
                                            <div className="msg-market-seg-selected">{14}</div>
                                        </Grid>
                                        <Grid item sm={3} xs={6}>
                                            <SelectBox
                                                selected={'Days'}
                                                options={['Days']}
                                            />
                                        </Grid>
                                        <Grid item sm={4} xs={12}>
                                            <InputIcon
                                            label='Longitude'
                                                placeholder='30.3125'
                                            />
                                        </Grid>
                                        <Grid item sm={4} xs={12}>
                                            <InputIcon
                                            label='Latitude'
                                                placeholder='-86.0886'
                                            />
                                        </Grid>
                                        <Grid item sm={4} xs={0}/>
                                        <Grid item sm={4} xs={12}>
                                            <Btn label='Verify' 
                                            style={{ 
                                                Height:'50px',
                                                margin:'8px 0px'
                                            }}
                                             />
                                        </Grid>

                                    </Grid>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div> */}

                {/* 1st  */}
                <div className='mt-8per'>
                    <Grid container spacing={5}>
                        <Grid item sm={5} xs={12}>
                            <div className="message360Padding ">
                                <img src={msgSegImg2} alt="img" />

                            </div>
                        </Grid>
                        {!isMobile && <Grid xs={1} />}
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
                <div className='mt-8per'>
                    <Grid container spacing={5}>
                        {isMobile && <Grid item sm={5} xs={12}>
                            <div className="message360Padding marginT-mobile ">
                                <img src={msgSegImg3} alt="img" />
                            </div>
                        </Grid>}
                        <Grid item sm={7} xs={12}>
                            <div className="message360Padding">
                                <div className="message360-heading1 mb-40">Market segmentation</div>
                                <div className="spMsg-text1 mb-40">
                                    Market segmentation is a fundamental strategy in marketing that involves dividing a broad target market into smaller, more manageable segments based on shared characteristics or needs. By identifying and understanding the distinct needs, preferences, and behaviors of different consumer groups within a market, businesses .
                                </div>
                            </div>
                        </Grid>
                        {!isMobile && <Grid item sm={5} xs={12}>
                            <div className="message360Padding ">
                                <img src={msgSegImg3} alt="img" />

                            </div>
                        </Grid>}
                    </Grid>
                </div>

                {/* 5th  */}
                <div className="mb-8per mt-8per">
                    <Grid container spacing={5}>
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding marginT-mobile">
                                <img src={spMsgImg5} alt="img" width='90%' />
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding">
                                <div className="message360-heading1 spMsgcontentTopMargin mb-40">Reputation Management</div>
                                <div className="spMsg-text1 mb-40">
                                    A recent survey indicated that 19x more revenue per message from campaigns that use both SMS+ Mobile Wallet coupons. Reward them for becoming a loyal member.
                                    <br /> <br />
                                    There is more of a” stop” message when  “checking in” with a customer instead of sending them an offer
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>



                {/* 3rd  */}
                <div className="mb-8per mt-8per">
                    <Grid container spacing={5}>
                        {isMobile && <Grid item sm={5} xs={12}>
                            <div className="message360Padding marginT-mobile">
                                <img src={spMsgImg2} alt="img" />
                            </div>
                        </Grid>}
                        <Grid item sm={7} xs={12}>
                            <div className="message360Padding">

                                <div className="message360-heading1 mb-40">Specialty Messaging</div>
                                <div className="spMsg-text1 mb-40">
                                    The global mobile marketing market size to be valued at USD 337.8 billion by 2027 and is expected to grow at a compound annual growth rate (CAGR) of 22.9% during the forecast period. Mobile marketing is a multi-channel digital promotional activity to reach the target audience through their mobile devices, via email, SMS and MMS, social media, websites, and apps.
                                </div>
                            </div>
                        </Grid>
                        {!isMobile && <Grid item sm={5} xs={12}>
                            <div className="message360Padding marginT-mobile">
                                <img src={spMsgImg2} alt="img" />
                            </div>
                        </Grid>}
                        <Grid item sm={12} xs={12}>
                            <div className="message360Padding mt-40">
                                <img src={spMsgImg3} alt="img" />
                            </div>

                        </Grid>
                    </Grid>
                </div>
            </section>
            <Footer />
        </>
    )
}
