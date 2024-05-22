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
import { Grid } from '@mui/material';
import PricingCard from '../home/PricingCard'
import pricingData from '../../assets/json/pricingData.json'
export default function Pricing() {
  
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <NavBar />
            {/* <AutoScroll/> */}
            <div className="pricing-blackDiv"/>
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
            </section>
            <Footer />
        </>
    )
}
