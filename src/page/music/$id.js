import React, { Component } from 'react';

export default class componentName extends Component {
  componentWillMount() {
    window.localStorage.navSelect = 4;
  }
  render() {
    return (
      <div> textInComponent </div>
    );
  }
}
