import React, { Component } from 'react';
import MarkdownRenderer from 'react-markdown-renderer';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mdPath: this.props.mdPath,
      content: ''
    };
  }

  componentWillMount() {
    let file = this.props.mdPath;
    console.log(`about to fetch content... will pass ${file}`);
    fetch(file)
      .then(response => response.text())
      .then(content => {
        this.setState({ content })
      })
    }

  render() {
    return(
      <div>
        {console.log(this.props.mdPath, this.state.content)}
       <MarkdownRenderer markdown={this.state.content}/>
      </div>
    )
  }
}

