import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';


const estilos = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  avatar: {
    flex: 'none'

  },
  item: {
    fontWeight: '700'
  }
  
}));

function Jogos(props) {
  const classes = estilos();

  return (
    <div className={classes.root}>
      <List aria-label="lista de jogos">
       {
         
         props.jogos.filter(jogo => jogo.matchday === jogo.season.currentMatchday).map((jogo, index) => (
           <React.Fragment key={index}>
             <ListItem  >
             <ListItemAvatar>
              <Avatar>
                <ListItemText classes={{root: classes.avatar, primary: classes.item}} primary={`${jogo.codigoid}`}  />
              </Avatar>
            </ListItemAvatar>
             <ListItemText primary={`${jogo.homeTeam.name} X ${jogo.awayTeam.name} - ${jogo.season.startDate}  `}/>
           </ListItem>
           <Divider/>
           </React.Fragment>
         ))
       }
      </List>

    </div>
  )


}

export default Jogos;
