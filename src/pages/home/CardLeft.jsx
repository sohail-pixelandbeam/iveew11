import { Grid } from '@mui/material'
import React from 'react'
import EastIcon from '@mui/icons-material/East';
import { useNavigate } from 'react-router-dom';


export const CardLeft = ({ img, heading, content, to, imgMarginTop }) => {
    const navigate = useNavigate()
    const handleNavigation = () => {
        navigate(to)
    }
    return (
        <div className='card-marginT'>
            <div className="cardLeft-desktop" >
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12}>
                        <div style={{marginTop:imgMarginTop}}>
                        <img src={img} alt="img" width='95%' />
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <div className="home-card-data">
                            <div className="home-card-heading">{heading}</div>
                            <div className="home-card-content">{content}</div>
                            <div className="home-card-btnTxt" onClick={handleNavigation} >Explore {heading} <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
                        </div>
                    </Grid>
                </Grid >
            </div>
            <div className="cardLeft-mobile">
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12}>
                        <div className="home-card-data">
                            <div className="home-card-heading">{heading}</div>
                            <div className="home-card-content">{content}</div>
                            <div className="home-card-btnTxt">Explore More <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <img src={img} alt="img" width='95%' />
                    </Grid>
                </Grid >
            </div>
        </div>
    )
}
