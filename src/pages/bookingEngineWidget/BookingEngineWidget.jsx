import React, { useEffect, useState } from 'react';
import './BookingEngineWidget.css';
import bookingEngWidgetImg2 from '../../assets/imgs/bookingEngWidgetImg2.jpeg';
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
                                Application can be integrated to any Internet Booking Engine.
                            </div>
                            <ul>
                                <li>Engage with guest before arriving based usage of mobile  confirmation
                                </li>

                            </ul>


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
            </section>
            <Footer />
        </>
    )
}
