import React, { Component } from 'react'
import { PlayerCard } from '.'
import '../Styles/playerThumbnail.css'

export default class PlayerThumbnail extends Component {
   
    state = {
        id: `player${this.props.id}`
    }
   
    render() {
        return (
            <div className='player-thumbnail-container'>
                <PlayerCard id = {this.state.id} className="player-thumbnail">
                    <img className="player-thumbnail-photo" src={this.props.photo} alt="football shirt icon"></img>
                </PlayerCard>
                <h2 className= 'player-thumbnail-name' >{this.props.firstName} {this.props.lastName}</h2>
                <p className= 'player-thumbnail-notes'>Notes: {this.props.notes}</p>
            </div>
        )
    }
}
