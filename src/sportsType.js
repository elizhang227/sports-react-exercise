import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TeamsList from './teamsList';


const sportsInfo = {
    "football": {
        "falcons": ["jones", "ryan", "freeman"],
        "eagles": ["wentz", "jackson", "howard"],
        "ravens": ["jackson", "thomas", "ingram"]
    },
    "baseball": {
        "Orioles": ["davis", "mancini", "hess"], 
        "Cardinals": ["goldschmidt", "molina", "ozuna"], 
        "Blue Jays": ["shoemaker", "galvis", "stroman"]
    },
    "basketball": {
        "Bucks": ["antetokounmpo", "brogdon", "lopez"], 
        "Grizzlies": ["conley", "noah", "parsons"], 
        "Timberwolves": ["rose", "towns", "wiggins"]
    }
}

class SportsList extends Component {
    state = {
        sports: {}
    }

    handleClick = async (e, sport) => {
        e.preventDefault();

        this.setState({
            sports: sportsInfo[sport]
        })
    }

    render() {
        const { sports } = this.state;
        return(
            <div>
                {Object.keys(sportsInfo).map((sport, ind) => 
                    <button key={sport+ind} onClick={(e) => this.handleClick(e, sport)}>
                        <b>{sport}</b>
                    </button>
                )}
                <TeamsList teams={sports} />
            </div>
        )
    }
}

export default SportsList;

SportsList.propTypes = {
    sports: PropTypes.object
}