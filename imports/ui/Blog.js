import React, { Component } from 'react';

// Blog item
export default class Blog extends Component {
  render() {
  	console.log(this);
    return (
      <li>{this.props.blog.text}</li>
    );
  }
}