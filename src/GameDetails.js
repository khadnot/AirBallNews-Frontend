import React, { Component } from 'react';

class GameDetails extends Component {
    render() {
        return(
            <div>
                <h2>Game Details:</h2>
                <h4>{this.props.arena} @ {this.props.city}</h4>
                <h5>{this.props.date}</h5>
            </div>
        )
    }
}

export default GameDetails;