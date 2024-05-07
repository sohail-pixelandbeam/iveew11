import React from 'react'
import NavBar from '../../components/navbar/Navbar'
import Btn from '../../components/btn/Btn'
import { Grid } from '@mui/material'
import message360img1 from '../../assets/imgs/message360img1.png'
import message360img2 from '../../assets/imgs/message360img2.png'
import message360img3 from '../../assets/imgs/message360img3.png'
import message360icon1 from '../../assets/imgs/message360icon1.png'
import message360icon2 from '../../assets/imgs/message360icon2.png'
import geoFenceImg6 from '../../assets/imgs/geoFenceImg6.png';
import { useEffect } from 'react'
import Footer from '../../components/footer/Footer'
import useIsMobile from '../../hooks/useIsMobile'

export default function TicketingTours() {
    let isMobile = useIsMobile();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <NavBar hideModal={true} />
            {/* section 1  */}
            <section className='message360-hero'>
                <div className="geoFence-hero-contentBox">
                    <div className="message360-hero-heading">Tickets Tours<br /> Activities</div>
                    <div className="message360-hero-content">With over 100,000, covering 1,600 airports in cities around the world.  

                    </div>

                </div>
            </section>
          <section className="padding"></section>
            <Footer />

        </>

    )
}
