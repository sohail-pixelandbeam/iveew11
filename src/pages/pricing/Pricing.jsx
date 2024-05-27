import React, { useEffect, useState } from 'react'
import './Pricing.css'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import affImg1 from '../../assets/imgs/affImg1.jpeg'
import affImg2 from '../../assets/imgs/affImg2.jpeg'
import affImg3 from '../../assets/imgs/affImg3.jpeg'
import affImg4 from '../../assets/imgs/affImg4.png'
import affImg5 from '../../assets/imgs/affImg5.png'
import affImg6 from '../../assets/imgs/affImg6.png'
import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import PricingCard from '../home/PricingCard'
import pricingData from '../../assets/json/pricingData.json'
import InputIcon from '../../components/inputIcon/InputIcon'
import BtnIcon from '../../components/BtnIcon/BtnIcon'
import Btn from '../../components/btn/Btn'
import SportsScoreIcon from '@mui/icons-material/SportsScore';

export default function Pricing() {
    let [isPriceUnlocked, setIsPriceUnlocked] = useState(false);

    const features = ['Messaging', 'Market Segmentation', 'Personalization', 'Reputation Management', 'Booking/Purchase Confirmation', 'Customer Recognition', 'Blast M', 'Message-360', 'Loyalty Integration', 'Geofencing', 'Voucher & Gift Cards', 'Inspirations']

    const handlePriceUnlock = () => {
        setIsPriceUnlocked(true)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <NavBar />

            {/* section 1  */}
            <section className=' pricing-hero' >
                <div className="geoFence-hero-heading">Pricing that works for you</div>
            </section>
            {/* section 2  */}
            <section className="padding">
                {!isPriceUnlocked && <Grid container spacing={5}>
                    <Grid item sm={6} xs={12}>
                        <div className="signIn-main1 ">
                            <div className="signIn-main-subHeading">Enter your details to get a personalized pricing.</div>
                            <InputIcon
                                placeholder='Your name'
                            />
                            <InputIcon
                                placeholder='Business Email ID'
                            />
                            <InputIcon
                                placeholder='Rooms'
                            />
                            <InputIcon
                                placeholder='Phone Number'
                            />
                            <div className="mb-8per"></div>
                            <Btn label='Unlock Pricing'
                            onClick={handlePriceUnlock}
                            style={{ width: '100%', borderRadius: '11px', background: '#1F324E' }} />
                            <div className="signIn-main-subHeading text-center">By continuing, you’re agreeing to iVeew’s <b>privacy policy </b> and <b> Terms of Service.</b></div>
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <div className="prcing-features-box">
                            {features && features.length > 0 &&
                                features.map(item => (
                                    <div key={item} style={{ height: 30 }}>
                                        <FormControlLabel control={<Checkbox
                                            sx={{ color: '#F56B3F', '&.Mui-checked': { color: '#F56B3F' } }}
                                        />} label={item} />
                                    </div>
                                ))
                            }
                        </div>
                    </Grid>
                </Grid>}

                {isPriceUnlocked && <div className="signIn-main mt-8per ">
                    <InputIcon
                        label='Number of Rooms'
                    />
                    <InputIcon
                        label='Occupancy (%)' />
                    <InputIcon label='Avg Daily Rate (ADR)' />
                    <InputIcon label='OTA Commission (%) ' />
                    <InputIcon label='Direct Booking Conversion (%)' />
                    <Btn label='Submit' style={{ background: '#1F324E' }} />
                    <hr style={{ margin: '30px 0px' }} />
                    <InputIcon label='Total Savings (Per Year)' />
                    <div className="mb-8per"></div>
                </div>}
            </section>
            {/* <div className="pricing-blackDiv"/>
            <section className="padding pricing-sec1">
                <div className="global-heading1  mb-8per pricing-mobile-margintT" >Everything you need to   <br className='desktop' />spend smart</div>
                <div className='margin-home'>
                    <Grid container spacing={5}>
                        {
                            pricingData.map(item => (
                                <Grid item md={4} sm={6} xs={12}
                                    key={item.heading}>
                                    <PricingCard
                                        heading={item.heading}
                                        features={item.features}
                                        btnLabel={item.btnLabel}
                                        note={item?.specialNote}
                                        // price={item.price}
                                        explanation={item.explanation}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
            </section> */}
            <Footer />
        </>
    )
}
