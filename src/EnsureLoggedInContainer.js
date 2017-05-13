import React, { Component } from 'react';
import axios from "axios";
import Greeting from "./Greeting";
import {
	Redirect
} from 'react-router-dom';

class EnsureLoggedInContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      redirect: false
    };
  }

  componentDidMount() {
    // const { dispatch, currentURL } = this.props
    axios.get("/checkLogin").then(res => { this.setState({redirect: res})});
  }

  render() {
    
    if (this.state.redirect) {
      console.log("redirect me!")
      return;
      // return <Redirect to={{
      //   pathname: '/submitTool'
      // }}/>
    } else {
      console.log("false")
      return false;
      // hard code redirect
      // return window.location.href = 'http://localhost:3000/getMyTools';
    }
  }
}

export default EnsureLoggedInContainer;