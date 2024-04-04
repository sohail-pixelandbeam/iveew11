import React from 'react'
import EastIcon from '@mui/icons-material/East';

export default function Card1({ img, heading }) {
    return (
        <div>
            <img src={img} alt="img6" width='100%' />
            <div className='home-card1-heading'>{heading}</div>
        </div>
    )
}
