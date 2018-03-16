import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SideBar from './SideBar';
import Content from './Content';
import What from '../docs/what-is-strategic-machines.md';
import Why from '../docs/why-contribute.md';
import How from '../docs/how-to-contribute.md';

export default class Docs extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 'what-is' };
    // bind "this" object to methods
    this.renderPage = this.renderPage.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
  }

  handleContentChange(page) {
    console.log(`handleContentChange() called`, page);
    this.setState({ currentPage: page });
  }

  renderPage() {
    let currentPage = this.state.currentPage;
    if(currentPage === 'what-is') {
      console.log(`about to render content... will pass ${What}`);
      return <Content mdPath={What}/>
    } else if (currentPage === 'why-contribute') {
      console.log(`about to render content... will pass ${Why}`);
      return <Content mdPath={Why} />
    } else {
      console.log(`about to render content... will pass ${How}`);
      return <Content mdPath={How} />
    }
  }

  render() {
    return(
    // <Router>
      <div id="documentation">
        <aside id="sidebar">
          <SideBar
            handleContentChange={this.handleContentChange}
          />
        </aside>

        <main id="content">
          {this.renderPage()}
          {/* <Switch>
            <Route exact path='/what-is' component={What} />
            <Route path='/why-contribute' component={Why} />
            <Route path='/how-to-contribute' component={How} />
          </Switch> */}
        </main>
      </div>
    // </Router>
    );
  }
};
