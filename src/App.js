import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';


class App extends
Component {

    state = {
      loading: true,
      cat: null
    };


    async componentDidMount(){
      const url = "https://aws.random.cat/meow";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({
        loading: false,
        cat: data.file
      });

    }

  render(){
    return (
      <div className="title">
      <p>Random Cat Photos</p>
      <div>{this.state.loading || !this.state.cat ?
        <div>loading...</div> :
      <img src={this.state.cat} /> }
      </div>
      </div>
    )
  }
}

export default App;
