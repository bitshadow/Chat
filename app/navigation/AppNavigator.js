// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import { NavigationActions, addNavigationHelpers } from 'react-navigation';
import { addListener } from '../utils/redux';

import Router from './router.js';

type ReduxNavigationProps = {
  dispatch: Function,
  nav: any,
};

/**
 * Component to listen hardware back events for android.
 */
class ReduxNavigation extends React.Component<ReduxNavigationProps, *> {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    const activeRoute = nav.routes[nav.index];
    if (activeRoute.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, nav } = this.props;
    const navigation = addNavigationHelpers({
      dispatch,
      state: nav,
      addListener,
    });

    return <Router navigation={navigation} />;
  }
}

const AppWithNavState = ({ dispatch, nav }) => {
  return <ReduxNavigation nav={nav} dispatch={dispatch}/>;
};

AppWithNavState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavState);
