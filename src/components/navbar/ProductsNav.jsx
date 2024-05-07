import React, { useState } from 'react'
import './Naved.css'
import icon1 from '../../assets/imgs/icon1.png'
import icon2 from '../../assets/imgs/icon2.png'
import icon3 from '../../assets/imgs/icon3.png'
import icon4 from '../../assets/imgs/icon4.png'
import icon5 from '../../assets/imgs/icon5.png'
import icon6 from '../../assets/imgs/icon6.png'
import icon7 from '../../assets/imgs/icon7.png'
import icon8 from '../../assets/imgs/icon8.png'
import icon9 from '../../assets/imgs/icon9.png'
import icon10 from '../../assets/imgs/icon10.png'
import icon11 from '../../assets/imgs/icon11.png'
import icon12 from '../../assets/imgs/icon12.png'
import icon13 from '../../assets/imgs/icon13.png'
import icon14 from '../../assets/imgs/icon14.png'
import icon15 from '../../assets/imgs/icon15.png'
import icon16 from '../../assets/imgs/icon16.png'
import icon17 from '../../assets/imgs/icon17.png'
import icon18 from '../../assets/imgs/icon18.png'
import icon19 from '../../assets/imgs/icon19.png'
import icon20 from '../../assets/imgs/icon20.png'
import active1 from '../../assets/imgs/active1.png'
import active2 from '../../assets/imgs/active2.png'
import active3 from '../../assets/imgs/active3.png'
import active4 from '../../assets/imgs/active4.png'
import active5 from '../../assets/imgs/active5.png'
import active6 from '../../assets/imgs/active6.png'
import active7 from '../../assets/imgs/active7.png'
import active8 from '../../assets/imgs/active8.png'
import active9 from '../../assets/imgs/active9.png'
import active10 from '../../assets/imgs/active10.png'
import active11 from '../../assets/imgs/active11.png'
import active12 from '../../assets/imgs/active12.png'
import active13 from '../../assets/imgs/active13.png'
import active14 from '../../assets/imgs/active14.png'
import active15 from '../../assets/imgs/active15.png'
import active16 from '../../assets/imgs/active16.png'
import active17 from '../../assets/imgs/active17.png'
import active18 from '../../assets/imgs/active18.png'
import active19 from '../../assets/imgs/active19.png'
import active20 from '../../assets/imgs/active20.png'
import hoverNavBottom from '../../assets/imgs/hoverNavBottom.png'
import hoverNavBottom1 from '../../assets/imgs/hoverNavBottom1.png'
import { Grid, Modal } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import useIsMobile from '../../hooks/useIsMobile'

