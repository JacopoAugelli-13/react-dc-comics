import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/index'
import Main from './components/Main'
import logoDc from './img/dc-logo.png'
import dcFigure from './img/buy-comics-digital-comics.png'
import tShirt from './img/buy-comics-merchandise.png'
import levUp from './img/buy-comics-subscriptions.png'
import position from './img/buy-comics-shop-locator.png'
import cards from './img/buy-dc-power-visa.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>
        <img src={logoDc} alt="logo" />
      </Header>
      
      <Main
        figure={dcFigure}
        shirt={tShirt}
        levelUp={levUp}
        pos={position}
        cd={cards}>
      </Main>
    </>

  )
}

export default App
