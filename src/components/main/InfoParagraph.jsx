import * as React from 'react'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
  paragraph:{
    width:'100%',
    padding:'0 1vw',
    textIndent:'2vw',
    textAlign:'justify'
  }
})

export const InfoParagraph = ({tag})=>{

  const classes = useStyles()

  return (
    <p className={classes.paragraph} >{tag.value}</p>
  )
}