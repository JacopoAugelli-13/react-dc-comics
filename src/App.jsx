import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
//header img
import logoDc from './assets/img/dc-logo.png'
import jumbo from './assets/img/jumbotron.jpg'
//main img
import dcFigure from './assets/img/buy-comics-digital-comics.png'
import tShirt from './assets/img/buy-comics-merchandise.png'
import levUp from './assets/img/buy-comics-subscriptions.png'
import position from './assets/img/buy-comics-shop-locator.png'
import cards from './assets/img/buy-dc-power-visa.svg'
//footer img
import bgFooter from './assets/img/footer-bg.jpg'
import bgDC from './assets/img/dc-logo-bg.png'
import faBo from './assets/img/footer-facebook.png'
import tW from './assets/img/footer-twitter.png'
import yT from './assets/img/footer-youtube.png'
import pT from './assets/img/footer-pinterest.png'
import pP from './assets/img/footer-periscope.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header
        jumbo={jumbo}
        logoDC={logoDc}>
        </Header>

      <Main
        
        figure={dcFigure}
        shirt={tShirt}
        levelUp={levUp}
        pos={position}
        cd={cards}>
      </Main>

      <Footer
        backG={bgFooter}
        backDC={bgDC}
        faceB={faBo}
        TT={tW}
        YT={yT}
        pint={pT}
        perip={pP}>
      </Footer>

    </>

  )
}

export default App
