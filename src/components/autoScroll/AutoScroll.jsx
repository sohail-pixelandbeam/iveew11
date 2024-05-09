import React, { useState, useEffect } from 'react';
import StopCircleRoundedIcon from '@mui/icons-material/StopCircleRounded';
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';

const AutoScroll = ({ duration = 50000, distance = document.body.scrollHeight }) => {
    const [scrolling, setScrolling] = useState(true);

    useEffect(() => {
        let interval;
        let startTime = null;
        let startScrollTop = window.pageYOffset;

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const scrollY = easeInOutQuad(progress, startScrollTop, distance, duration);
            window.scrollTo(0, scrollY);
            if (progress < duration && scrolling) {
                interval = requestAnimationFrame(step);
            }
        };

        interval = requestAnimationFrame(step);

        return () => cancelAnimationFrame(interval);
    }, [scrolling, duration, distance]);

    const toggleScrolling = () => {
        setScrolling(!scrolling);
    };

    return (
        <>
            <div onClick={toggleScrolling}
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: '9999',
                backgroundColor:'white',
                width:25,
                height:25,
                borderRadius:'50%',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                cursor:'pointer',
              }}
            >
                {scrolling ? 
                <StopCircleRoundedIcon fontSize='large' sx={{ color: '#F56B3F' }} /> : 
                <PlayCircleFilledWhiteRoundedIcon fontSize='large' sx={{ color: '#F56B3F' }} />}
            </div>
        </>
    );
};

// Easing function for smooth scrolling
const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

export default AutoScroll;
