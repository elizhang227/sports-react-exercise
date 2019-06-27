import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TeamsList extends Component {
    state = {
        players: []
    }

    handleClick = async (e, team) => {
        e.preventDefault();

        await this.setState({
            players: this.props.teams[team]
        })
    }

    render() {
        const teamList = this.props.teams;
        const players = this.state.players;
        return (
            <div>
                {Object.keys(teamList).map((team) => 
                    <button onClick={(e) => this.handleClick(e, team)} key={team}>
                        <b>Team: </b>{team}
                    </button>
                )}
                <ul>
                    {players.map((player, ind) =>
                        <li key={player+ind}>{player}</li>
                    )}
                </ul>
            </div>
        )
    }

}

export default TeamsList;

TeamsList.propTypes = {
    teams: PropTypes.object
}