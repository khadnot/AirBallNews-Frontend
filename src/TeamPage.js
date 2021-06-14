import React, { Component } from 'react';
import { useParams } from "react-router-dom";
//import axios from 'axios';
//import NBA from 'nba';

/** Team news page
 * 
 * Renders news and stats for specific team
 * 
 * Routed at /teams/:team
 * 
 */ 

function TeamPage() {
    const { team } = useParams();
    const teamName = team.charAt(0).toUpperCase() + team.slice(1);

    return (
        <div className='TeamPage'>
            <h1>Welcome the Team Page for the { teamName }!!</h1>
            <h3>Here is where all the magic happens!!</h3>
            <h4>Boom Boom Clap!</h4>
        </div>
    )
}

export default TeamPage;