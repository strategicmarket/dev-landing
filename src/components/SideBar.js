import React from 'react';
// import { Link } from 'react-router-dom';

const SideBar = ({ handleContentChange }) => (
  // <aside id="sidebar">
    <ul>
      <li onClick={() => handleContentChange('what-is')}>
        What is Strategic Machines?
      </li>
      <li onClick={() => handleContentChange('why-contribute')} >
        Why contribute?
      </li>
      <li onClick={() => handleContentChange('how-to')} >
        How do I contribute?
      </li>
    </ul>
    /* <section id="what-is-sm">
      <h4 onClick={() => handleChange('what-is')} className="heading">
        {console.log('what-is')}
          What is Strategic Machines?
      </h4>
    </section>
    <section id="why-sm">
      <h4 onClick={() => handleChange('why-contribute')} className="heading">
      {console.log('why-contribute')}
        Why contribute?
      </h4>
    </section>
    <section id="how-to">
      <h4 onClick={() => handleChange('how-to')} className="heading">
      {console.log('how-to')}
        How do I contribute?
      </h4>
    </section> */
  // </aside>
);

export default SideBar;