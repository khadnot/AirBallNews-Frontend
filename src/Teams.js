import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Teams.css'
import * as NBAIcons from 'react-nba-logos';

const NBA = require('nba');
//const curry = NBA.findPlayer('Stephen Curry');

class Teams extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  render() {
    return (
      <div className='team-names'>
        <h1>Welcome to the Teams Page!</h1>
        <p>Please select your favorite team:</p>
        <div className='row'>
          <Link className='column' to='/teams/atlanta&hawks'>
            <NBAIcons.ATL size={125} />
          </Link>
          <Link className='column' to='/teams/brookly&nnets'>
            <NBAIcons.BKN size={125} />
          </Link>
          <Link className='column' to='/teams/boston&celtics'>
            <NBAIcons.BOS size={125} />
          </Link>
          <Link className='column' to='/teams/hornets'>
            <NBAIcons.CHA size={125} />
          </Link>
          <Link className='column' to='/teams/bulls'>
            <NBAIcons.CHI size={125} />
          </Link>
          <Link className='column' to='/teams/cavaliers'>
            <NBAIcons.CLE size={125} />
          </Link>
          <Link className='column' to='/teams/mavs'>
            <NBAIcons.DAL size={125} />
          </Link>
          <Link className='column' to='/teams/nuggets'>
            <NBAIcons.DEN size={125} />
          </Link>
          <Link className='column' to='/teams/pistons'>
            <NBAIcons.DET size={125} />
          </Link>
          <Link className='column' to='/teams/warriors'>
            <NBAIcons.GSW size={125} />
          </Link>
        </div>
        <div className='row'>
          <Link className='column' to='/teams/rockets'>
            <NBAIcons.HOU size={125} />
          </Link>
          <Link className='column' to='/teams/pacers'>
            <NBAIcons.IND size={125} /> 
          </Link>
          <Link className='column' to='/teams/clippers'>
            <NBAIcons.LAC size={125} />
          </Link>
          <Link className='column' to='/teams/lakers'>
            <NBAIcons.LAL size={125} />
          </Link>
          <Link className='column' to='/teams/grizzles'>
            <NBAIcons.MEM size={125} />
          </Link>
          <Link className='column' to='/teams/heat'>
            <NBAIcons.MIA size={125} />
          </Link>
          <Link className='column' to='/teams/bucks'>
            <NBAIcons.MIL size={125} />
          </Link>
          <Link className='column' to='/teams/timberwolves'>
            <NBAIcons.MIN size={125} />
          </Link>
          <Link className='column' to='/teams/pelicans'>
            <NBAIcons.NOP size={125} />
          </Link>
          <Link className='column' to='/teams/knicks'>
            <NBAIcons.NYK size={125} />
          </Link>
        </div>
        <div className='row'>
          <Link className='column' to='/teams/thunder'>
           <NBAIcons.OKC size={125} /> 
          </Link>
          <Link className='column' to='/teams/magic'>
            <NBAIcons.ORL size={125} />
          </Link>  
          <Link className='column' to='/teams/76ers'>
            <NBAIcons.PHI size={125} />
          </Link>
          <Link className='column' to='/teams/suns'>
            <NBAIcons.PHX size={125} />
          </Link>
          <Link className='column' to='/teams/blazers'>
            <NBAIcons.POR size={125} />
          </Link>
          <Link className='column' to='/teams/kings'>
            <NBAIcons.SAC size={125} />
          </Link>
          <Link className='column' to='/teams/spurs'>
            <NBAIcons.SAS size={125} />
          </Link>  
          <Link className='column' to='/teams/raptors'>
            <NBAIcons.TOR size={125} />
          </Link>
          <Link className='column' to='/teams/jazz'>
            <NBAIcons.UTA size={125} />
          </Link>
          <Link className='column' to='/teams/wizards'>
          <NBAIcons.WAS size={125} />
          </Link>
        </div>
      </div>
    );
  };
}

export default Teams;
