import * as React from 'react'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
  line:{
    width:'100%',
    padding:'0 1vw',
    display:'flex',
  },
  imgContainer:{
    width:'6vw',
    margin:'0.2vw',
    padding:'0.2vw 0',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    border:'1px solid #999',
    borderRadius:'0.5vw',
    '&:hover':{
      boxShadow:'inset 0 0 0.5vw 0.2vw #999',
    },
    '&:hover img':{
      backgroundColor:'#f60'
    }
  },
  img:{
    width:'2.5vw',
    padding:'0.5vw',
    borderRadius:'50%',
    backgroundColor:'#333'
  }
})

export const InfoImg = ({tag})=>{

  const classes = useStyles()

  return (
    <div className={classes.line}>
      {
        tag.value.map( (image, key)=>{
          return (
            <div className={classes.imgContainer} key={tag.key + key}>
              <img className={classes.img} src={`https://oldapi.bzdrive.com/img/CV/ico/${image}.png`} alt="img"/>
              <span>{image}</span>
            </div>
          )
        })
      }
    </div>
  )
}