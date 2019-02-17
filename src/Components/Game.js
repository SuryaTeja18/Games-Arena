import React from 'react'

class Game extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            title:this.props.title,
            platform:this.props.platform,
            genre:this.props.genre,
            score:this.props.score,
            editors_choice:this.props.editors_choice,
        }
    }

    render()
    {
        var randombg='#'
        var randomColor
        for(let i=0;i<6;i++)
        {
            randomColor =Math.floor(Math.random()*10).toString()
            randombg+=randomColor
        }
       return (
        <div id="game" style={{background:randombg}}>
       <h3>Title: {this.state.title}</h3><br/>
       <em>Runs on {this.state.platform}</em><br/>
       <h4>Genre: {this.state.genre}</h4><br/>
       <p>Editors Choice: {this.state.editors_choice} :)</p><br/>
       <h3>Rating: {this.state.score}!!</h3>
       </div>
       )
        
    }
}
export default Game