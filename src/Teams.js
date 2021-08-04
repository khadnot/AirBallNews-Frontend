import React, { Component } from 'react';
import './Teams.css'
import * as NBAIcons from 'react-nba-logos';

const BASE_URL =  'https://air-ball-news.surge.sh' || 'http://localhost:3000';

class Teams extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      team: "",
      url: "",
      id: ""
    }
  }

  async handleClick(e) {
    e.preventDefault();
    await this.setState({ 
      team: e.currentTarget.id,
      url: e.currentTarget.attributes.to.value,
      id: e.currentTarget.attributes.teamId.value
    });
    const { team, url, id } = this.state;
    localStorage.setItem('teamName', team)
    localStorage.setItem('teamUrl', url)
    localStorage.setItem('teamId', id)
    window.location.href = `${BASE_URL}/teams/${url}`;
  }

  render() {
    return (
      <div className='team-names'>
        <h1>Welcome to the Teams Page!</h1>
        <p>Please select your favorite team:</p>
        <br />
        <div className='row'>
          <div className='column' 
            to='atlanta%25hawks' id='ATL' teamId='1' onClick={this.handleClick}>
            <NBAIcons.ATL size={125} />
          </div>
          <div className='column' 
            to='brooklyn%25nets' id='BKN' teamId='4' onClick={this.handleClick}>
            <NBAIcons.BKN size={125} />
          </div>
          <div className='column' 
            to='celtics' id='BOS' teamId='2' onClick={this.handleClick}>
            <NBAIcons.BOS size={125} />
          </div>
          <div className='column' 
            to='charlotte%25hornets' id='CHA' teamId='5' onClick={this.handleClick}>
            <NBAIcons.CHA size={125} />
          </div>
          <div className='column' 
            to='chicago%25bulls' id='CHI' teamId='6' onClick={this.handleClick}>
            <NBAIcons.CHI size={125} />
          </div>
          <div className='column' 
            to='cavaliers' id='CLE' teamId='7' onClick={this.handleClick}>
            <NBAIcons.CLE size={125} />
          </div>
          <div className='column' 
            to='dallas%25mavericks' id='DAL' teamId='8' onClick={this.handleClick}>
            <NBAIcons.DAL size={125} />
          </div>
          <div className='column' 
            to='denver%25nuggets' id='DEN' teamId='9' onClick={this.handleClick}>
            <NBAIcons.DEN size={125} />
          </div>
          <div className='column' 
            to='detroit%25pistons' id='DET' teamId='10' onClick={this.handleClick}>
            <NBAIcons.DET size={125} />
          </div>
          <div className='column' 
            to='golden%25state%25warriors' id='GSW' teamId='11' onClick={this.handleClick}>
            <NBAIcons.GSW size={125} />
          </div>
        </div>
        <div className='row'>
          <div className='column' 
            to='houston%25rockets' id='HOU' teamId='14' onClick={this.handleClick}>
            <NBAIcons.HOU size={125} />
          </div>
          <div className='column' 
            to='indiana%25pacers' id='IND' teamId='15' onClick={this.handleClick}>
            <NBAIcons.IND size={125} /> 
          </div>
          <div className='column' 
            to='los%25angeles%25clippers' id='LAC' teamId='16' onClick={this.handleClick}>
            <NBAIcons.LAC size={125} />
          </div>
          <div className='column' 
            to='los%25angeles%25lakers' id='LAL' teamId='17' onClick={this.handleClick}>
            <NBAIcons.LAL size={125} />
          </div>
          <div className='column' 
            to='memphis%25grizzles' id='MEM' teamId='19' onClick={this.handleClick}>
            <NBAIcons.MEM size={125} />
          </div>
          <div className='column' 
            to='miami%25heat' id='MIA' teamId='20' onClick={this.handleClick}>
            <NBAIcons.MIA size={125} />
          </div>
          <div className='column' 
            to='milwaukee%25bucks' id='MIL' teamId='21' onClick={this.handleClick}>
            <NBAIcons.MIL size={125} />
          </div>
          <div className='column' 
            to='minnesota%25timberwolves' id='MIN' teamId='22' onClick={this.handleClick}>
            <NBAIcons.MIN size={125} />
          </div>
          <div className='column' 
            to='new%25orleans%25pelicans' id='NOP' teamId='23' onClick={this.handleClick}>
            <NBAIcons.NOP size={125} />
          </div>
          <div className='column' 
            to='new%25york%25knicks' id='NYK' teamId='24' onClick={this.handleClick}>
            <NBAIcons.NYK size={125} />
          </div>
        </div>
        <div className='row'>
          <div className='column' 
            to='oklahoma%25city%25thunder' id='OKC' teamId='25' onClick={this.handleClick}>
           <NBAIcons.OKC size={125} /> 
          </div>
          <div className='column' 
            to='orlando%25magic' id='ORL' teamId='26' onClick={this.handleClick}>
            <NBAIcons.ORL size={125} />
          </div>  
          <div className='column' 
            to='76ers' id='PHI' teamId='27' onClick={this.handleClick}>
            <NBAIcons.PHI size={125} />
          </div>
          <div className='column' 
            to='phoenix%25suns' id='PHX' teamId='28' onClick={this.handleClick}>
            <NBAIcons.PHX size={125} />
          </div>
          <div className='column' 
            to='portland%25trail%25blazers' id='POR' teamId='29' onClick={this.handleClick}>
            <NBAIcons.POR size={125} />
          </div>
          <div className='column' 
            to='sacramento%25kings' id='SAC' teamId='30' onClick={this.handleClick}>
            <NBAIcons.SAC size={125} />
          </div>
          <div className='column' 
            to='san%25antonio%25spurs' id='SAS' teamId='31' onClick={this.handleClick}>
            <NBAIcons.SAS size={125} />
          </div>  
          <div className='column' 
            to='toronto%25raptors' id='TOR' teamId='38' onClick={this.handleClick}>
            <NBAIcons.TOR size={125} />
          </div>
          <div className='column' 
            to='utah%25jazz' id='UTA' teamId='40' onClick={this.handleClick}>
            <NBAIcons.UTA size={125} />
          </div>
          <div className='column' 
            to='washington%25wizards' id='WAS' teamId='41' onClick={this.handleClick}>
          <NBAIcons.WAS size={125} />
          </div>
        </div>
      </div>
    );
  };
}

export default Teams;
