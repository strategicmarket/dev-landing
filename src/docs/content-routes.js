
////////////////////////////////////////////////////////////////////////
// Each item in the sidebar (a <Link>) points to one of these routes. //
// When the route is matched, the content of the respective .md file  //
//                      will be rendered                              //
////////////////////////////////////////////////////////////////////////

import React from 'react';
// Content is the "Master Component" that will render the content
// of any .md file whose path is passed into it.
import Content from '../components/Content';
// import paths to .md files
import WhatIs from './what-is-strategic-machines.md';
import WhyContribute from './why-contribute.md';
import HowToContribute from './how-to-contribute.md';

export default [
  {
    path: "/docs",
    exact: true,
    main: () => <Content mdfPath={WhatIs} />
  },
  {
    path: "/docs/why-contribute",
    main: () => <Content mdfPath={WhyContribute} />
  },
  {
    path: "/docs/how-to-contribute",
    main: () => <Content mdfPath={HowToContribute} />
  }
]
