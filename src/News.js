import React, { Component, useState } from 'react';
import axios from 'axios';
import './News.css';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            url: "",
            urlToImage: ""
        };
    }

    async componentDidMount() {
        let team = 'Portland Trail Blazers';
        let teamUrl = team.replace(' ', '%').toLowerCase();
        const API_KEY = 'a6cabd1a61ed4f74b9db44143a8370f5'
        const url = `https://newsapi.org/v2/everything?q=${teamUrl}&pageSize=1&apiKey=${API_KEY}`;
        let res = null;
        try {
            res = await axios(url, {
                headers: {
                    Accept: 'application/json'
                }
            });
        } catch (e) {
          console.log(e);
        }
        this.setState({ 
            title: res.data.articles[0].title,
            url: res.data.articles[0].url,
            urlToImage: res.data.articles[0].urlToImage 
        });
    }
    
    render() {
        const { title, url, urlToImage } = this.state;
        console.log(url);
        return (
            <div className="App">
                <h3>Welcome to the News Page!!</h3>
                <br />
                <div className='container'>
                    <img src={urlToImage} alt={title} className='image' width='300px'  />
                    <a href={url} target='_blank' rel='noreferrer'>
                        <div className='overlay'>
                            <div className='text'>{title}</div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default News;