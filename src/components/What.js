import React from 'react';
import MarkdownRenderer from 'react-markdown-renderer';
import mdPath from './content.md';

export default class What extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: ''}
  }

  componentWillMount() {
    fetch(mdPath)
      .then(response => response.text())
      .then(content => {
        this.setState({ content })
      })
  }

  render() {
    return(
      <div>
        {/* {console.log(this.state.content)} */}
       <MarkdownRenderer markdown={this.state.content}/>
      </div>
    )
  }
}
