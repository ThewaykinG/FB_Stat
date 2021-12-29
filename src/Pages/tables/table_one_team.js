import React from 'react'
import "./table.css";
export default props => (

    <table className="table table-striped table-dark">
        <thead>
            <tr>
                <th>Date</th>
                <th>Home team</th>
                <th>Score</th>
                <th>Away team</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            { props.data_new.map(teams =>(
                <tr key={teams.id}>
                    <td>{teams.utcDate}</td>
                    <td>{teams.homeTeam.name}</td>
                    <td>{teams.score.fullTime.homeTeam}:{teams.score.fullTime.awayTeam}</td>
                    <td>{teams.awayTeam.name}</td>
                    <td>{teams.status}</td>
                </tr>
            ))}
        </tbody>
    </table>
)