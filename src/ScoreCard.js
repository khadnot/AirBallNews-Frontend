import React, { Component } from 'react';
import axios from 'axios';
import Team from './Team';
import GameDetails from './GameDetails';
import dateformat from 'dateformat';
import './ScoreCard.css';

class ScoreCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hTeam: "",
            vTeam: "",
            hScore: "",
            vScore: "",
            hLogo: "",
            vLogo: "",
            arena: "",
            city: "",
            date: "2021-05-18T22:30:00.000Z"
        };
    };

    async componentDidMount() {
        const teamId = await localStorage.getItem('teamId');
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
                let latestGame = res.data.api.games[games.length - 1]
                console.log('The latest game is: ', latestGame);
                this.setState({
                    hTeam: latestGame.hTeam.fullName,
                    vTeam: latestGame.vTeam.fullName,
                    hScore: latestGame.hTeam.score.points,
                    vScore: latestGame.vTeam.score.points,
                    hLogo: latestGame.hTeam.logo,
                    vLogo: latestGame.vTeam.logo,
                    arena: latestGame.arena,
                    city: latestGame.city,
                    date: latestGame.startTimeUTC
                });
            });
        } catch (err) {
          console.log(err);
        }
    }

    render() {
        let newDate = dateformat(this.state.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")
        return (
            <div className='scoreboard'>
                <div className='visitor'>
                   <Team name={this.state.vTeam} 
                         score={this.state.vScore} 
                         logo={this.state.vLogo} />
                </div>
                <div className='game-details'>
                    <GameDetails arena={this.state.arena}
                                 city={this.state.city}
                                 date={newDate} />
                </div>
                <div className='home'>
                   <Team name={this.state.hTeam} 
                         score={this.state.hScore}
                         logo={this.state.hLogo} /> 
                </div>
            </div>
        )
    }
}

export default ScoreCard;