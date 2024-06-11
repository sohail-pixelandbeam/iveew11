import React, { useEffect } from 'react'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

export default function Privacy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <NavBar />
            <section className="padding">
                <div className="global-heading1 mb-40r ">Privacy Policy</div>
                <div className='mt-40'>
                    Compliance with the following guidelines for the US, Canada & EU
                    <br /><br />

                    CTIA            <br />
                    FCC     <br />
                    TCPA        <br />
                    GDPR        <br />
                    PIPEDA      <br />
                    CCPA        <br />
                    UPCA

                    <br /> <br />
                    In addition, when running a large campaign we submit it for approval and review by the team.
                </div>
            </section>
            <Footer />
        </>
    )
}
