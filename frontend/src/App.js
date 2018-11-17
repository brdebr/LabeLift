import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import './App.css';
import AppContainer from './containers/AppContainer';
import theme from './theme';

class App extends Component {
  
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <AppContainer/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
