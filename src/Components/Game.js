import React from 'react'

class Game extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            title:props.title,
            platform:props.platform,
            genre:props.genre,
            score:props.score,
            editors_choice:props.editors_choice,
        }
    }

    render()
    {
       return (<h3>{this.props.title}</h3>)
        
    }
}
export default Game