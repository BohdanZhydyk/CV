import * as React from 'react'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
  value:{
    width:'80%',
    color:'#f00',
    fontSize:'1.5vw',
    margin:'0.5vw 0',
    '&:hover':{
      color:'#f60',
    }
  }
})

export const InfoA = ({tag})=>{

  const classes = useStyles()

  return (
    <a className={classes.value} href={tag.value} target="_blank" rel="noreferrer">{tag.value}</a>
  )
}