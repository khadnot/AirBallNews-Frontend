import React, { Component, useState } from 'react';
//import { useParams } from "react-router-dom";
import { withRouter } from "react-router";
import Api from "./api";
import axios from 'axios';
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
        const API_KEY = 'a6cabd1a61ed4f74b9db44143a8370f5';
        const news = `https://newsapi.org/v2/everything?q=${team}&pageSize=5&apiKey=${API_KEY}`;
        let res = null;
        try {
            res = await axios(news, {
                headers: {
                    Accept: 'application/json'
                }
            });
        } catch (err) {
          console.log(err);
        }
        let fullName = '';
        let splitTeam = team.split('%');
        for (let word of splitTeam) {
            fullName += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
        }
        //************************************************************************** */
        const teamId = localStorage.getItem('teamName');
        const players = await Api.getPlayers(teamId);
        this.setState({ 
            news: res.data.articles,
            team: fullName,
            players: players
        });
    } 
    
    render() {
        const { news, team, players } = this.state;
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
        })

        return (
            <div className="App">
                <h3>Welcome to the News Page for the { team }</h3>
                <p>(Click player for stats)</p>
                <br />
                <div>
                    {playerArr}
                </div>
                <br />
                <div className='News'>
                    <h1>Team News</h1>
                    <ul>
                        {mappedArr}
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(News);