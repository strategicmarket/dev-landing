
////////////////////////////////////////////////////////////////////
///////                 Landing Page Banner                /////////
///////       This is the first thing a developer sees     /////////
////////////////////////////////////////////////////////////////////

import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => (
  <header id="showcase">
    {/* <div className="wrapper"> */}
      <h1>Strategic Machines</h1>
      <p>
        Enabling low-latency exchange of messages between <br />
        people and organizations through virtual agents.
      </p>
      <Link to="/docs" className="button">Learn More</Link>
    {/* </div> */}
  </header>
);

export default Banner;
