"use client"
import React, { useState } from "react";

import Link from "next/link";
import "./Navbar.css";

const Navbar=()=> {
  const [open, sehrefpen] = useState(false);
  return (
    <nav>
      <Link href="/" className="header">
        <i className="fab fa-hive"></i> Home
      </Link>
      <ul
        className="navbar-links"
        style={{ width: "35%", transform: open ? "translateX(0px)" : "" }}
      >
        <li>
          <Link href="/Registration" activeClassName="nav-active">
            <i className="far fa-registered" /> Registration
          </Link>
        </li>
        <li>
          <Link href="/Voting" activeClassName="nav-active">
            <i className="fas fa-vote-yea" /> Voting
          </Link>
        </li>
        <li>
          <Link href="/Results" activeClassName="nav-active">
            <i className="fas fa-poll-h" /> Results
          </Link>
        </li>
      </ul>
      <i onClick={() => sehrefpen(!open)} className="fas fa-bars burger-menu"></i>
    </nav>
  );
}

export default Navbar