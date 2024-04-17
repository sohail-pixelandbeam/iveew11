import React from 'react'
import Btn from '../../components/btn/Btn'
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from 'react-router-dom';
import { CheckBox } from '@mui/icons-material';
import { Checkbox, FormControlLabel } from '@mui/material';


export default function PricingCard({ heading, btnLabel, features, note, price, explanation, onClick }) {
    return (
        <div className={onClick ? 'pricingCard-home' : 'pricingCard-home1'} onClick={onClick}>
            <div className="pricingCard-heading" style={{ whiteSpace: 'pre-line' }} >{heading}</div>
            <div className="pricingCard-heading">{explanation}</div>
            <div className="pricingCard-price">{price}</div>
            <Btn style={{ width: '100%', padding: '12px 12px', maxWidth: '100%', margin: '25px auto' }} label={btnLabel} />
            <div className="pricingCard-note">{note}</div>
            <div className="priceCard-features">
                {features && features.length > 0 &&
                    features.map(item => (
                        <div key={item} style={{height:30}}>
                             <FormControlLabel control={<Checkbox 
                            sx={{ color: '#F56B3F', '&.Mui-checked': { color: '#F56B3F' } }}
                              />} label={item} />
                            {/* <Checkbox
                            onChange={() => alert('hello')}
                            />
                            {item} */}
                              </div>
                    ))
                }
            </div>
        </div>
    )
}
