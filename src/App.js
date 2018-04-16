import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles/';
import WeatherCard from './weatherCard';

const theme = createMuiTheme()

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <WeatherCard />
      </MuiThemeProvider>
    );
  }
}

export default App;
