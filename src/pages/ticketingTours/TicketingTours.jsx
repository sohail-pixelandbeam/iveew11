import React from 'react'
import NavBar from '../../components/navbar/Navbar'
import Btn from '../../components/btn/Btn'
import { Checkbox, FormControlLabel, Grid, Rating } from '@mui/material'
import ttaImg1 from '../../assets/imgs/ttaImg1.png';
import ttaImg2 from '../../assets/imgs/ttaImg2.png';
import ttaImg3 from '../../assets/imgs/ttaImg3.jpeg';
import ttaProduct1 from '../../assets/imgs/ttaProduct1.jpeg';
import ttaProduct2 from '../../assets/imgs/ttaProduct2.jpeg';
import ttaProduct3 from '../../assets/imgs/ttaProduct3.jpg';
import ttaProduct4 from '../../assets/imgs/ttaProduct4.jpg';
import ttaProduct5 from '../../assets/imgs/ttaProduct5.jpeg';
import ttaProduct6 from '../../assets/imgs/ttaProduct6.jpeg';
import { useEffect } from 'react'
import Footer from '../../components/footer/Footer'
import useIsMobile from '../../hooks/useIsMobile'
import './TicketingTours.css'
import SelectBox from '../../components/selectBox/SelectBox';
import { CheckBox } from '@mui/icons-material';

export default function TicketingTours() {
    let isMobile = useIsMobile();
    const products = [
        {
            imgSrc: ttaProduct1,
            heading: 'Bangkok by Night: Temples, Markets and Food by Tuk-Tuk',
            rating: 5,
            numberOfReviews: 375,
            amount: 70.42,
        },
        {
            imgSrc: ttaProduct2,
            heading: 'Maeklong Railway Market and Damnoesaduak Floating Market with Small Group',
            rating: 5,
            numberOfReviews: 42,
            amount: 31.21,
        },
        {
            imgSrc: ttaProduct3,
            heading: 'Private Excursion to Floating market and Ayutthaya World Heritage Site',
            rating: 5,
            numberOfReviews: 7,
            amount: 176.05,
        },
        {
            imgSrc: ttaProduct4,
            heading: 'Buddhist Landmarks and  a Royal Visit ',
            rating: 5,
            numberOfReviews: 15,
            amount: 68.34,
        },
        {
            imgSrc: ttaProduct5,
            heading: '6-Hour Best of Bangkok City Tour including  Lunch ',
            rating: 5,
            numberOfReviews: 143,
            amount: 92.07,
        },
        {
            imgSrc: ttaProduct6,
            heading: 'Bangkok Midnight Food Tour by Tuk Tuk ',
            rating: 5,
            numberOfReviews: 21,
            amount: 67.1,
        },

    ]
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [])
    return (
        <>
            <NavBar hideModal={true} />
            {/* section 1  */}
            <section className='message360-hero'>
                <div className="geoFence-hero-contentBox">
                    <div className="message360-hero-heading">Tickets Tours <br />& Activities</div>
                    <div className="message360-hero-content">With over 150,000, covering 1,600 airports in cities around the world.
                    </div>
                </div>
            </section>
            {/* section 2  */}
            <section className="padding">
                <div className="global-heading1 mb-8per" >Over a 100,000 tickets, tours & activities
                </div>
                <Grid container spacing={5}>
                    <Grid item sm={2.5} xs={12} >
                        <div className="tta-sec2-left">
                            <img src={ttaImg3} alt="img" width='100%' />
                            <div className="tta-sec2-left-heading">Destination</div>
                            <SelectBox
                                options={["Thailand", 'Bangkok', 'UK']}
                                selected={"Thailand"}
                            />
                            <SelectBox
                                options={["Thailand", 'Bangkok', 'UK']}
                                selected={"Bangkok"}
                            />
                            <div className="tta-sec2-left-heading" style={{ borderTop: 'none' }}>Categories</div>
                            <FormControlLabel control={<Checkbox />} label='Select All' />
                            <br />
                            <FormControlLabel control={<Checkbox />} label='Air' />

                        </div>
                    </Grid>
                    <Grid item sm={9.5} xs={12}>
                        <Grid container spacing={2}>
                            {products.map((product, index) => (
                                <Grid item sm={4} xs={12} key={index}>
                                    <div className="tta-sec2-product">
                                        <img src={product.imgSrc} alt="img" width='100%' />
                                        <div className="tta-sec2-product-heading">{product.heading}</div>
                                        <div className="tta-sec2-product-rating">
                                            <Rating
                                            value={product?.rating}
                                            readOnly
                                            />
                                            <span className='tta-sec2-product-rating-text'>{product?.numberOfReviews} Reviews</span>
                                        </div>
                                        <div className="tta-sec2-product-label" > from USD</div>
                                        <div className="tta-sec2-product-amount">${product?.amount}</div>

                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                <div className="global-heading1 mb-8per mt-8per">
                    Inspirations for hotel websites
                </div>

            </section>
            <Footer />

        </>

    )
}
