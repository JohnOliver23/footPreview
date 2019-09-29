import React, {Component} from 'react'
import { makeStyles,withStyles } from '@material-ui/core/styles';
import axios from 'axios'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const styles = {
  root: {
    width: '100%',
  }
}

class Time extends Component {
  constructor(props){
    super(props)

    this.axios = axios.create({
      baseURL: 'https://api.football-data.org/v2'
    });

    this.axios.defaults.headers.common['X-Auth-Token'] = '99a79e8210c54db280d999538bca5aa3';
    this.axios.defaults.headers['X-Auth-Token'] = '99a79e8210c54db280d999538bca5aa3';


    this.state = {
      jogos : [],
      nome: 'oi',
      match : this.props.match.params.id
    }
  }

  componentDidMount() {

    this.axios.get(`/teams/${this.state.match}/matches`)
      .then((res) => {
        this.setState({jogos: res.data.matches})
        console.log(this.state.jogos)
      })
      .catch(console.log)
  }

  render() {
    let classes = styles;
    return (
    <Container fixed>{
      this.state.jogos.map((jogo, index)=>
        <React.Fragment key={index}>
            <Typography variant="h5" component="h5">
              {jogo.homeTeam.name} {jogo.score.fullTime.homeTeam}  x {jogo.score.fullTime.awayTeam}  {jogo.awayTeam.name}
            </Typography>
        </React.Fragment>
            )}
    </Container>
      
       
    
      
    )
  }
  
}

export default withStyles(styles)(Time);
