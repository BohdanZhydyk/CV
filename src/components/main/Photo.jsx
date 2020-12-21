import * as React from 'react'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
  photo:{
    width:'95%',
    margin:'0.5vw 0',
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
    border:'1px solid #999',
    borderRadius:'0.5vw',
    boxShadow:'0 0 0.5vw 0.2vw #999',
    '&:hover':{
      boxShadow:'0 0 0.2vw 0.1vw #999',
    }
  },
  text:{
    width:'100%',
    display:'flex',
    justifyContent:'center',
    fontSize:'150%',
    padding:'0.5vw 0'
  },
  img:{
    width:'25vw',
    minWidth:'200px',
    margin:'1vw 0',
    borderRadius:'0.5vw'
  }
})

export const Photo = ({ data: {img, text} })=>{

  const classes = useStyles()

  return (
    <div className={classes.photo}>
      <div className={classes.text}>{text}</div>
      <img className={classes.img} src={img} alt="ava" />
    </div>
  )
}