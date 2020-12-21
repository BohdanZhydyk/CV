import * as React from 'react'
import {createUseStyles} from 'react-jss'


const useStyles = createUseStyles({
  footer:{
    textIndent:'3vw',
    padding:'1vw 3vw',
    textAlign:'justify',
    borderTop:'2px solid #999',
    borderBottom:'2px solid #999',
    boxShadow:'0 0 0.5vw 0.2vw #999',
    '&:hover':{
      boxShadow:'0 0 0.2vw 0.1vw #999',
    }
  }
})

export const Footer = ({data})=>{

  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <p>{data.rodo1}</p>
      <p>{data.rodo2}</p>
      
    </footer>
  )
}