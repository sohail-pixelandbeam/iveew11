import React, { useRef, useState } from 'react'
import './SliderCustom2.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import platformImg1 from '../../assets/imgs/geoImg1.png';
import platformImg2 from '../../assets/imgs/platformImg2.png';
import platformImg3 from '../../assets/imgs/platformImg3.png';
import platformImg4 from '../../assets/imgs/platformImg4.png';
import platformImg5 from '../../assets/imgs/platformImg5.png';
import prev from '../../assets/imgs/prev.png';
import next from '../../assets/imgs/next.png';


export default function SliderCustom2() {
    let [currentSlide, setCurrentSlide] = useState(0);
    const sliderData = [
        {
            img: platformImg1,
            heading: 'Geo Fencing',
            content: 'Is a versatile tool that enables businesses to engage with consumers in real time based on physical location.'
        },
        {
            img: platformImg2,
            heading: 'Personalization',
            content: 'AI-powered personalization is evolving rapidly. \n   Personalized CX Smart Predictive Models Automation'
        },
        {
            img: platformImg3,
            heading: 'Message 360',
            content: 'Messaging is a cost saver in Customer Acquisition Cost'
        },
        {
            img: platformImg4,
            heading: 'Blast-M',
            content: 'SMS- Customers sending out segmented offers based on individual preferences'
        },
        {
            img: platformImg5,
            heading: 'Chatbot-AI',
            content: 'Meet Funta-your personal assistant for finding fun things to do.  Can improve conversion rates. +30% in revenues'
        }
    ]
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    let sliderRef = useRef(null);

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
            sliderRef.slickPrev();
        }
    }

    const nextSlide = () => {
        if (currentSlide < (sliderData.length - 1)) {
            setCurrentSlide(currentSlide + 1);
            sliderRef.slickNext();
        }
    }
    return (
        <section className="home-sec8-box">

            <div className="global-heading1">All your solutions. One <br /> Platform</div>
            <div className="global-text1 home-sec2-content">Everything you need to control spend before it happens and empower teams confidently.</div>
            <div className='home-slider padding' style={{ paddingBottom: '10px' }} >
                <Slider
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}>
                    {sliderData.map(item => (
                        <div className="sliderItem1" key={item.heading}>
                            <div className="sliderItem1-heading" style={{ whiteSpace: 'pre-line' }} >{item.heading}</div>
                            <div className="sliderItem1-content">{item?.content}</div>
                            {item?.img && <img src={item?.img} alt="img" />}

                        </div>

                    ))}
                </Slider>
                {/* slider ruler  */}
                <div
                    className='customeSlder-ruler'
                >
                    <div className='slider-navigation'>
                        <img onClick={prevSlide} src={prev} alt="prev"
                            style={{
                                opacity: currentSlide === 0 ? 0.5 : 1,
                                cursor: currentSlide === 0 ? 'default' : 'pointer'
                            }}
                        />
                        <img onClick={nextSlide} src={next} alt="next"
                            style={{
                                opacity: currentSlide === (sliderData.length - 1) ? 0.5 : 1,
                                cursor: currentSlide === (sliderData.length - 1) ? 'default' : 'pointer'
                            }}
                        />
                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            top: '0px',
                            height: '5px',
                            background: 'gray',
                            zIndex: 2,
                            transition: '0.5s ease',
                            width: `${100 / sliderData.length}%`,
                            left: `${currentSlide * (100 / sliderData.length)}%`,
                            borderRadius: '5px'
                        }}
                    />
                </div>
            </div>


        </section>
    )
}
