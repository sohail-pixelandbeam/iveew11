import React, { useEffect, useState } from 'react';
import './GeoFencing.css';
import NavBar from '../../components/navbar/Navbar';
import geoImg1 from '../../assets/imgs/geoImg1.png';
import geoFenceImg2 from '../../assets/imgs/geoFenceImg2.png';
import geoFenceImg3 from '../../assets/imgs/geoFenceImg3.png';
import geoFenceImg4 from '../../assets/imgs/geoFenceImg4.png';
import geoFenceImg5 from '../../assets/imgs/geoFenceImg5.png';
import geoFenceImg6 from '../../assets/imgs/geoFenceImg6.png';
import geoFenceIcon1 from '../../assets/imgs/geoFenceIcon1.png';
import geoFenceIcon2 from '../../assets/imgs/geoFenceIcon2.png';
import geoFenceIcon3 from '../../assets/imgs/geoFenceIcon3.png';
import geoFenceIcon4 from '../../assets/imgs/geoFenceIcon4.png';
import geoFenceIcon5 from '../../assets/imgs/geoFenceIcon5.png';
import geoFenceIcon6 from '../../assets/imgs/geoFenceIcon6.png';
import geoFenceIcon7 from '../../assets/imgs/geoFenceIcon7.png';
import EastIcon from '@mui/icons-material/East';
import Btn from '../../components/btn/Btn';
import InputField from '../../components/inputField/InputField'
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
            <NavBar hideModal={hideModal} />
            {/* section 1  */}
            <section className='geoFence-hero'>
                <div className="geoFence-hero-contentBox">
                    <div className="geoFence-hero-heading">Geo fencing <br className='desktop' /> revolutionizes travel</div>
                    <div className="geoFence-hero-content">In essence, geofencing is a versatile tool that  enables businesses to engage with consumers in  real time based on their physical location, offering  personalized experiences and targeted marketing  messages.</div>
                    <div className="geoFence-hero-btns">
                        <Btn label='Get Started' />
                        <Btn label="Open an account" className='geoFence-hero-btn' style={{ padding: '0px 45px' }} />
                    </div>
                </div>
            </section>
            {/* section 2  */}
            <section className="geoFence-sec2 padding">
                <Grid container spacing={5}>
                    <Grid item sm={5.5} xs={12} >
                        <img src={geoImg1} alt="geoImg" width='95%' />
                    </Grid>
                    <Grid item sm={6.5} xs={12}>
                        <div className='geoFence-sec2-content'>
                            <p>Geofencing for hotel properties surrounding businesses involves using location-based technology to create virtual boundaries around a physical location, such as a hotel, to trigger personalized interactions with guests. This technology allows hotels to offer tailored services and promotions based on a guest's location within the geofenced area. Some key strategies for utilizing geofencing in the hospitality industry include:
                                <br /><br />
                                <span>Guest Recognition:</span> Guests can be identified when they cross the virtual fence, with information appearing on a tablet or computer
                                <br /><br />
                                <span>Reward Loyalty Program Members:</span> Hotels can send targeted offers or notifications to loyalty program members based on their location within the property
                                <br /><br />
                                <span>Promote Onsite Services:</span> Messages with links alert guests to specials within the property.
                                <br /><br />
                                <span>Measure Guest Behavior:</span> Geofencing along with tagging on property services can auto-alert guests with an offer if in the fenced area long enough.
                                <br /><br />
                                <span>Complementary Businesses:</span> Improve Guest Experience by allowing local businesses that match the guest behavior personalization.
                                <br /><br />

                                If you would like to know more complete the information by scrolling down.
                            </p>
                        </div>

                    </Grid>
                </Grid>
            </section>
            {/* section 3  */}
            <section className='padding'>
                <Grid container spacing={5}>
                    {isMobile &&
                        <Grid item sm={6} xs={12}>
                            <img src={geoFenceImg2} alt="img" width='100%' />
                        </Grid>
                    }
                    <Grid item sm={6} xs={12}>
                        <div className="geoFence-sec3-leftBox">
                            <img src={geoFenceIcon1} alt='icon' />
                            <div className="geoFence-heading1" style={{ margin: '15px 0px' }}>Tell us about yourself</div>
                            <div className="geoFence-text1" style={{ marginBottom: '20px' }}>Fill out this form and a geo fencing sales engineer will <br /> contact you:</div>
                            <InputField placeholder='Name' />
                            <InputField placeholder='Email (Company Only)' />
                            <div className="geoFence-sec3-inpBtn">
                                <InputField placeholder='Business' />
                                <Btn label='Send' style={{ backgroundColor: 'black', height: isMobile ? 'auto' : '57px' }} />
                            </div>
                        </div>
                    </Grid>
                    {!isMobile && <Grid item sm={6} xs={12}>
                        <img src={geoFenceImg2} alt="img" width='100%' className='desktop-img' />
                    </Grid>}

                </Grid>
            </section>
            {/* section 4  */}
            <section className="padding marginT-mobile">
                <Grid container spacing={5}>
                    <Grid item sm={6} xs={12}>
                        <div className="geoFence-sec4-leftBox">
                            <img src={geoFenceImg3} alt="img" width='95%' />
                            <div className="geoFence-heading2 marginT-mobile" style={{ marginBottom: '20px' }}>Email us at: <span>goals@iveew.co</span></div>
                            <div className="geoFence-heading2">Or text us at: <span> (800) 321-3400</span></div>
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <div className="geoFence-sec4-rightBox">
                            <img src={geoFenceIcon2} alt='icon' className='geoFence-icon' />
                            <div className="geoFence-heading1" style={{ margin: '15px 0px' }}>Determine your Goals</div>
                            <p >Tell us how we can help you</p>
                            <br />
                            <ul className='geoFence-list'>
                                <li>
                                    Next to a Great Hotel and is there any way we can be seen by their guests?
                                </li>
                                <li>
                                    How do we get more local traffic?
                                </li>
                                <li>What is Location-Based Services? </li>
                                <li>How can I send offers to women(men) only </li>
                                <li>Is there a way to reach my customers when they are near a competitor? </li>
                            </ul>

                        </div>
                    </Grid>
                </Grid>
            </section>
            {/* section 5  */}
            <section className="padding marginT-mobile">
                <Grid container spacing={5}>
                    {isMobile && <Grid item sm={4.5} xs={12}>
                        <div className="geoFence-sec5-leftBox">
                            <img src={geoFenceImg4} alt="img" width='95%' />
                        </div>
                    </Grid>}
                    <Grid item sm={6} xs={12}>
                        <div className="geoFence-sec5-rightBox">
                            <img src={geoFenceIcon3} alt='icon' className='geoFence-icon' />
                            <div className="geoFence-heading1" style={{ margin: '25px 0px' }}>Effective mobile marketing strategies</div>
                            <ul>
                                <li>Personalization- Personalization Engine</li>

                                <li>Exclusive Offers-Segmentation</li>

                                <li>Hyperlocal Targeting-Geofencing</li>

                                <li>Consider Time and Place-Messaging</li>

                                <li>QR Codes- Advertising</li>
                            </ul>

                        </div>
                    </Grid>
                    {!isMobile && <Grid item sm={4.5} xs={12}>
                        <div className="geoFence-sec5-leftBox">
                            <img src={geoFenceImg4} alt="img" width='95%' />
                        </div>
                    </Grid>}
                </Grid>
            </section>
            {/* section 6  */}
            <section className="padding marginT-mobile">
                <Grid container spacing={5}>
                    <Grid item sm={4.5} xs={12}>
                        <div className="geoFence-sec6-rightBox">
                            <img src={geoFenceImg4} alt="img" width='95%' />
                        </div>
                    </Grid>
                    <Grid xs={1} item />
                    <Grid item sm={5} xs={12}>
                        <div className="geoFence-sec6-leftBox">
                            <img src={geoFenceIcon4} alt='icon' className='geoFence-icon' />
                            <div className="geoFence-heading1" style={{ margin: '25px 0px' }}>Mobile-Reach Your Audience</div>
                            <p>
                                Lorem, geofencing is a versatile tool that  enables businesses to engage with consumers in  real time based on their physical location, offering  personalized experiences and targeted marketing  messages.
                            </p>
                            <div className="home-card-btnTxt" style={{ marginTop: '20px' }}>Learn more about us <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>

                        </div>
                    </Grid>
                </Grid>
            </section>
            {/* section 7  */}
            <section className="padding ">
                <Grid container spacing={5}>
                    {isMobile && <Grid item sm={6} xs={12}>
                        <div className="geoFence-sec7-leftBox">
                            <img src={geoFenceImg5} alt="img" width='90%' />
                        </div>
                    </Grid>}
                    <Grid item sm={5} xs={12}>
                        <div className="geoFence-sec7-rightBox">
                            <img src={geoFenceIcon5} alt='icon' className='geoFence-icon' />
                            <div className="geoFence-heading1" style={{ margin: '25px 0px' }}>Select your Creatives</div>
                            <p>
                                Lorem, geofencing is a versatile tool that  enables businesses to engage with consumers in  real time based on their physical location, offering  personalized experiences and targeted marketing  messages.
                            </p>
                            <div className="home-card-btnTxt" style={{ marginTop: '20px' }}>Learn more about us <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>

                        </div>
                    </Grid>
                    {!isMobile && <Grid item sm={1} />}
                    {!isMobile && <Grid item sm={6} xs={12}>
                        <div className="geoFence-sec7-leftBox">
                            <img src={geoFenceImg5} alt="img" width='90%' />
                        </div>
                    </Grid>}
                </Grid>
            </section>
            {/* section 8  */}
            <section className="padding marginT-mobile">
                <div className="global-heading1">Geo-Conquesting</div>
                <div className="geoFence-sec8-text">Is a cutting-edge marketing strategy that  involves targeting visitors <br className='desktop' /> to competitor  locations through geofencing</div>
                <div style={{visibility:'hidden'}}>
                <div className="geoFence-heading1 marginT-mobile" style={{ textAlign: 'center' }}>Follow the steps in Geo-Fencing</div>
                <div style={{ padding: '0% 10%', paddingTop: '8%' }}>
                    <Grid container spacing={5}>
                        <Grid item sm={6} xs={12}>
                            <div className="geoFence-sec8-dataBox">
                                <img src={geoFenceIcon6} alt='icon' width='66px' />
                                <div className="geoFence-heading1">Ask us</div>
                                <p>At the bottom of the form, ask about  geo-conquesting and we will send  you the information</p>
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <div className="geoFence-sec8-dataBox">
                                <img src={geoFenceIcon7} alt='icon' width='66px' />
                                <div className="geoFence-heading1">Choose</div>
                                <p>Under Creatives- choose a voucher  or game, make it enticing. Use it for  now or next time.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className='geoFence-sec8-btn'>
                                <div className="home-card-btnTxt" style={{ marginTop: '20px' }}>Contact us <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
