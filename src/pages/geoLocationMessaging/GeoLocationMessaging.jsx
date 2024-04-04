import React, { useEffect } from 'react'
import './GeoLocationMessaging.css'
import fileIcon from '../../assets/imgs/fileIcon.png'
import uploadIcon from '../../assets/imgs/uploadIcon.png'
import mapImg from '../../assets/imgs/mapImg.png'
import { Grid } from '@mui/material'
import Btn from '../../components/btn/Btn'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import useIsMobile from '../../hooks/useIsMobile'
import InputIcon from '../../components/inputIcon/InputIcon'
import Switch from '../../components/switch/Switch'




export default function GeoLocationMessagin() {
    let isMobile = useIsMobile();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <NavBar hideModal={true} />
            <div className="geoLocMsg-hero">
                <div>
                    <Grid container spacing={5}>
                        <Grid item sm={6} xs={12}>
                            <div className="spMsg-hero-contentBox">
                                <div className="spMsg-hero-heading ">Geo location
                                    <br className='desktop' /> messaging </div>
                                <div className="spMsg-hero-btns">
                                    <Btn label='Get Started' />
                                    <Btn label="Open an account" className='geoFence-hero-btn' style={{ padding: '0px 45px' }} />
                                </div>
                            </div>
                        </Grid>

                    </Grid>
                </div>
            </div>
            {/* section 2  */}
            <section className="padding" style={{ paddingTop: '2%' }}>
                <div className="global-heading1 mb-8per mt-8per">Geo-fenced message
                </div>
                {/* 1st textarea  */}
                <Grid container spacing={2}>
                    <Grid item sm={2.5} xs={12}>
                        <label htmlFor='geoLocMsg-Intro' className="geoLocMsg-form-heading">Intro:</label>
                        <div className="geoLocMsg-form-subHeading">Characters left: <br className="desktop" /> 0</div>
                    </Grid>
                    <Grid item sm={7.5} xs={12}>
                        <textarea name="geoLocMsg-Intro" id="geoLocMsg-Intro" className='geoLocMsg-textarea' rows="6" placeholder='Initial Message'></textarea>
                    </Grid>
                    {!isMobile && <Grid item xs={2}></Grid>}
                </Grid>
                <div className="geoLocMsg-marginT"></div>
                {/* 2nd textArea  */}
                <Grid container spacing={2}>
                    <Grid item sm={2.5} xs={12}>
                        <label htmlFor='geoLocMsg-Message' className="geoLocMsg-form-heading ">Message:</label>
                        <div className="geoLocMsg-form-subHeading">Characters left: <br className="desktop" /> 149</div>
                    </Grid>
                    <Grid item sm={7.5} xs={12}>
                        <textarea name="geoLocMsg-Message" id="geoLocMsg-Message" className='geoLocMsg-textarea' rows="6" placeholder='Initial Message'></textarea>
                    </Grid>
                    {!isMobile && <Grid item xs={2}></Grid>}
                </Grid>
                <div className="geoLocMsg-marginT"></div>
                {/* Other Inputs */}
                <Grid container spacing={2}>
                    <Grid item sm={2.5} xs={12}>
                        <label htmlFor='geoLocMsg-Message' className="geoLocMsg-form-heading">Guest Connect URL:</label>
                    </Grid>
                    <Grid item sm={8.5} xs={12}>
                        <div className="">
                            <InputIcon
                                label='Full'
                                icon={fileIcon}
                            />
                            <InputIcon
                                label='Short'
                                icon={fileIcon}
                            />
                            <InputIcon
                                label='QR Code'
                                icon={uploadIcon}
                            />
                            < div style={{ height: '20px' }} />
                            {/* Inner inputs  */}
                            <Grid container spacing={2}>
                                <Grid item sm={3} xs={12}>
                                    <div className="geoLocMsg-label1">Business Name:</div>
                                </Grid>
                                <Grid item sm={9} xs={12}>
                                    <InputIcon />
                                </Grid>
                            </Grid>
                            < div style={{ height: '20px' }} />
                            <Grid container spacing={2}>
                                <Grid item sm={3} xs={12}>
                                    <div className="geoLocMsg-label1">Business Address:</div>
                                </Grid>
                                <Grid item sm={9} xs={12}>
                                    <InputIcon />
                                </Grid>
                            </Grid>
                            < div style={{ height: '20px' }} />
                            <Grid container spacing={2}>
                                <Grid item sm={1} xs={12}>
                                </Grid>
                                <Grid item sm={11} xs={12}>
                                    <Grid container spacing={5}>
                                        <Grid item sm={4} xs={12}>
                                            <div className="geoLocMsg-innerInputBox">
                                                <div className="geoLocMsg-label1">City:</div>
                                                <InputIcon
                                                    style={{ marginBottom: '0px' }}
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item sm={4} xs={12}>
                                            <div className="geoLocMsg-innerInputBox">
                                                <div className="geoLocMsg-label1">Street:</div>
                                                <InputIcon />
                                            </div>
                                        </Grid>
                                        <Grid item sm={4} xs={12}>
                                            <div className="geoLocMsg-innerInputBox">
                                                <div className="geoLocMsg-label1">Zip:</div>
                                                <InputIcon
                                                />
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            < div style={{ height: '20px' }} />
                            <Grid container spacing={2}>
                                <Grid item sm={1} xs={12}>
                                </Grid>
                                <Grid item sm={11} xs={12}>
                                    <Grid container spacing={5}>
                                        <Grid item sm={6} xs={12}>
                                            <div className="geoLocMsg-innerInputBox">
                                                <div className="geoLocMsg-radio">
                                                    <input type="radio" />
                                                    <font>Geo Fence</font>
                                                </div>

                                            </div>
                                        </Grid>
                                        <Grid item sm={6} xs={12}>
                                            <div className="geoLocMsg-innerInputBox">
                                                <div className="geoLocMsg-label1">Longitude:</div>
                                                <InputIcon />
                                            </div>
                                            <div className="geoLocMsg-innerInputBox">
                                                <div className="geoLocMsg-label1">Latitude:</div>
                                                <InputIcon />
                                            </div>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>

                        </div>
                    </Grid>
                    {!isMobile && <Grid item xs={1}></Grid>}
                </Grid>
                <div className="geoLocMsg-marginT"></div>
                {/* 2nd textArea  */}
                <Grid container spacing={2}>
                    <Grid item sm={3} xs={12}>
                        <label htmlFor='geoLocMsg-Message' className="geoLocMsg-form-heading ">Selection Feature:</label>
                    </Grid>
                    <Grid item sm={8} xs={12}>
                        <Switch
                            label='Group Option:'
                            defaultValue={true}
                        />
                        <Switch
                            label='Check In - Check Out Date Option:'
                        />
                        <Switch
                            label='Allow Reply:'
                        />
                    </Grid>
                </Grid>
                <div className="mt-8per">
                    <img src={mapImg} alt="img" width='100%' />
                </div>
                <div className='mt-40' style={{ display: 'flex', justifyContent: 'center' }}>
                    <Btn label='Submit' />
                </div>
            </section>
            <Footer />
        </>
    )
}
