import * as React from 'react'
import {createUseStyles} from 'react-jss'
import { Photo } from './Photo'
import { DataContainer } from './DataContainer'
import { InfoContainer } from './InfoContainer'


const useStyles = createUseStyles({
  main:{
    display:'flex',
    justifyContent:'center',
    alignItems:'stretch',
    padding:'0.5vw 0',
  },
  mainL:{
    width:'35%',
    margin:'0.5vw 0',
    display:'flex',
    justifyContent:'center',
    alignItems:'flex-start',
    flexWrap:'wrap',
  },
  mainR:{
    width:'60%',
    margin:'0.5vw 0',
    display:'flex',
    justifyContent:'center',
    alignItems:'flex-start',
    flexWrap:'wrap',
  },
  '@media (orientation: portrait)': {
    main:{
      flexDirection:'column',
      alignItems:'center',
    },
    mainL:{
      width:'98%'
    },
    mainR:{
      width:'98%'
    }
  }
})

export const Main = ({ data: {photo, containers, informations} })=>{

  const classes = useStyles()

  return (
    <main className={classes.main}>
      
      <div className={classes.mainL}>
        <Photo data={photo} />
        {
          containers.map( (container, index) =>
            <DataContainer data={container} key={container.name + index} />
          )
        }
      </div>

      <div className={classes.mainR}>
        {
          informations.map( (info, index)=>
            <InfoContainer data={info} key={info.name + index} />
          )
        }
      </div>

    </main>
  )
}