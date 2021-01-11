import * as React from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'

import { InfoParagraph } from './InfoParagraph'
import { InfoImg } from './InfoImg'
import { InfoA } from './InfoA'


const useStyles = createUseStyles({
  data:{
    margin:'0.5vw 0',
    padding:'0.5vw 0',
    display:'flex',
    justifyContent:'center',
    flexWrap:'wrap',
    border:'1px solid #999',
    borderRadius:'0.5vw',
    boxShadow:'0 0 0.5vw 0.2vw #999',
    '&:hover':{
      boxShadow:'0 0 0.2vw 0.1vw #999',
    }
  },
  name:{
    color:'#f60',
    width:'90%',
    margin:'0.5vw 0',
    padding:'0 0.5vw',
    fontWeight:'bold',
    borderBottom:'2px dashed #f60',
  },
  key:{
    width:'20%',
  }
})

export const InfoContainer = ({ data: {name, tags} })=>{

  const classes = useStyles()

  return (
    <div className={classes.data}>
      <div className={classes.name}>{name}</div>
      {
        tags.map( (tag, index)=>{
          switch(tag.key){
            case "p":
              return <InfoParagraph tag={tag} key={tag.key + index} />

            case "img":
              return <InfoImg tag={tag} key={tag.key + index} />

            case "a":
              return <InfoA tag={tag} key={tag.key + index} />

            default:
              return ( <></> )
          }
        })
      }
    </div>
  )
}