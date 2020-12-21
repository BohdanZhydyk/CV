import * as React from 'react'
import {createUseStyles} from 'react-jss'


const useStyles = createUseStyles({
  footer:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column',
    padding:'1vw 0',
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
      <span>{data.rodo1}</span>
      <span>{data.rodo2} <a href={data.link} target="_blank" rel="noreferrer">{data.rodo3}</a></span>
      
    </footer>
  )
}