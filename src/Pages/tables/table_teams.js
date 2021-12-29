import React from 'react';
import "./table.css";
export default props => (
    <table className="table table-striped table-dark">
        <thead>
            <tr>
                <th></th>
                <th>Team name</th>
                <th>Club Colors</th>
                <th>Stadium</th>
            </tr>
        </thead>
        <tbody>
            { props.data.map(teams =>(
                <tr key={teams.id}>
                    <td><img src={teams.crestUrl} width='50'/></td>
                    <td>{teams.shortName}</td>
                    <td>{teams.clubColors}</td>
                    <td>{teams.venue}</td>
                </tr>
            ))}
        </tbody>
    </table>
)