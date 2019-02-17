import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import SearchBox from './Components/SearchBox'
import Game from './Components/Game'
import Platforms from './Components/Platforms'

class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      allGames:[],
      viewAllGames:0,
      pageNumbers:[1,2,3,4,5,6,7,8,9,10],
      gamesPerPage:[],
      searchPlatform:"",
      samePlatform:[],
      searchGame:[],
    }
    this.viewAllGames=this.viewAllGames.bind(this)
    this.resetWebPage=this.resetWebPage.bind(this)
    this.handlePlatformChange=this.handlePlatformChange.bind(this)
    this.searchByName=this.searchByName.bind(this)
  }

  viewAllGames()
  {
      this.setState({
        viewAllGames:1,
      })
  }

  resetWebPage()
  {
    this.setState({
      viewAllGames:0,
      gamesPerPage:[],
      searchPlatform:"",
      samePlatform:[],
      searchGame:[]
    })
    document.getElementById("searchName").value=""
  }

  handlePageNumberClick=(e)=>{
    const games=[<h2>Page {e.target.id}</h2>]
    let end
    let start=(parseInt(e.target.id)-1)*10
    if(e.target.id==='10')
    end=98
    else
    end=parseInt(e.target.id)*10
    for(let i=start;i<=end;i++)
    {
      games.push(<Game key={i} title={this.state.allGames[i].title} score={this.state.allGames[i].score} platform={this.state.allGames[i].platform} genre={this.state.allGames[i].genre} editors_choice={this.state.allGames[i].editors_choice}/>)
    }
    this.setState({gamesPerPage:games})
  }

  handlePlatformChange(e)
  {
    this.setState({
      searchPlatform:e.target.value,
    })
    const samePlatform=[<h1>All {e.target.value} Games:</h1>]
   this.state.allGames.map((game,i)=>{
      if(game.platform.includes(e.target.value))
      {
        samePlatform.push(<Game key={i} title={this.state.allGames[i].title} score={this.state.allGames[i].score} platform={this.state.allGames[i].platform} genre={this.state.allGames[i].genre} editors_choice={this.state.allGames[i].editors_choice}/>)
      }
    })
    this.setState({
      samePlatform:samePlatform,
    })
  }

  searchByName(e)
  {
    let s=document.getElementById("searchName").value.toLowerCase()
    if(s!=""){
    const temp=[<h2>Games matching with {document.getElementById("searchName").value}</h2>]
    this.state.allGames.map((game,i)=>
    {
      if(game.title.toLowerCase().includes(s))
      {
        temp.push(<Game key={i} title={this.state.allGames[i].title} score={this.state.allGames[i].score} platform={this.state.allGames[i].platform} genre={this.state.allGames[i].genre} editors_choice={this.state.allGames[i].editors_choice}/>)
      }
    })
    this.setState({
      searchGame:temp,
    })
  }
  }

componentDidMount()
{
    var games=[]
    fetch("http://starlord.hackerearth.com/gamesarena")
    .then(res=>res.json())
    .then(res=>res.map((g,index)=>{
      if(index>0){games.push(g)}
    }))
    .catch(err=>console.log(err))
    const pn=[]
    for(let i=1;i<11;i++)
    pn.push(<button id={i} key={i} onClick={this.handlePageNumberClick}>{i}</button>)
    this.setState({
      pageNumbers:pn,
      allGames:games
    })
}

  render() 
  {
    const games=[]
    for(let i=0;i<this.state.allGames.length;i++)
    games.push(<Game key={i} title={this.state.allGames[i].title} score={this.state.allGames[i].score} platform={this.state.allGames[i].platform} genre={this.state.allGames[i].genre} editors_choice={this.state.allGames[i].editors_choice}/>)
  return (
      <div>
        <Header/><br/>
        <div id="searchbox"><SearchBox searchByName={this.searchByName}/></div>
        <div id="buttong1">
        <button onClick={this.viewAllGames}><b>View All Games</b></button> | <Platforms value={this.state.searchPlatform} onChangePlatform={this.handlePlatformChange}/> | <button onClick={this.resetWebPage}><b>HOME</b></button>
        </div>
        {(this.state.viewAllGames===1)?<div style={{textAlign:"center",marginLeft:"500px", marginTop:"50px"}}>{games}</div>:<p></p>}
        <div id="pageNumbers"><b>Page Numbers</b>{this.state.pageNumbers}</div>
        <div style={{marginLeft:"500px",}}>{this.state.gamesPerPage}</div>
        <div style={{ marginLeft:"500px"}}>{this.state.samePlatform}</div>
        <div style={{marginLeft:"500px",}}>{this.state.searchGame}</div>
      </div>
    )
  }
}

export default App;