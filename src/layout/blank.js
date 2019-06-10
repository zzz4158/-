import React,{ Component } from "react";
import { Layout,Button }from 'antd'


export default class basicLayout extends Component{
  render() {
    return (
      <div> {this.props.children}</div>
    )


  }
}