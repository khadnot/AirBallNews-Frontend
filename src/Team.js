import React, { Component } from 'react';

class Team extends Component {
    render() {
        return(
            <div>
                <img src={this.props.logo} alt={this.props.name} />
                <h2>{this.props.name}</h2>
                <h3>{this.props.score}</h3>
            </div>
        )
    }
}

export default Team;