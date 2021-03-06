import React, { Component } from 'react';
import { withRouter } from "react-router";
import Api from "./api";
import ScoreCard from './ScoreCard.js';
import './News.css';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            team: "",
            players: []
        };
    }

    async componentDidMount() {
        const team = this.props.match.params.team;
        let fullName = '';
        let splitTeam = team.split('%');
        let teamQuery = splitTeam.join('+');
        for (let word of splitTeam) {
            fullName += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
        }
        //************************************************************************** */
        const teamName = localStorage.getItem('teamName');
        const players = await Api.getPlayers(teamName); // teamName for brooklyn nets is BKN
        console.log(team);
        const news = await Api.getTeamNews(teamQuery); // (team) is brooklyn%nets
        this.setState({ 
            news: news,
            team: fullName,
            players: players
        });
    } 
    
    render() {
        const { news, team, players } = this.state;
        // Render starting five players
        let playerArr = players.map(player => {
            let url=`https://cdn.nba.com/headshots/nba/latest/260x190/${player.playerId}.png`;
            let nameUrl = `${player.name}`.split(" ").join("-").toLowerCase();
            let profile = `https://www.nba.com/player/${player.playerId}/${nameUrl}`;
            return (
                <div className='playerPics' key={player.playerId}>
                    <a href={profile} target='_blank' rel='noreferrer'>
                        <img src={url} alt={player.playerId} className='player' />
                    </a>
                    <p>{player.name}</p>
                    <p>[ {player.pos} ]</p>
                </div>
            )
        });
        // Render news articles
        let mappedArr = news.map(news => {
            return (
                <div className='container' key={news.title}>
                    <img src={news.urlToImage} alt={news.title} className='image' />
                    <a href={news.url} target='_blank' rel='noreferrer'>
                        <div className='overlay'>
                            <div className='text'>{news.title}</div>
                        </div>
                    </a>
                </div>
            );
        });

        return (
            <div className="App">
                <h3>Welcome to the News Page for the { team }</h3>
                <h3>Latest Game</h3>
                <br />
                <ScoreCard />
                <br />
                <div>
                    <h3>Starting Five</h3>
                    <p>(Click player for stats)</p>
                    {playerArr}
                </div>
                <br />
                <div className='News'>
                    <h2>Team News</h2>
                    <ul>
                        {mappedArr}
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(News);