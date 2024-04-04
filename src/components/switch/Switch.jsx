import React, { useState, useEffect } from 'react';
import './Switch.css';
import switchImg from '../../assets/imgs/switch.png'
import switchActiveImg from '../../assets/imgs/switchActive.png'

export default function Switch({ label, onChange, defaultValue = false }) {
    let [active, setActive] = useState(false);

    const handleChange = (val) => {
        setActive(val);
        if (onChange) {
            onChange(val);
        }
    }

    useEffect(() => {
        setActive(defaultValue)
    }, [])

    return (
        <div className='switchBox'>
            <div className="switchLabel">{label ?? 'Label'}</div>
            <img onClick={() => handleChange(!active)} src={active ? switchActiveImg : switchImg} className='switchIcon' />
        </div>
    )
}
