import React, { useEffect } from 'react'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <NavBar />
            <section className="padding">
                <div className="global-heading1 mb-40r ">About iVeew</div>
                <div className='message360Padding mt-40'>
                    iVeew operates 6 platforms and over 50+ applications running on Azure & Oracle Cloud.
                    Platforms include the following:

                    Personalization Engine connected to guest pre-arrival at their destination.  Automated functionality behind it connects at various times prior to arrival, upon arrival at the hotel or business.
                    <br /><br />
                    Merchandising that includes over 150,000 + tickets, tours and activities covering over 1600 destinations around the world.  In 20 languages and over 100 currencies.
                    <br /><br />
                    Messaging with built-in applications with easy to complete widgets that include geo-fencing of properties, market segmentation, hyper local offers,1:1 messaging, bulk messaging , guest direct and more.
                    <br /><br />
                    Apple & Android integrated mobile confirmations, coupons, vouchers, and gift cards stored in mobile wallets. Hotels, airlines, airports, restaurants, and retail business.
                    <br /><br />
                    Geofencing platform making it easy to create virtual fences for our clients.  Virtual fences around hotels, airports, stadiums, retail centers and more.  GeoConquesting of competitive businesses.

                </div>
            </section>
            <Footer />
        </>
    )
}
