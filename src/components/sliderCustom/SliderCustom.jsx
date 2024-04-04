import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img21 from '../../assets/imgs/img21.png';
import img22 from '../../assets/imgs/img22.png';
import img23 from '../../assets/imgs/img23.png';
import img24 from '../../assets/imgs/img24.png';
import prev from '../../assets/imgs/prev.png';
import next from '../../assets/imgs/next.png';

export default function SliderCustom() {
    let [currentSlide, setCurrentSlide] = useState(0);
    const sliderData = [
        {
            img: img21,
            heading: 'Messaging: \n The modern way to do T&E',
            content: 'It took a joint technology partnership and an overhaul of the entire process to create Brex travel, but business travel is finally good again.'
        },
        {
            img: img22,
            heading: 'Merchandising: \n expense management',
            content: 'See how an AI expense assistant can make compliance effortless for employees and drive unprecedented efficiency across your org.'
        },
        {
            img: img23,
            heading: 'QR Management: \n automated and integrated',
            content: 'How modern companies approach procurement as part of a unified spend management system.',

        },
        {
            img: img24,
            heading: '5 ways AI can accelerate \n expense management',
            content: 'See how an AI expense assistant can make compliance effortless for employees and drive unprecedented efficiency across your org.'
        }
    ]
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
    <div className="global-heading1" style={{padding:'0px 5%'}}>Insights on AI- powered iveew chatbot.</div>
    <div className='home-slider padding' style={{ paddingBottom: '10px' }} >
        <Slider
            ref={slider => {
                sliderRef = slider;
            }}
            {...settings}>
            {sliderData.map(item => (
                <div className="sliderItem" key={item.heading}>
                    <img src={item.img} alt="img" />
                    <div className="sliderItem-heading" style={{ whiteSpace: 'pre-line' }} >{item.heading}</div>
                    <div className="sliderItem-content">{item.content}</div>
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
