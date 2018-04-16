import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import axios from 'axios';


// const { classes } = props;
// const bull = <span className={classes.bullet}>•</span>;

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class DateCard extends Component {
  constructor () {
    super()
    this.state = {
      history: ''
    }

    this.handleRequest = this.handleRequest.bind(this)
}


handleRequest () {
  axios.get('http://api.wunderground.com/api/1898a4d5f6cc1a04/history_20170629/q/MA/Bourne.json')
    .then(function(response) {
      this.setState({history: response.data.history.date.pretty})
    }.bind(this));
}



render () {
  return (
    <div>
      <Typography className='history' color="textSecondary">
      <button className='button' onClick={this.handleRequest}>Get Weather</button>
        {this.state.history}
      < /Typography>
      </div>
    );
  }
}

// SimpleCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(DateCard);
