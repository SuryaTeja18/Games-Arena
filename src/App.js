import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import SearchBox from './Components/SearchBox'
import Game from './Components/Game'
import gameData from './gameData'

class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      allGames:gameData,
    }
  }

  render() {
  const games = this.state.allGames.map(game=> <Game key={game.name} title={game.name} platform={game.platform} genre={game.genre} score={game.score} editors_choice={game.editors_choice}/>)
    return (
      <div>
        <Header/>
        <SearchBox/>
        {games}
      </div>
    )
  }
}

export default App;