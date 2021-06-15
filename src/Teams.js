import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Teams.css'
import * as NBAIcons from 'react-nba-logos';

//import NBA from 'nba';
//const curry = NBA.findPlayer('Stephen Curry');
//NBA.stats.playerInfo({ PlayerID: curry.playerId }).then(console.log);
//console.log(curry);
// curry player id = 201939
// image source https://cdn.nba.com/headshots/nba/latest/260x190/{playerId}.png
// change player id for each picture

class Teams extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      player:[],
    }
  }

  handleClick() {
  }

  getPic(e) {
    e.preventDefault();
    
  }

  render() {
    return (
      <div className='team-names'>
        <h1>Welcome to the Teams Page!</h1>
        <p>Please select your favorite team:</p>
        <img src='https://cdn.nba.com/headshots/nba/latest/260x190/201939.png' alt='curry' />
        <p>Steph Curry</p>
        <br />
        <img src='https://cdn.nba.com/headshots/nba/latest/260x190/203954.png' alt='embiid' />
        <p>Joel Embiid</p>
        <br />
        <div className='row'>
          <Link className='column' 
            to='/teams/atlanta%25hawks'>
            <NBAIcons.ATL size={125} />
          </Link>
          <Link className='column' 
            to='/teams/brooklyn%25nets'>
            <NBAIcons.BKN size={125} />
          </Link>
          <Link className='column' 
            to='/teams/celtics'>
            <NBAIcons.BOS size={125} />
          </Link>
          <Link className='column' 
            to='/teams/charlotte%25hornets'>
            <NBAIcons.CHA size={125} />
          </Link>
          <Link className='column' 
            to='/teams/chicago%25bulls'>
            <NBAIcons.CHI size={125} />
          </Link>
          <Link className='column' 
            to='/teams/cavaliers'>
            <NBAIcons.CLE size={125} />
          </Link>
          <Link className='column' 
            to='/teams/dallas%25mavericks'>
            <NBAIcons.DAL size={125} />
          </Link>
          <Link className='column' 
            to='/teams/denver%25nuggets'>
            <NBAIcons.DEN size={125} />
          </Link>
          <Link className='column' 
            to='/teams/detroit%25pistons'>
            <NBAIcons.DET size={125} />
          </Link>
          <Link className='column' 
            to='/teams/golden%25state%25warriors'>
            <NBAIcons.GSW size={125} />
          </Link>
        </div>
        <div className='row'>
          <Link className='column' 
            to='/teams/houston%25rockets'>
            <NBAIcons.HOU size={125} />
          </Link>
          <Link className='column' 
            to='/teams/indiana%25pacers'>
            <NBAIcons.IND size={125} /> 
          </Link>
          <Link className='column' 
            to='/teams/los%25angeles%25clippers'>
            <NBAIcons.LAC size={125} />
          </Link>
          <Link className='column' 
            to='/teams/los%25angeles%25lakers'>
            <NBAIcons.LAL size={125} />
          </Link>
          <Link className='column' 
            to='/teams/memphis%25grizzles'>
            <NBAIcons.MEM size={125} />
          </Link>
          <Link className='column' 
            to='/teams/miami%25heat'>
            <NBAIcons.MIA size={125} />
          </Link>
          <Link className='column' 
            to='/teams/milwaukee%25bucks'>
            <NBAIcons.MIL size={125} />
          </Link>
          <Link className='column' 
            to='/teams/minnesota%25timberwolves'>
            <NBAIcons.MIN size={125} />
          </Link>
          <Link className='column' 
            to='/teams/new%25orleans%25pelicans'>
            <NBAIcons.NOP size={125} />
          </Link>
          <Link className='column' 
            to='/teams/new%25york%25knicks'>
            <NBAIcons.NYK size={125} />
          </Link>
        </div>
        <div className='row'>
          <Link className='column' 
            to='/teams/oklahoma%25city%25thunder'>
           <NBAIcons.OKC size={125} /> 
          </Link>
          <Link className='column' 
            to='/teams/orlando%25magic'>
            <NBAIcons.ORL size={125} />
          </Link>  
          <Link className='column' 
            to='/teams/76ers'>
            <NBAIcons.PHI size={125} />
          </Link>
          <Link className='column' 
            to='/teams/phoenix%25suns'>
            <NBAIcons.PHX size={125} />
          </Link>
          <Link className='column' 
            to='/teams/portland%25trail%25blazers'>
            <NBAIcons.POR size={125} />
          </Link>
          <Link className='column' 
            to='/teams/sacramento%25kings'>
            <NBAIcons.SAC size={125} />
          </Link>
          <Link className='column' 
            to='/teams/san%25antonio%25spurs'>
            <NBAIcons.SAS size={125} />
          </Link>  
          <Link className='column' 
            to='/teams/toronto%25raptors'>
            <NBAIcons.TOR size={125} />
          </Link>
          <Link className='column' 
            to='/teams/utah%25jazz'>
            <NBAIcons.UTA size={125} />
          </Link>
          <Link className='column' 
            to='/teams/washington%25wizards'>
          <NBAIcons.WAS size={125} />
          </Link>
        </div>
      </div>
    );
  };
}

export default Teams;
