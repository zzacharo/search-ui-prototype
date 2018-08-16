import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    padding: '20px',
  },
};

class ResultCard extends Component {
  render() {
    return (
      <div className="ResultCard">
        <Paper style={styles.root} elevation={1}>
          <Typography variant="headline" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default ResultCard;
