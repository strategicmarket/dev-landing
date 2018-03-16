import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => (
  // <div className="jumbotron jumbotron-fluid" style={{height: '100vh'}}>
  //   <div className="container-fluid" style={{padding: '10em'}}>
  //     <h1 className="display-4" style={{color: '#eee'}}>Strategic Machines</h1>
  //     <p className="lead" style={{color: '#eee'}}>
  //       Enabling fast exchange of messages between <br /> people and organizations through virtual agents.
  //     </p>
  //     <hr className="my-4" />
  //     <p style={{color: '#eee'}}>Learn more about how SMs works</p>
  //     <p className="lead">
  //       <a className="btn btn-primary btn-lg" href="#" role="button">Introduction</a>
  //     </p>
  //   </div>
  // </div>
  <header id="showcase">
    <div className="wrapper">
      <h1>Strategic Machines</h1>
      <p>
        Enabling low-latency exchange of messages between <br />
        people and organizations through virtual agents.
      </p>
      <Link to="/other" className="button">Learn More</Link>
    </div>
  </header>
);

export default Banner;