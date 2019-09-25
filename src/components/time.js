import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const estilos = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }

}));

function Time(props) {
  const classes = estilos();
  const { match } = props;

  return (
    <div className={classes.root}>
      {match.params.id}
    </div>
  )
}

export default Time;
