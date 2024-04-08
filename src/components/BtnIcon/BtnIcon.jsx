import React from 'react'
import './BtnIcon.css'

export default function BtnIcon({label, onClick, icon,style}) {
  return (
    <div onClick={onClick} className='btnIcon-box' style={style}>
      {icon && <img src={icon} alt="img" />}
      <button>{label}</button>
      {icon && <div/>}
    </div>
  )
}
