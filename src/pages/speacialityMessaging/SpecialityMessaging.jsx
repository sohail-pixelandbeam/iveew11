import React, { useEffect } from 'react'
import './SpecialityMessaging.css'
import spMsgImg1 from '../../assets/imgs/spMsgImg1.png'
import spMsgImg2 from '../../assets/imgs/spMsgImg2.png'
import spMsgImg3 from '../../assets/imgs/spMsgImg3.png'
import spMsgImg4 from '../../assets/imgs/spMsgImg4.png'
import spMsgImg5 from '../../assets/imgs/spMsgImg5.png'
import { Grid } from '@mui/material'
import Btn from '../../components/btn/Btn'
import NavBar from '../../components/navbar/Navbar'
import EastIcon from '@mui/icons-material/East';
import Footer from '../../components/footer/Footer'
import SliderCustom from '../../components/sliderCustom/SliderCustom'
import useIsMobile from '../../hooks/useIsMobile'


export default function SpecialityMessaging() {
  let isMobile = useIsMobile();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <NavBar hideModal={true} />
      <div className="spMsg-hero">
        <div>
          <Grid container spacing={5}>
            <Grid item sm={6} xs={12}>
              <div className="spMsg-hero-contentBox">
                <div className="spMsg-hero-heading ">The speciality of  messaging</div>
                <div className="spMsg-hero-btns">
                  <Btn label='Get Started' />
                  <Btn label="Open an account" className='geoFence-hero-btn' style={{ padding: '0px 25px' }} />
                </div>
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <img src={spMsgImg1} alt="img" width='100%' />
            </Grid>
          </Grid>
        </div>
      </div>
      {/* section 2  */}
      <section className="padding" style={{ paddingTop: '2%' }}>
        {/* 1st  */}
        <div className="mb-8per mt-8per">
          <Grid container spacing={5}>
            <Grid item sm={5} xs={12}>
              <div className="message360Padding marginT-mobile">
                <img src={spMsgImg2} alt="img" />
              </div>
            </Grid>
            <Grid item sm={7} xs={12}>
              <div className="message360Padding">

                <div className="message360-heading1 mb-40">Speciality Messaging</div>
                <div className="spMsg-text1 mb-40">
                  The global mobile marketing market size to be valued at USD 337.8 billion by 2027 and is expected to grow at a compound annual growth rate (CAGR) of 22.9% during the forecast period. Mobile marketing is a multi-channel digital promotional activity to reach the target audience through their mobile devices, via email, SMS and MMS, social media, websites, and apps.
                </div>
                <div className="home-card-btnTxt mb-30">Learn more about us <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
              </div>
            </Grid>
          </Grid>
        </div>
        {/* 2nd  */}
        <div className="mb-8per">
          <Grid container spacing={5}>
            {isMobile && <Grid item sm={6} xs={12}>
              <div className="marginT-mobile">
                <img src={spMsgImg3} alt="img" width='100%' />
              </div>
            </Grid>}
            <Grid item sm={6} xs={12}>
              <div className="message360Padding">
                <div className="message360-heading1 mt-40 mb-40">Speciality Messaging</div>
                <div className="spMsg-text1 mb-40">
                  This is dummy text to show the design reputation takeholder perceptions and public conversations about an  organization and its brands. It includes monitoring perceptions and conversations, responding to reputation threats, and  proactively seizing opportunities to boost reputation
                </div>
                <div className="home-card-btnTxt mb-30">Learn more about us <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
              </div>
            </Grid>
            {!isMobile && <Grid item sm={6} xs={12}>
              <div className="">
                <img src={spMsgImg3} alt="img" width='100%' />
              </div>
            </Grid>}
          </Grid>
        </div>
        {/* 3rd  */}
        <div className="">
          <Grid container spacing={5}>
            <Grid item sm={6} xs={12}>
              <div className="spMsgImgSec2 marginT-mobile" >
                <img src={spMsgImg4} alt="img" width='100%' />
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className="message360Padding">
                <div className="message360-heading1 mb-40">Guest Back-60</div>
                <div className="spMsg-text1 mb-40">
                  Messaging provides businesses the opportunity to stay in contact with customers and guests. Delivering relevant content and offers is the most important.
                  <br /><br />
                  1) Guest Back provides all customers with the ability to send out messages based on the last time they visited the business or hotel.
                  <br /><br />
                  2) Integration with POS systems automates loyalty or frequency tracking of credit cards.
                  <br /><br />
                  3) As a hotel, we have integrated with a number of PMS to automate the process of reaching out to guests who have not been there in 60 days or more. If we are not currently in your PMS, please email us and we will set it up,
                </div>
                <div className="home-card-btnTxt mb-30">Learn more about us <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
              </div>
            </Grid>
          </Grid>
        </div>
        {/* 4th  */}
        <div className="mb-8per">
          <Grid container spacing={5}>
            {isMobile && <Grid item sm={6} xs={12}>
              <div className="message360Padding marginT-mobile">
                <img src={spMsgImg5} alt="img" width='90%' />
              </div>
            </Grid>}
            <Grid item sm={6} xs={12}>
              <div className="message360Padding">
                <div className="message360-heading1 spMsgcontentTopMargin mb-40">A recent survey</div>
                <div className="spMsg-text1 mb-40">
                  A recent survey indicated that 19x more revenue per message from campaigns that use both SMS+ Mobile Wallet coupons. Reward them for becoming a loyal member.
                  <br /> <br />
                  There is more of a” stop” message when  “checking in” with a customer instead of sending them an offer
                </div>
                <div className="home-card-btnTxt mb-30">Learn more about us <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
              </div>
            </Grid>
            {!isMobile && <Grid item sm={6} xs={12}>
              <div className="message360Padding">
                <img src={spMsgImg5} alt="img" width='90%' />
              </div>
            </Grid>}
          </Grid>
        </div>
      </section>
      <Footer />
    </>
  )
}
