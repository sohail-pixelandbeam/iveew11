import React from 'react'
import NavBar from '../../components/navbar/Navbar'
import Btn from '../../components/btn/Btn'
import { Checkbox, FormControlLabel, Grid, Rating } from '@mui/material'
import locationImg from '../../assets/imgs/locationImg.jpg';
import ttaImg3 from '../../assets/imgs/ttaImg3.jpeg';
import ttaImg4 from '../../assets/imgs/ttaImg4.png';
import ttaImg5 from '../../assets/imgs/ttaImg5.png';
import ttaImg6 from '../../assets/imgs/ttaImg6.png';
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
import { FaPlane } from "react-icons/fa";


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

    const destinations = [
        {
            label: 'Thailand',
            offers: 256
        },
        {
            label: 'Philippines',
            offers: 240
        },
        {
            label: 'Mexico',
            offers: 198
        },
        {
            label: 'Indonesia',
            offers: 98
        },
        {
            label: 'Australia',
            offers: 120
        },
        {
            label: 'Dubai',
            offers: 60
        },
        {
            label: 'Carribbean',
            offers: 280
        },

    ]
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <NavBar hideModal={true} />
            {/* section 1  */}
            <section className='message360-hero'>
                <div className="geoFence-hero-contentBox">
                    <div className="message360-hero-heading">Tickets Tours <br />& Activities</div>
                    <div className="message360-hero-content">With over 150,000, covering 1,600 destinations in cities around the world.
                    </div>
                </div>
            </section>
            {/* section 2  */}
            <section className="padding">
                <div className="global-heading1 mb-8per" >Over a 150,000 tickets, tours & activities
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
            </section>
            {/* section 3  */}
            <section className="padding">
                <div className="global-heading1 mb-8per" style={{ marginTop: '-50px' }}>
                    Inspirations for hotel websites
                </div>
                <div className='mt-8per'>
                    <Grid container spacing={5}>
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding ">
                                <img src={ttaImg4} alt="img" />
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <div>
                                <div className="tta-sec3-upper-heading ">Underwater Adventure</div>
                                <div>
                                    Dive into the depths of excitement with our underwater adventure experiences! Explore vibrant coral reefs teeming with life, encounter majestic marine creatures, and uncover hidden treasures beneath the waves. Whether you're a seasoned diver or a first-time explorer, our thrilling expeditions promise unforgettable moments beneath the sea. Join us and embark on an aquatic journey like no other, where every dive is an opportunity for discovery and wonder.
                                </div>
                                <div className="tta-sec3-upper-heading">Highlights of tours and activities
                                </div>
                                <ul>
                                    <li>1,600 destinations</li>
                                    <li>Book online</li>
                                    <li>Confirmed immediately</li>
                                </ul>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                {/* <div className="tta-sec3-upper">
                    <img src={ttaImg4} alt="img" />
                    <div className="tta-sec3-upper-heading ">Underwater Adventure</div>
                    <div>
                        Dive into the depths of excitement with our underwater adventure experiences! Explore vibrant coral reefs teeming with life, encounter majestic marine creatures, and uncover hidden treasures beneath the waves. Whether you're a seasoned diver or a first-time explorer, our thrilling expeditions promise unforgettable moments beneath the sea. Join us and embark on an aquatic journey like no other, where every dive is an opportunity for discovery and wonder.
                    </div>
                    <div className="tta-sec3-upper-heading">Highlights of tours and activities
                    </div>
                    <ul>
                        <li>1,600 destinations</li>
                        <li>Book online</li>
                        <li>Confirmed immediately</li>
                    </ul>
                </div> */}
                <div className="tta-sec3-bottom">
                    <div className="tta-sec3-header-box">
                        <img src={locationImg} alt="img" />
                        <div>Destination Offers</div>
                    </div>
                    <Grid container spacing={1.5}>
                        {
                            destinations.map((destination, index) => (
                                <Grid item sm={6} xs={12} key={index}>
                                    <div className="tta-sec3-bottom-box">
                                        <div className="tta-sec3-bottom-box-heading">
                                            <FaPlane />
                                            {destination.label}</div>
                                        <div className="tta-sec3-bottom-box-offers">{destination.offers} offers</div>
                                    </div>
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
            </section>
            {/* section 4  */}
            <div className="padding">
                {/* 1st  */}
                <div>
                    <Grid container spacing={5}>
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding marginT-mobile">
                                <img src={ttaImg5} alt="img" />
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding">

                                <div className="message360-heading1 mb-40">Geo-Coded Offers</div>
                                <div className="spMsg-text1 mb-40">
                                    Fascinated by water-and its power to cut through the rock adn change the shape of landscapes adn coastlines? Then consider our Aquatic Wonder itinerary. Experience the crahed thunder of Niagara Falls and the diverse beaches of Sydney and Miami. Explore the stiking Norwegian fjords. Marvel at the man-made Panama Canal, offering a short-cut across the centre of the Americas and bringing new-found prosperity to the country it crosses.
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                {/* 2nd  */}
                <div className='mt-8per'>
                    <Grid container spacing={5}>
                        {isMobile && <Grid item sm={6} xs={12}>
                            <div className="message360Padding marginT-mobile">
                                <img src={ttaImg6} alt="img" />
                            </div>
                        </Grid>}
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding1">

                                <div className="message360-heading1 mb-40">Coral World</div>
                                <div className="spMsg-text1 mb-40">
                                    Coral World is located in the Island of St. Thomas United States Virgin Islands. The museum and park's structure consists of an over-water floor with gift shops, resturants, exhibitions, a touch pool and an underwater observatory where tourists can see non-captive fish going about their lives.
                                    <br /><br />
                                    Coral World was inauguated in the 1970s. It has been one of St. Thomas' most important tourist attractions since then. In the 1990s world boxing champions julian jackson the third boxer from the Virgin islands to become a world champion and a big celebrity in St. Thomas was  hired as a  worker, to attract more tourists to the site.
                                    <br /><br /><br />
                                    <font style={{ fontFamily: 'Poppins-SemiBold', fontSize: '20px' }}>Under Water Marine World Park</font>
                                    <br /><br />
                                    The only one of kind in the Caribbean our air conditioned Under-sea Observatory Tower stands 100 feet offshore. Descend 15 feet  beneath the sea to the Undersea Observatory and view the ever changing life on a natural coral reef. At mid-level visit the Deep Reef Tank adn from the top level enjoy spectacular views of the St. Thomas shoreline and neighboring islands.
                                </div>
                            </div>
                        </Grid>
                        {!isMobile && <Grid item sm={6} xs={12}>
                            <div className="message360Padding marginT-mobile">
                                <img src={ttaImg6} alt="img" />
                            </div>
                        </Grid>}
                    </Grid>
                </div>
            </div>
            <Footer />

        </>

    )
}
