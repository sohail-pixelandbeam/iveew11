import React from 'react'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

export default function Privacy() {
    return (
        <>
            <NavBar />
            <section className="padding">
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
