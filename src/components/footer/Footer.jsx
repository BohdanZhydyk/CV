import * as React from 'react'
import './Footer.scss'

export const Footer = ({data})=>{
  return (
    <footer>
      
      <p>{data.rodo1}</p>
      <p>{data.rodo2}</p>
      
    </footer>
  )
}