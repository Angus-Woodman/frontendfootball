import React, { Component } from 'react'
import '../Styles/playerThumbnail.css'

export default class PlayerThumbnail extends Component {
    render() {
        return (
            <div className='player-thumbnail-container'>
                <img src={this.props.photo} alt="football shirt icon" className="player-thumbnail-photo"></img>
                <h2 className= 'player-thumbnail-name' >{this.props.firstName} {this.props.lastName}</h2>
                <p className= 'player-thumbnail-notes'>Notes: {this.props.notes}</p>
            </div>
        )
    }
}
