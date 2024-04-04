import React, { useState } from 'react'
import './InputIcon.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Icon } from '@mui/material';

export default function InputIcon({ icon, placeholder, isPassword, onChange, value, inputType, label }) {

    let [type, setType] = useState('text')

    const handleType = () => {
        type === 'text' ? setType('password') : setType('text')
    }

    useState(() => {
        if (isPassword) {
            setType('password')
        }
    }, [])

    return (
        <>
            <div className="input1-label">{label}</div>
            <div className='inputBox1' >
                <div className='leftBox1' >
                    <input className='input1' onChange={onChange} value={value} placeholder={placeholder} type={inputType ?? type} />
                </div>
                {icon && <div className='rightBox1'>
                    <img src={icon} alt="icon" />
                </div>}

            </div>
        </>

    )
}
