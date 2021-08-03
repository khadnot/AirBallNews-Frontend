import React, { Component } from 'react';
import Team from './Team';
import GameDetails from './GameDetails';
import dateformat from 'dateformat';
import Api from "./api";
import './ScoreCard.css';

class ScoreCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hTeam: "",
            vTeam: "",
            hCode: "",
            vCode: "",
            hScore: "",
            vScore: "",
            hTeamId: "",
            vTeamId: "",
            hTeamLogo: "",
            vTeamLogo: "",
            arena: "",
            city: "",
            date: ""
        };
    };

    async componentDidMount() {

        const teamId = await localStorage.getItem('teamId');

        try {
            let latestGame = await Api.getLatestGame(teamId);

            this.setState({
                hTeam: latestGame.hTeam.fullName,
                vTeam: latestGame.vTeam.fullName,
                hCode: latestGame.hTeam.shortName,
                vCode: latestGame.vTeam.shortName,
                hScore: latestGame.hTeam.score.points,
                vScore: latestGame.vTeam.score.points,
                hTeamId: latestGame.hTeam.teamId,
                vTeamId: latestGame.vTeam.teamId,
                arena: latestGame.arena,
                city: latestGame.city,
                date: latestGame.startTimeUTC
            });

            let hTeamLogo = await Api.getTeamLogos(this.state.hCode, this.state.hTeamId);
            let vTeamLogo = await Api.getTeamLogos(this.state.vCode, this.state.vTeamId);

            this.setState({
                hTeamLogo: hTeamLogo,
                vTeamLogo: vTeamLogo
            })
            
        } catch (err) {
          console.log(err);
        }
    }

    render() {
        let newDate = dateformat(this.state.date, "dddd, mmmm dS, yyyy @ h:MM TT")
        return (
            <div className='scoreboard'>
                <div className='visitor'>
                   <Team name={this.state.vTeam} 
                         score={this.state.vScore} 
                         logo={this.state.vTeamLogo} /> {/* need to get logo from teams/teamID */}
                </div>
                <div className='game-details'>
                    <GameDetails arena={this.state.arena}
                                 city={this.state.city}
                                 date={newDate} />
                </div>
                <div className='home'>
                   <Team name={this.state.hTeam} 
                         score={this.state.hScore}
                         logo={this.state.hTeamLogo} /> {/* need to get logo from teams/teamID */}
                </div>
            </div>
        )
    }
}

export default ScoreCard;