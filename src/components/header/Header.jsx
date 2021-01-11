import * as React from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'


const useStyles = createUseStyles({
  header:{
    padding:'1vw 0',
    fontSize:'200%',
    fontWeight:'bold',
    borderTop:'2px solid #999',
    borderBottom:'2px solid #999',
    boxShadow:'0 0 0.5vw 0.2vw #999',
    '&:hover':{
      boxShadow:'0 0 0.2vw 0.1vw #999',
    }
  }
})

export const Header = ({data})=>{

  const classes = useStyles()

  return (
    <header className={ classNames({ [classes.header]:true, 'flex':true })}>
      {data.author}
    </header>
  )
}