import React, { useEffect, useState } from 'react'
import './Pricing.css'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import affImg1 from '../../assets/imgs/affImg1.jpeg'
import affImg2 from '../../assets/imgs/affImg2.jpeg'
import affImg3 from '../../assets/imgs/affImg3.jpeg'
import affImg4 from '../../assets/imgs/affImg4.png'
import affImg5 from '../../assets/imgs/affImg5.png'
import affImg6 from '../../assets/imgs/affImg6.png'
import { Checkbox, Dialog, FormControlLabel, Grid } from '@mui/material';
import PricingCard from '../home/PricingCard'
import pricingData from '../../assets/json/pricingData.json'
import InputIcon from '../../components/inputIcon/InputIcon'
import BtnIcon from '../../components/BtnIcon/BtnIcon'
import Btn from '../../components/btn/Btn'
import Snack from '../../components/snack/Snack'
import Loader from '../../components/loader/Loader'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';


export default function Pricing() {
    const [dataObj, setDataObj] = useState({
        name: '',
        email: '',
        rooms: '',
        phoneNumber: '',
    })
    const [selectedValues, setSelectedValues] = useState([]);
    let [isEmailSent,setIsEmailSent] = useState(false)


    const features = ['Personalization', 'Geofencing', 'Messaging', 'Market Segmentation', 'Reputation Management', 'Booking/Purchase Confirmation', 'Customer Recognition', 'Message-360', 'Loyalty Integration', 'Voucher & Gift Cards', 'Inspirations']
    let [isLoading, setIsLoading] = useState(false);
    let [openSnack, setOpenSnack] = useState(false);
    let [severity, setSeverity] = useState('error')
    let [snackMsg, setSnackMsg] = useState('');

    const handleCloseSnack = () => {
        setOpenSnack(false);
        setSnackMsg('');
        setSeverity('error');
    }


    // Function to handle checkbox changes
    const handleCheckBox = (item) => {
        const isChecked = event.target.checked;

        if (isChecked) {
            // Add the item to selectedValues if checked
            setSelectedValues([...selectedValues, item]);
        } else {
            // Remove the item from selectedValues if unchecked
            setSelectedValues(selectedValues.filter(value => value !== item));
        }
    };


    const handleValue = (key, value) => {
        dataObj[key] = value;
        setDataObj({ ...dataObj });
    }

    const handlePriceUnlock = () => {
        sendEmail();
    }

    const sendEmail = async () => {
        setIsLoading(true);
        const features = selectedValues.toString();
        const { name, email, rooms, phoneNumber } = dataObj;
        if (name && rooms && email && phoneNumber && features) {
            try {
                // Prepare data for sending email
                const data = {
                    service_id: 'service_b9u9agh',
                    template_id: 'template_70jlrsa',
                    user_id: 'TY1c5CpNFvXKdnWcA',
                    
                    template_params: {
                        name,
                        email,
                        phoneNumber,
                        rooms,
                        features,
                        'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...' // Include reCAPTCHA token if needed
                    }
                };

                // Send email using EmailJS API
                const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    setIsEmailSent(true)
                    setSnackMsg("Email sent successfully");
                    setSeverity("success");
                    setOpenSnack(true);
                    setIsLoading(false);
                    setDataObj({
                        name: '',
                        email: '',
                        rooms: '',
                        phoneNumber: '',
                    })
                } else {
                    throw new Error('Failed to send email');
                }
            } catch (error) {
                console.error('Error sending email:', error);
                setSnackMsg(error.message || 'Error sending email');
                setSeverity("error");
                setOpenSnack(true);
                setIsLoading(false);
            }
        } else {
            setOpenSnack(true);
            setSnackMsg("Required fields are missing.");
            setIsLoading(false);
        }
    };



    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(()=>{
        setTimeout(()=>{
            setIsEmailSent(false);
        },[2000])
    },[isEmailSent])

    return (
        <>
            <NavBar />

            {/* section 1  */}
            <section className=' pricing-hero' >
                <div className="geoFence-hero-heading">Pricing that works for you</div>
            </section>
            {/* section 2  */}
            <section className="padding">
                <Grid container spacing={5}>
                    <Grid item sm={6} xs={12}>
                        <div className="signIn-main1 ">
                            <div className="signIn-main-subHeading">Enter details to receieve pricing for your hotel or business.</div>
                            <InputIcon
                                placeholder='Your name'
                                onChange={(e) => handleValue('name', e.target.value)}
                                value={dataObj?.name}
                            />
                            <InputIcon
                                placeholder='Business Email ID'
                                onChange={(e) => handleValue('email', e.target.value)}
                                value={dataObj?.email}
                            />
                            <InputIcon
                                placeholder='Rooms'
                                onChange={(e) => handleValue('rooms', e.target.value)}
                                value={dataObj?.rooms}
                            />
                            <InputIcon
                                placeholder='Phone Number'
                                onChange={(e) => handleValue('phoneNumber', e.target.value)}
                                value={dataObj?.phoneNumber}
                            />
                            <div className="mb-8per"></div>
                            <Btn label='Unlock Pricing'
                                onClick={handlePriceUnlock}
                                style={{ width: '100%', borderRadius: '11px', background: '#1F324E' }} />
                            <div className="signIn-main-subHeading text-center">By continuing, you’re agreeing to iVeew’s <b>privacy policy </b> and <b> Terms of Service.</b></div>
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <div className="prcing-features-box">
                            {features && features.length > 0 &&
                                features.map(item => (
                                    <div key={item} style={{ height: 30 }}>
                                        <FormControlLabel control={<Checkbox
                                            onChange={() => handleCheckBox(item)}
                                            sx={{ color: '#F56B3F', '&.Mui-checked': { color: '#F56B3F' } }}
                                        />} label={item} />
                                    </div>
                                ))
                            }
                        </div>
                    </Grid>
                </Grid>


            </section>
            <Footer />

            <Dialog open={isEmailSent} >
                <div style={{padding:'30px'}}>
                    <div className='text-center'>
                    <CheckCircleRoundedIcon sx={{fontSize:'80px', color:'green'}} />
                    </div>
                    <br />
                    <div>Email Sent Successfully</div>
                </div>
            </Dialog>

            <Snack msg={snackMsg} open={openSnack} onClose={handleCloseSnack} severity={severity} />
            <Loader isLoading={isLoading} />
        </>
    )
}
