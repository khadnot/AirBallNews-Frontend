import React, { Component, useState } from 'react';
//import { useParams } from "react-router-dom";
import { withRouter } from "react-router";
import axios from 'axios';
import './News.css';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }

    async componentDidMount() {
        const team = this.props.match.params.team;
        const API_KEY = 'a6cabd1a61ed4f74b9db44143a8370f5';
        const url = `https://newsapi.org/v2/everything?q=${team}&pageSize=5&apiKey=${API_KEY}`;
        let res = null;
        console.log(team);
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
        const { news } = this.state;
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
                <ul>
                    {mappedArr}
                </ul>
            </div>
        );
    }
}

export default withRouter(News);