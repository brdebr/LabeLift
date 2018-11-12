import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../layout/sidebar';



class AppContainer extends React.Component {
  state = {
    drawer: true,
    logged: false
  };

  handleDrawerToggle = () => {
    this.setState({drawer: !this.state.drawer});
  }

  render() {
    return (
        <Sidebar></Sidebar>
    );
  }
}

AppContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default AppContainer;