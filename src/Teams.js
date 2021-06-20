import React, { Component } from 'react';
import './Teams.css'
import * as NBAIcons from 'react-nba-logos';

class Teams extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      team: "",
      url: ""
    }
  }

  async handleClick(e) {
    e.preventDefault();
    await this.setState({ 
      team: e.currentTarget.id,
      url: e.currentTarget.attributes.to.value
    });
    console.log(this.state)
    const { team, url } = this.state;
    localStorage.setItem('teamName', team)
    localStorage.setItem('teamUrl', url)
    window.location.href = `http://localhost:3000${url}`
  }

  render() {
    return (
      <div className='team-names'>
        <h1>Welcome to the Teams Page!</h1>
        <p>Please select your favorite team:</p>
        <br />
        <div className='row'>
          <div className='column' 
            to='/teams/atlanta%25hawks' id='ATL' onClick={this.handleClick}>
            <NBAIcons.ATL size={125} />
          </div>
          <div className='column' 
            to='/teams/brooklyn%25nets' id='BKN' onClick={this.handleClick}>
            <NBAIcons.BKN size={125} />
          </div>
          <div className='column' 
            to='/teams/celtics' id='BOS' onClick={this.handleClick}>
            <NBAIcons.BOS size={125} />
          </div>
          <div className='column' 
            to='/teams/charlotte%25hornets' id='CHA' onClick={this.handleClick}>
            <NBAIcons.CHA size={125} />
          </div>
          <div className='column' 
            to='/teams/chicago%25bulls' id='CHI' onClick={this.handleClick}>
            <NBAIcons.CHI size={125} />
          </div>
          <div className='column' 
            to='/teams/cavaliers' id='CLE' onClick={this.handleClick}>
            <NBAIcons.CLE size={125} />
          </div>
          <div className='column' 
            to='/teams/dallas%25mavericks' id='DAL' onClick={this.handleClick}>
            <NBAIcons.DAL size={125} />
          </div>
          <div className='column' 
            to='/teams/denver%25nuggets' id='DEN' onClick={this.handleClick}>
            <NBAIcons.DEN size={125} />
          </div>
          <div className='column' 
            to='/teams/detroit%25pistons' id='DET' onClick={this.handleClick}>
            <NBAIcons.DET size={125} />
          </div>
          <div className='column' 
            to='/teams/golden%25state%25warriors' id='GSW' onClick={this.handleClick}>
            <NBAIcons.GSW size={125} />
          </div>
        </div>
        <div className='row'>
          <div className='column' 
            to='/teams/houston%25rockets' id='HOU' onClick={this.handleClick}>
            <NBAIcons.HOU size={125} />
          </div>
          <div className='column' 
            to='/teams/indiana%25pacers' id='IND' onClick={this.handleClick}>
            <NBAIcons.IND size={125} /> 
          </div>
          <div className='column' 
            to='/teams/los%25angeles%25clippers' id='LAC' onClick={this.handleClick}>
            <NBAIcons.LAC size={125} />
          </div>
          <div className='column' 
            to='/teams/los%25angeles%25lakers' id='LAL' onClick={this.handleClick}>
            <NBAIcons.LAL size={125} />
          </div>
          <div className='column' 
            to='/teams/memphis%25grizzles' id='MEM' onClick={this.handleClick}>
            <NBAIcons.MEM size={125} />
          </div>
          <div className='column' 
            to='/teams/miami%25heat' id='MIA' onClick={this.handleClick}>
            <NBAIcons.MIA size={125} />
          </div>
          <div className='column' 
            to='/teams/milwaukee%25bucks' id='MIL' onClick={this.handleClick}>
            <NBAIcons.MIL size={125} />
          </div>
          <div className='column' 
            to='/teams/minnesota%25timberwolves' id='MIN' onClick={this.handleClick}>
            <NBAIcons.MIN size={125} />
          </div>
          <div className='column' 
            to='/teams/new%25orleans%25pelicans' id='NOP' onClick={this.handleClick}>
            <NBAIcons.NOP size={125} />
          </div>
          <div className='column' 
            to='/teams/new%25york%25knicks' id='NYK' onClick={this.handleClick}>
            <NBAIcons.NYK size={125} />
          </div>
        </div>
        <div className='row'>
          <div className='column' 
            to='/teams/oklahoma%25city%25thunder' id='OKC' onClick={this.handleClick}>
           <NBAIcons.OKC size={125} /> 
          </div>
          <div className='column' 
            to='/teams/orlando%25magic' id='ORL' onClick={this.handleClick}>
            <NBAIcons.ORL size={125} />
          </div>  
          <div className='column' 
            to='/teams/76ers' id='PHI' onClick={this.handleClick}>
            <NBAIcons.PHI size={125} />
          </div>
          <div className='column' 
            to='/teams/phoenix%25suns' id='PHX' onClick={this.handleClick}>
            <NBAIcons.PHX size={125} />
          </div>
          <div className='column' 
            to='/teams/portland%25trail%25blazers' id='POR' onClick={this.handleClick}>
            <NBAIcons.POR size={125} />
          </div>
          <div className='column' 
            to='/teams/sacramento%25kings' id='SAC' onClick={this.handleClick}>
            <NBAIcons.SAC size={125} />
          </div>
          <div className='column' 
            to='/teams/san%25antonio%25spurs' id='SAS' onClick={this.handleClick}>
            <NBAIcons.SAS size={125} />
          </div>  
          <div className='column' 
            to='/teams/toronto%25raptors' id='TOR' onClick={this.handleClick}>
            <NBAIcons.TOR size={125} />
          </div>
          <div className='column' 
            to='/teams/utah%25jazz' id='UTA' onClick={this.handleClick}>
            <NBAIcons.UTA size={125} />
          </div>
          <div className='column' 
            to='/teams/washington%25wizards' id='WAS' onClick={this.handleClick}>
          <NBAIcons.WAS size={125} />
          </div>
        </div>
      </div>
    );
  };
}

export default Teams;
