import * as React from 'react'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
  data:{
    width:'95%',
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
  line:{
    width:'100%',
    display:'flex',
    alignItems:'center',
    flexWrap:'wrap',
  },
  img:{
    width:'1.5vw',
    minWidth:'20px',
    margin:'0.2vw 1vw',
    padding:'0.5vw',
    borderRadius:'50%',
    backgroundColor:'#333'
  },
  key:{
    width:'20%',
  },
  value:{
    color:'#f00',
  }
})

export const DataContainer = ({ data: {name, lines} })=>{

  const classes = useStyles()

  return (
    <div className={classes.data}>
      <div className={classes.name}>{name}</div>
      {
        lines.map( (line, index)=>{
          return (
            <div className={classes.line} key={line.key + index}>
              <img className={classes.img} src={`https://oldapi.bzdrive.com/img/CV/ico/${line.key}.png`} alt="img"/>
              <span className={classes.key}>{line.key}</span>
              {
                line.link
                ?
                <a className={classes.value} href={line.link} target="_blank" rel="noreferrer">{line.value}</a>
                :
                <span className={classes.value}>{line.value}</span>
              }
            </div>
          )
        })
      }
    </div>
  )
}