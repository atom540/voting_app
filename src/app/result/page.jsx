"use client"
import React from 'react'
import Link from "next/link";
const page = () => {

    const renderWinner = (winner) => {
        return (
          <div className="container-winner">
            <div className="winner-info">
              <p className="winner-tag">Winner!</p>
              <h2> {winner.header}</h2>
              <p className="winner-slogan">{winner.slogan}</p>
            </div>
            <div className="winner-votes">
              <div className="votes-tag">Total Votes: </div>
              <div className="vote-count">{winner.voteCount}</div>
            </div>
          </div>
        );
      };

      
const displayResults=(candidates) =>{
        const renderResults = (candidate) => {
        return (
            <tr>
            <td>{candidate.id}</td>
            <td>{candidate.header}</td>
            <td>{candidate.voteCount}</td>
            </tr>
        );
        }
    };
  return (
    <div>
        <div>
          
            <div className="container-item attention">
              <center>
                <h3>The election is being conducted at the movement.</h3>
                <p>Result will be displayed once the election has ended.</p>
                <p>Go ahead and cast your vote {"(if not already)"}.</p>
                <br />
                <Link
                  href="/voting"
                  style={{ color: "black", textDecoration: "underline" }}
                >
                  Voting Page
                </Link>
              </center>
            </div>
         
        </div>
    </div>
  )
}

export default page
