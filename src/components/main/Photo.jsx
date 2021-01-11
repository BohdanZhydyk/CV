import * as React from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'


const useStyles = createUseStyles({
  photo:{
    width:'100%',
    margin:'0.5vw 0',
    border:'1px solid #999',
    borderRadius:'0.5vw',
    boxShadow:'0 0 0.5vw 0.2vw #999',
    '&:hover':{
      boxShadow:'0 0 0.2vw 0.1vw #999',
    }
  },
  text:{
    width:'100%',
    fontSize:'150%',
    padding:'0.5vw 0'
  },
  img:{
    width:'25vw',
    margin:'1vw 0',
    borderRadius:'0.5vw'
  },
  '@media print': {
    img:{
      width:'100px',
    }
  }
})

export const Photo = ({ data: {img, text} })=>{

  const classes = useStyles()

  return (
    <div className={ classNames({ [classes.photo]:true, 'flex':true, 'wrap':true }) }>
      <div className={ classNames({ [classes.text]:true, 'flex':true}) }>{text}</div>
      <img className={classes.img} src={img} alt="ava" />
    </div>
  )
}