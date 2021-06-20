import React, { Component } from 'react';
import axios from 'axios';
import Team from './Team';
import './ScoreCard.css';

class ScoreCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hTeam: "",
            vTeam: "",
            hScore: "",
            vScore: ""
        };
    };

    async componentDidMount() {
        const teamId = this.props.teamId;
        const options = await {
            method: 'GET',
            url: `https://api-nba-v1.p.rapidapi.com/games/teamId/${teamId}`,
            headers: {
              'x-rapidapi-key': '8251cf3888msh07e1bcfd619aa5ap1cdec6jsn5796fbe6a699',
              'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
            }
          };

        try {
            await axios.request(options).then(res => {
                let games = res.data.api.games;
                let latestGames = games[games.length - 1];
                console.log('The latest game is: ', latestGames);
                this.setState({
                    hTeam: res.data.api.games[0].hTeam.fullName,
                    vTeam: res.data.api.games[0].vTeam.fullName,
                    hScore: res.data.api.games[0].hTeam.score.points,
                    vScore: res.data.api.games[0].vTeam.score.points
                });
            });
        } catch (err) {
          console.log(err);
        }
    }

    render() {
        // name={this.state.(vTeam/hTeam)} score={this.state.(vScore/hScore)}
        //console.log('The home team is: ', this.state.hTeam);
        //console.log('The visting team is: ', this.state.vTeam);
        return (
            <div className='live-stats'>
                <div className='visitor'>
                   <Team name={this.state.vTeam} score={this.state.vScore} />
                </div>
                <div className='clock'>
                    <p>Clock 04:20</p>
                </div>
                <div className='home'>
                   <Team name={this.state.hTeam} score={this.state.hScore} /> 
                </div>
            </div>
        )
    }
}

export default ScoreCard;