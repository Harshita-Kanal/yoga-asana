import React from 'react'
import './Leaderboard.css';

function Leaderboard() {
    return (
        <div className='container'>
            <div>
                <h1 className = "top mt-1">Leaderboard</h1>
                <hr />
            </div>
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Harshita</td>
                    <td>Kanal</td>
                    <td>@harshita_kanal</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Priyanka</td>
                    <td>Asrani</td>
                    <td>@priyanka_asrani</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Leaderboard
