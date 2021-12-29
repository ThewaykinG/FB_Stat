import React from 'react';
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
            { props.data.map(matches =>(
                <tr key={matches.id}>
                    <td>{matches.utcDate}</td>
                    <td>{matches.homeTeam.name}</td>
                    <td>{matches.score.fullTime.homeTeam}:{matches.score.fullTime.awayTeam}</td>
                    <td>{matches.awayTeam.name}</td>
                    <td>{matches.status}</td>
                </tr>
            ))}
        </tbody>
    </table>
)