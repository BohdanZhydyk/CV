import * as React from 'react'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'

const App = ({ state: {headerData, mainData, footerData} })=>{
  return (
    <div className="App">
      
      <Header data={headerData} />

      <Main data={mainData} />

      <Footer data={footerData} />

    </div>
  )
}

export default App;
