import React, { Component } from 'react'

export default class PlayerCard extends Component {

    dragStart = e => {

        e.dataTransfer.setData('player_id', e.target.id);

        setTimeout(() => {
            e.target.style.display = "none"
        }, 0)
    };

    dragOver = e => {
        e.stopPropogation();
    }

    render() {
        return (
            <div
                id={this.props.id}
                className= {this.props.className}
                draggable= "true"
                onDragStart= {this.dragStart}
                onDragOver = {this.dragOver}
            >
                { this.props.children }
            </div>
        )
    }
}
