import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import affImg1 from '../../assets/imgs/affImg1.jpeg'
import affImg2 from '../../assets/imgs/affImg2.jpeg'
import affImg3 from '../../assets/imgs/affImg3.jpeg'
import affImg4 from '../../assets/imgs/affImg4.png'
import affImg5 from '../../assets/imgs/affImg5.png'
import affImg6 from '../../assets/imgs/affImg6.png'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

export default function Partners() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (<>
        <NavBar />
        <div className='home-sec2-box padding'>
            <div className="global-heading1 mb-8per" >Partners</div>
            <div className='home-sec2-imgs' >
                <Grid container spacing={5}>
                    <Grid item sm={4} xs={12}>
                        <div className='home-sec-2-img-box' >
                            <img className='home-sec-2-img' src={affImg1} alt="companies" />
                        </div>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <div className='home-sec-2-img-box' >
                            <img className='home-sec-2-img' src={affImg2} alt="companies" />
                        </div>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <div className='home-sec-2-img-box' >
                            <img className='home-sec-2-img' src={affImg3} alt="companies" />
                        </div>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <div className='home-sec-2-img-box' >
                            <img className='home-sec-2-img' src={affImg4} alt="companies" />
                        </div>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <div className='home-sec-2-img-box' >
                            <img className='home-sec-2-img' src={affImg5} alt="companies" />
                        </div>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <div className='home-sec-2-img-box' >
                            <img className='home-sec-2-img' src={affImg6} alt="companies" />
                        </div>
                    </Grid>
                </Grid>
                <div className='global-heading2' >
                    More on the Way
                </div>
            </div>
        </div>
        <Footer />
    </>
    )
}
