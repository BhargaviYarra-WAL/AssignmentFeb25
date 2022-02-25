import logo from './logo.svg';
import './App.css';
import CardList from './CardList'
import { useState } from 'react'
import Form from './Form'
import Boredapi from './Boredapi';


const App = () => {
  const [cards, setCards] = useState([])
  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }
  return (
    <div className="App">
      <Boredapi></Boredapi>
      <div className='Git'>
      <h1>Github</h1>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
      </div>
    </div>
  )
}

export default App;
