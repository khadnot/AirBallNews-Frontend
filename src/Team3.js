import React, { useState } from 'react'; // class component, use Component
import { useHistory } from 'react-router-dom';
//import useLocalStorage from "./hooks/useLocalStorage";
import './Teams.css'
import * as NBAIcons from 'react-nba-logos';

//import NBA from 'nba';
//const curry = NBA.findPlayer('Stephen Curry');
//NBA.stats.playerInfo({ PlayerID: curry.playerId }).then(console.log);
//console.log(curry);
// curry player id = 201939
// image source https://cdn.nba.com/headshots/nba/latest/260x190/{playerId}.png
// change player id for each picture

function Teams() {
  const history = useHistory();
  const [team, setTeam] = useState("");

  async function handleClick(e) {
    e.preventDefault();
    localStorage.removeItem('teamName');
    await setTeam(e.currentTarget.id)
    await localStorage.setItem('teamName', team)
    //history.push(e.currentTarget.attributes.to.value);
  }

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
      <div className='column' 
        to='/teams/atlanta%20hawks' id='ATL' onClick={handleClick}>
        <NBAIcons.ATL size={125} team='ATL' />
      </div>
      <div className='column' 
        to='/teams/brooklyn%20nets' id='BKN' onClick={handleClick}>
        <NBAIcons.BKN size={125} team='BKN' />
      </div>
      <div className='column' 
        to='/teams/celtics' id='BOS' onClick={handleClick}>
        <NBAIcons.BOS size={125} />
      </div>
      <div className='column' 
        to='/teams/charlotte%20hornets' id='CHA' onClick={handleClick}>
        <NBAIcons.CHA size={125} />
      </div>
      <div className='column' 
        to='/teams/chicago%20bulls' id='CHI' onClick={handleClick}>
        <NBAIcons.CHI size={125} />
      </div>
      <div className='column' 
        to='/teams/cavaliers' id='CLE' onClick={handleClick}>
        <NBAIcons.CLE size={125} />
      </div>
      <div className='column' 
        to='/teams/dallas%20mavericks' id='DAL' onClick={handleClick}>
        <NBAIcons.DAL size={125} />
      </div>
      <div className='column' 
        to='/teams/denver%20nuggets' id='DEN' onClick={handleClick}>
        <NBAIcons.DEN size={125} />
      </div>
      <div className='column' 
        to='/teams/detroit%20pistons' id='DET' onClick={handleClick}>
        <NBAIcons.DET size={125} />
      </div>
      <div className='column' 
        to='/teams/golden%20state%20warriors' id='GSW' onClick={handleClick}>
        <NBAIcons.GSW size={125} />
      </div>
    </div>
    <div className='row'>
      <div className='column' 
        to='/teams/houston%20rockets' id='HOU' onClick={handleClick}>
        <NBAIcons.HOU size={125} />
      </div>
      <div className='column' 
        to='/teams/indiana%20pacers' id='IND' onClick={handleClick}>
        <NBAIcons.IND size={125} /> 
      </div>
      <div className='column' 
        to='/teams/los%20angeles%20clippers' id='LAC' onClick={handleClick}>
        <NBAIcons.LAC size={125} />
      </div>
      <div className='column' 
        to='/teams/los%20angeles%20lakers' id='LAL' onClick={handleClick}>
        <NBAIcons.LAL size={125} />
      </div>
      <div className='column' 
        to='/teams/memphis%20grizzles' id='MEM' onClick={handleClick}>
        <NBAIcons.MEM size={125} />
      </div>
      <div className='column' 
        to='/teams/miami%20heat' id='MIA' onClick={handleClick}>
        <NBAIcons.MIA size={125} />
      </div>
      <div className='column' 
        to='/teams/milwaukee%20bucks' id='MIL' onClick={handleClick}>
        <NBAIcons.MIL size={125} />
      </div>
      <div className='column' 
        to='/teams/minnesota%20timberwolves' id='MIN' onClick={handleClick}>
        <NBAIcons.MIN size={125} />
      </div>
      <div className='column' 
        to='/teams/new%20orleans%20pelicans' id='NOP' onClick={handleClick}>
        <NBAIcons.NOP size={125} />
      </div>
      <div className='column' 
        to='/teams/new%20york%20knicks' id='NYK' onClick={handleClick}>
        <NBAIcons.NYK size={125} />
      </div>
    </div>
    <div className='row'>
      <div className='column' 
         to='/teams/oklahoma%20city%20thunder' id='OKC' onClick={handleClick}>
        <NBAIcons.OKC size={125} /> 
      </div>
      <div className='column' 
        to='/teams/orlando%20magic' id='ORL' onClick={handleClick}>
        <NBAIcons.ORL size={125} />
      </div>  
      <div className='column' 
        to='/teams/76ers' id='PHI' onClick={handleClick}>
        <NBAIcons.PHI size={125} />
      </div>
      <div className='column' 
        to='/teams/phoenix%20suns' id='PHX' onClick={handleClick}>
        <NBAIcons.PHX size={125} />
      </div>
      <div className='column' 
        to='/teams/portland%20trail%20blazers' id='POR' onClick={handleClick}>
        <NBAIcons.POR size={125} />
      </div>
      <div className='column' 
        to='/teams/sacramento%20kings' id='SAC' onClick={handleClick}>
        <NBAIcons.SAC size={125} />
      </div>
      <div className='column' 
        to='/teams/san%20antonio%20spurs' id='SAS' onClick={handleClick}>
        <NBAIcons.SAS size={125} />
      </div>  
      <div className='column' 
        to='/teams/toronto%20raptors' id='TOR' onClick={handleClick}>
        <NBAIcons.TOR size={125} />
      </div>
      <div className='column' 
        to='/teams/utah%20jazz' id='UTA' onClick={handleClick}>
        <NBAIcons.UTA size={125} />
      </div>
      <div className='column' 
        to='/teams/washington%20wizards' id='WAS' onClick={handleClick}>
      <NBAIcons.WAS size={125} />
      </div>
    </div>
    </div>
  );
};

export default Teams;