export default function ProductsNav({ showNote, setActiveLink }) {
    let [show, setShow] = useState(true)
    let [hovered, setHovered] = useState('');
    let [hovered1, setHovered1] = useState('');
    let isMobile = useIsMobile();
    const navigate = useNavigate();


    const data1 = [
        {
            icon: icon2,
            active: active2,
            label: '1-1 Message',
            to: '/'
        },
        {
            icon: icon3,
            active: active3,
            label: 'Message Market Segmentaion',
            to: '/MessageMarketSegmentation'
        },
        {
            icon: icon4,
            active: active4,
            label: 'Blast-M',
            to: '/'
        },
        {
            icon: icon5,
            active: active5,
            label: 'Booking Engine-Script',
            to: '/BookingEngineScript'
        },

    ]
    const data2 = [
        {
            icon: icon6,
            active: active6,
            label: 'Guest Return (OTA Con)',
            to: '/'
        },
        {
            icon: icon7,
            active: active7,
            label: 'Guest Recognition',
            to: '/GuestRecognition'
        },
        {
            icon: icon8,
            active: active8,
            label: 'Special Occasions',
            to: '/'
        },

        {
            icon: icon9,
            active: active9,
            label: 'Voucher-Loyalty-Gift cards',
            to: '/'
        },
        {
            icon: icon19,
            active: active19,
            label: 'Mobile Market Strategies',
            to: '/MobileMarketStrategies'
        },
    ]

    const data3 = [
        {
            icon: icon11,
            active: active11,
            label: 'Geo-fencing',
            to: '/GeoFencing'
        },
        {
            icon: icon12,
            active: active12,
            label: 'Geo-Location Messaging ',
            to: '/GeoLocationMessaging'
        },
        {
            icon: icon13,
            active: active13,
            label: 'Chatbot AI',
            to: '/AIBot'
        },
        {
            icon: icon14,
            active: active14,
            label: 'Messaging',
            to: '/SpecialityMessaging',
        },

    ]
    const data4 = [

        {
            icon: icon15,
            active: active15,
            label: 'Confirmations & Vouchers',
            to: '/'
        },
        {
            icon: icon16,
            active: active16,
            label: 'Merchandising',
            to: '/'
        },
        {
            icon: icon17,
            active: active17,
            label: 'RFID - Marketing',
            to: '/'
        },
        {
            icon: icon18,
            active: active18,
            label: 'QR Platform',
            to: '/'
        },
        {
            icon: icon10,
            active: active10,
            label: 'Personalization',
            to: '/'
        },

    ]

    const data5 = [
        {
            icon: icon20,
            active: active20,
            label: 'Internet Booking Engine',
            to: '/BookingEngineWidget'
        },
        {
            icon: icon12,
            active: active12,
            label: 'Geo-Location Messaging ',
            to: '/GeoLocationMessaging'
        },
        {
            icon: icon14,
            active: active14,
            label: 'Messaging',
            to: '/SpecialityMessaging',
        },
        {
            icon: icon9,
            active: active9,
            label: 'Voucher-Loyalty-Gift cards',
            to: '/'
        },
        {
            icon: icon8,
            active: active8,
            label: 'Special Occasions',
            to: '/'
        },

    ]

    const applications1 = [
        {
            icon: icon18,
            active: active18,
            label: 'Partneres',
            to: '/',
            description: 'Integration with a quality of suppliers, providing over 20,000 hotel PMS and 100,000 tickets, tours and activities'
        },
        {
            icon: icon15,
            active: active15,
            label: 'Guest Recognition',
            to: '/GuestRecognition',
            description: 'Pretend Application allows businesses to send out messages based on Geolocation and beacons'
        },
        {
            icon: icon1,
            active: active1,
            label: 'Mobile Strategies',
            to: '/MobileMarketStrategies',
            description: 'Encourage guests returns based on offers, convert OTA bookings to direct'
        },
        {
            icon: icon6,
            active: active6,
            label: 'Guest Return - 360',
            to: '/GuestReturn360',
            description: 'OTA - Direct Conversions',
        }
    ]

    const applications2 = [
        {
            icon: icon7,
            active: active7,
            label: 'Personalization',
            to: '/Personalization',
            description: 'P Engine-AI aids the process of selects various offers. Purchase In Hotel and 3rd party offers prior to arrival'
        },
        {
            icon: icon3,
            active: active3,
            label: 'Market Segmentation',
            to: '/MessageMarketSegmentation',
            description: 'Personalization leads to knowing your guest, which serves up more segmented offers, which increase guest experiences'
        },
        {
            icon: icon12,
            active: active12,
            label: 'Geo Referencing',
            to: '/GeoReferencing',
            description: 'Geofencing, Geoconquestions, Geolocation are all factors in using GeoOffers'
        },
        {
            icon: icon10,
            active: active10,
            label:'Geo Fencing',
            to:'/GeoFencing',
            description:'Geofencing is a versatile tool that has not been utilized in travel as much as others',
        }
    ]


    const applications3 = [
        {
            icon: icon14,
            active: active14,
            label: 'Messaging',
            to: '/SpecialityMessaging',
            description: "1:1 \n Blast-M \n Special Occasions"
        },
        {
            icon: icon9,
            active: active9,
            label: 'Tickets Tours Activities',
            to: '/TickeitngTours',
            description: 'Relevant, Programmatic offers from around the world. Book in advance'
        },
        {
            icon: icon4,
            active: active4,
            label: 'IBE - Mobile Wallet Confirms',
            to: '/BookingEngineWidget',
            description: 'Confirmation stored in Mobile Wallet. 9% hotel usage and 99% airlines.'
        },
        
        {
            icon: icon12,
            active: active12,
            label: 'Geo Conquesting',
            to: '/GeoConquesting',
            description: 'Geofencing, Geoconquestings, Geolocation are all factors in using GeoOffers'
        },
    ]

    const handleNavigation = (to) => {
        navigate(to);
        setActiveLink('');
        setShow(false);
    }
    return (
        <>
            <Modal open={show}>
                <div className="outerModalDiv"
                    style={{
                        background: 'rgba(0,0,0,0.5)',
                        height: '100vh',
                        display: 'flex',
                        outline: 'none'
                    }}
                >
                    <div className='productsNav'
                        style={{
                            top: showNote ? '100px' : '65px',
                            maxHeight: showNote ? '82vh' : '88vh',
                        }} >
                        <div className='navedContent'  >
                            <div className="productsNav-inner">
                                <div className="naved-innerBox">
                                    <Grid container spacing={2}>
                                        <Grid item sm={10} xs={10}>
                                            <div className="naved-heading">Applications</div>
                                        </Grid>
                                        {/* {!isMobile && <Grid item sm={2} xs={10}>
                                            <div className="naved-heading">Platform</div>
                                        </Grid>} */}
                                        <Grid item sm={4} xs={12}>
                                            <div className="naved-items">
                                                {/* <div className="naved-item" key={"Message-360"}
                                                        onMouseEnter={() => setHovered("Message-360")}
                                                        onClick={() => handleNavigation('/Message360')}
                                                    >
                                                        <div className="naved-img-box">
                                                            {hovered === 'Message-360' ? <img src={active1} alt="img" /> :
                                                                <img src={icon1} alt="img" />}
                                                        </div>
                                                        <div className="naved-item-label">{'Message-360'}</div>
                                                    </div> */}
                                                {/* {
                                                      hovered === "Message-360" && 
                                                      <div style={{background:'lightgray', borderRadius:'12px'}}>
                                                        {data5.map(item => (
                                                        <div className="naved-item" key={item.label}
                                                            onMouseEnter={() => setHovered1(item.label)}
                                                            onClick={() => handleNavigation(item?.to)}
                                                        >
                                                            <div className="naved-img-box">
                                                                {hovered1 === item.label ? <img src={item.active} alt="img" /> :
                                                                    <img src={item.icon} alt="img" />}
                                                            </div>
                                                            <div className="naved-item-label">{item.label}</div>
    
                                                        </div>
                                                    ))}
                                                      </div>
                                                    } */}

                                                {applications1.map(item => (
                                                    <div className="naved-item" key={item.label}
                                                        onMouseEnter={() => setHovered(item.label)}
                                                        onClick={() => handleNavigation(item?.to)}
                                                    >
                                                        <div className="naved-img-box">
                                                            {hovered === item.label ? <img src={item.active} alt="img" /> :
                                                                <img src={item.icon} alt="img" />}
                                                        </div>
                                                        <div>
                                                            <div className="naved-item-label">{item?.label}</div>
                                                            <div className="naved-item-description">{item?.description}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </Grid>
                                        <Grid item sm={4} xs={12}>
                                            <div className="naved-items">
                                                {applications2.map(item => (
                                                    <div className="naved-item" key={item.label}
                                                        onMouseEnter={() => setHovered(item.label)}
                                                        onClick={() => handleNavigation(item?.to)}
                                                    >
                                                        <div className="naved-img-box">
                                                            {hovered === item.label ? <img src={item.active} alt="img" /> :
                                                                <img src={item.icon} alt="img" />}
                                                        </div>
                                                        <div>
                                                            <div className="naved-item-label">{item?.label}</div>
                                                            <div className="naved-item-description">{item?.description}</div>
                                                        </div>

                                                    </div>
                                                ))}
                                            </div>
                                        </Grid>
                                        <Grid item sm={4} xs={12}>
                                            <div className="naved-items">
                                                {applications3.map(item => (
                                                    <div className="naved-item" key={item.label}
                                                        onMouseEnter={() => setHovered(item.label)}
                                                        onClick={() => handleNavigation(item?.to)}
                                                    >
                                                        <div className="naved-img-box">
                                                            {hovered === item.label ? <img src={item.active} alt="img" /> :
                                                                <img src={item.icon} alt="img" />}
                                                        </div>
                                                        <div>
                                                            <div className="naved-item-label">{item?.label}</div>
                                                            <div className="naved-item-description">
                                                                {item?.description.split('\n').map((line, index) => (
                                                                    <React.Fragment key={index}>
                                                                        {line}
                                                                        <br />
                                                                    </React.Fragment>
                                                                ))}
                                                            </div>
                                                        </div>

                                                    </div>
                                                ))}
                                            </div>
                                        </Grid>
                                        {/* {isMobile && <Grid item xs={10}>
                                            <div className="naved-heading">Platform</div>
                                        </Grid>} */}

                                        {/* <Grid item sm={3} xs={12}>
                                            <div className="naved-items">
                                                {data4.map(item => (
                                                    <div className="naved-item" key={item.label} onMouseEnter={() => setHovered(item.label)}
                                                        onClick={() => handleNavigation(item?.to)}
                                                    >
                                                        <div className="naved-img-box">
                                                            {hovered === item.label ? <img src={item.active} alt="img" /> :
                                                                <img src={item.icon} alt="img" />}
                                                        </div>
                                                        <div className="naved-item-label">{item.label}</div>

                                                    </div>
                                                ))}
                                            </div>
                                        </Grid> */}

                                    </Grid>

                                </div>
                                {/* bottom bar  */}
                                <img src={isMobile ? hoverNavBottom1 : hoverNavBottom} alt="navBottom" className='productsNav-bottom-img' />
                            </div>
                        </div>
                    </div>
                    <div style={{ flex: 1, background: 'transparent' }} onMouseEnter={() => setActiveLink('')} />
                </div>
            </Modal>

        </>
    )
}