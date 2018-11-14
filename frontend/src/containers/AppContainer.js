import React from 'react';
import Sidebar from '../layout/Sidebar';

class AppContainer extends React.Component {
  state = {
    mini: true,
    logged: false
  };

  handleDrawerToggle = () => {
    this.setState({mini: !this.state.mini});
  }

  render() {
    return (
        <Sidebar mini={this.state.mini} toggleMini={this.handleDrawerToggle}/>
    );
  }
}

export default AppContainer;