// @flow
import type { NavigationAction, NavigationState } from 'react-navigation';

import Router from '../../navigation/router';

export default (state: NavigationState, action: NavigationAction) =>
  Router.router.getStateForAction(action, state);
