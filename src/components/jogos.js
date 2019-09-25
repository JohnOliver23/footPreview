import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import { Link } from 'react-router-dom';


const estilos = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  avatar: {
    flex: 'none'

  },
  item: {
    fontWeight: '700'
  },
  item:{
    flex: '1 !important'
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
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Grid item xs={6}>
                  <MenuItem className={classes.item} to={`/time/${jogo.homeTeam.id}`} component={Link}>
                    <ListItem  >
                      <ListItemAvatar>
                        <Avatar>
                          <ListItemText classes={{ root: classes.avatar, primary: classes.item }} primary={`${jogo.codigoid}`} />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={jogo.homeTeam.name} />
                    </ListItem >
                  </MenuItem>
                </Grid>
                <Grid item xs={6}>
                <MenuItem className={classes.item} to={`/time/${jogo.awayTeam.id}`} component={Link}>
                    <ListItem  >
                      <ListItemAvatar>
                        <Avatar>
                          <ListItemText classes={{ root: classes.avatar, primary: classes.item }} primary={`${jogo.codigoid}`} />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={jogo.awayTeam.name} />
                    </ListItem >
                  </MenuItem>
                </Grid>
              </Grid>
              <Divider />
            </React.Fragment>
          ))
        }
      </List>

    </div>
  )

  /*${jogo.homeTeam.name} X ${jogo.awayTeam.name} - ${jogo.season.startDate}  `*/
}

export default Jogos;
