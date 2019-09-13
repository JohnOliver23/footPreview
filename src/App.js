import React, { Component } from 'react';
import Jogos from './components/jogos'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);

    this.axios = axios.create({
      baseURL: 'https://api.football-data.org/v2'
    });

    this.axios.defaults.headers.common['X-Auth-Token'] = '99a79e8210c54db280d999538bca5aa3';
    this.axios.defaults.headers['X-Auth-Token'] = '99a79e8210c54db280d999538bca5aa3';

    this.state = {
      jogos: []
    }

  }
  componentDidMount() {

    this.axios.get('/competitions/2013/matches')
      .then((res) => {
        console.log(res)
        this.setState({ jogos: res.data.matches })
      })
      .catch(console.log)
  }

  render() {
    return (
      <Jogos jogos={this.state.jogos} />
    )
  }
}

export default App;
