import React, { Component, useState } from 'react';
import axios from 'axios';
import NBA from 'nba';
import './News.css';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }

    async componentDidMount() {
        let team = 'Portland Trail Blazers';
        let teamUrl = team.replace(' ', '%').toLowerCase();
        const API_KEY = 'a6cabd1a61ed4f74b9db44143a8370f5';
        const url = `https://newsapi.org/v2/everything?q=${teamUrl}&pageSize=5&apiKey=${API_KEY}`;
        let res = null;
        try {
            res = await axios(url, {
                headers: {
                    Accept: 'application/json'
                }
            });
        } catch (err) {
          console.log(err);
        }
        this.setState({ 
            news: res.data.articles
        });
    }
    
    render() {
        const dame = NBA.findPlayer('Damian Lillard');
        const { news } = this.state;
        console.log(dame); // works, logs info on Dame!!
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
                <h3>Welcome to the News Page!!</h3>
                <br />
                <h2>Trail Blazers News</h2>
                <ul>
                    {mappedArr}
                </ul>
            </div>
        );
    }
}

export default News;