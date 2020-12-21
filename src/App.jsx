import * as React from 'react'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import { Footer } from './components/footer/Footer'

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
