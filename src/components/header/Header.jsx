import * as React from 'react'
import './Header.scss'


export const Header = ({data})=>{
  return (
    <header className="flex">
      {data.author}
    </header>
  )
}