import React, { useState } from 'react'
import './Naved.css'
import img6 from '../../assets/imgs/img6.png'
import img7 from '../../assets/imgs/img7.png'
import img8 from '../../assets/imgs/img8.png'
import hoverNavBottom from '../../assets/imgs/hoverNavBottom.png'

import { Grid, Modal } from '@mui/material'

export default function SolutionsNav({ showNote, setActiveLink }) {
    let [show, setShow] = useState(true)
    let [hovered, setHovered] = useState('');

    return (
        <>
            <Modal open={show} >
                <div className="outerModalDiv"
                    style={{
                        background: 'rgba(0,0,0,0.5)',
                        height: '100vh',
                        display: 'flex',
                        outline: 'none'
                    }}
                >
                  <div className='productsNav' 
                    style={{ 
                        top: showNote ? '100px' : '65px',
                        maxHeight: showNote ? '82vh':'88vh',
                    }} >
                        <div className='navedContent'  >
                            <div className="productsNav-inner">
                                <div className="naved-innerBox">
                                    <Grid container spacing={5}>
                                        <Grid item xs={9}>
                                            <div className="naved-heading">Solutions</div>
                                        </Grid>
                                        <Grid item xs={3} />
                                        <Grid item sm={3} xs={12}>
                                            <div className="naved-solution-card">
                                                <img src={img6} alt="img6" width='100%' />
                                                <div className="naved-solution-text">SMB - Starting with 1-10 locations</div>
                                            </div>
                                        </Grid>
                                        <Grid item sm={3} xs={12}>
                                            <div className="naved-solution-card">
                                                <img src={img7} alt="img6" width='100%' />
                                                <div className="naved-solution-text">SME -Multi -Loc - Starting  11 -30 <br /> locations</div>
                                            </div>
                                        </Grid>
                                        <Grid item sm={3} xs={12}>
                                            <div className="naved-solution-card">
                                                <img src={img8} alt="img6" width='100%' />
                                                <div className="naved-solution-text">Enterprise - 31 -+ Locations</div>
                                            </div>
                                        </Grid>
                                    </Grid>

                                </div>
                                {/* bottom bar  */}
                                {/* <div className="productsNav-bottom">Control all your spend before it happens, all in one place. <span> Get Started</span></div> */}
                                <img  src={hoverNavBottom} alt="navBottom" className='productsNav-bottom-img'/>
                            </div>
                        </div>
                    </div>
                    <div style={{ flex: 1, background: 'transparent' }} onMouseEnter={() => setActiveLink('')} />
                </div>
            </Modal>
        </>
    )
}