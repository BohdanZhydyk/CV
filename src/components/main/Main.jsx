import * as React from 'react'
import {createUseStyles} from 'react-jss'
import classNames from 'classnames'

import { Photo } from './Photo'
import { DataContainer } from './DataContainer'
import { InfoContainer } from './InfoContainer'


const useStyles = createUseStyles({
  main:{
    padding:'0.5vw 0',
    alignItems:'flex-start'
  },
  mainL:{
    width:'35%',
    padding:'0.5vw',
  },
  mainR:{
    width:'60%',
    padding:'0.5vw',
  },
  '@media (min-width: 481px) and (max-width: 767px)': {
    main:{
      flexDirection:'column',
      padding:'0.5vw 2vw'
    },
    mainL:{
      width:'100%',
      padding:'0.5vw',
    },
    mainR:{
      width:'100%',
      padding:'0.5vw',
    },
  }
})

export const Main = ({ data: {photo, containers, informations} })=>{

  const classes = useStyles()

  let mapContainers = containers.map( (container, index) =>
    <DataContainer data={container} key={container.name + index} />
  )

  let mapInformations = informations.map( (info, index)=>
    <InfoContainer data={info} key={info.name + index} />
  )

  return (
    <main className={ classNames({ [classes.main]:true, 'flex':true }) }>
      
      <div className={ classNames({ [classes.mainL]:true, 'flex':true, 'wrap':true }) }>
        <Photo data={photo} />
        { mapContainers }
      </div>

      <div className={ classNames({ [classes.mainR]:true, 'flex':true, 'wrap':true }) }>
        { mapInformations }
      </div>

    </main>
  )
}