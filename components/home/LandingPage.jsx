import React from 'react'
import './LandingPage.css'
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="home_container">
        <div className="home_title">
            <h1>Block Votes</h1>
        </div>

        <div className="home_container">
            <h2>
                A blockChain _based E -Voting System, built with Secure
            </h2>
            <p>Make your Vote Count !</p>

            <div className="home_btn">
                <div className="left_btn">
                <p className="font_light">Register/SignIn for the company</p>
                <Link href="/registration">
                <button className="btn_primary">Company</button>
                </Link>
                </div>
                <div className="right_btn">
                <p className="font_light">Register/SignIn for the company</p>
                <Link href="/voting">
                <button className="btn_primary">Voters</button>
                </Link>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default LandingPage
