import React, { useEffect, useState } from 'react';
import './BookingEngineWidget.css';
import bookingEngWidgetImg2 from '../../assets/imgs/bookingEngWidgetImg2.png';
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





export default function BookingEngineWidget() {
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
                    <div className="geoFence-hero-heading">Mobile Wallet
                        <br className='desktop' /> Confirmations</div>
                </div>
                
            </section>
            {/* section 2  */}
            <section className="padding ">
                <div className="global-heading1 mb-8per">Learn more about booking <br className="desktop" />
                    engine widget</div>
                <Grid container spacing={5}>
                    {isMobile && <Grid item sm={6} xs={12}>
                        <div className="geoFence-sec7-leftBox">
                            <img src={bookingEngWidgetImg2} alt="img" width='100%' />
                        </div>
                    </Grid>}
                    <Grid item sm={6} xs={12}>
                        <div className="geoFence-sec7-rightBox">
                            <div className="geoFence-heading1" style={{ margin: '25px 0px' }}>Booking Engine Widget</div>
                            <ul>
                                <li>Hotels are increasingly adopting mobile wallet technology to provide a more seamless and contactless experience for guests. Some key ways hotels are using mobile wallets include, connecting incentives to the use of the mobile confirmation.  Major hotels comprise the list of users, the smaller hotels and chains do not have an easy way to do it.</li>
                                <li>Integrating mobile wallet passes for things like gym access, breakfast coupons, or other hotel amenities, delivering them digitally to the guest's wallet</li>
                                <li>
                                    We add additional features to the mobile confirmation unlike other providers.</li>
                            </ul>
                            <div className="home-card-btnTxt" style={{ marginTop: '20px' }}>Learn more about us <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>

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
            <section className='padding'>
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
                                flex:1,
                                color:'black',
                                border:'1px solid black',
                                backgroundColor:'white'
                            }}
                            />
                            <Btn
                                label='Add'
                                style={{
                                    flex:3
                                }}
                            />
                        </div>
                    
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
