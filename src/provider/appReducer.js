import { calcCategoryStatus, getCategoryAlerts } from '../services/Data';
import { initialState } from './appInitialState';

export const appReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case 'SET_APP_DATA': {
      return {
        ...state,
        statusIcons: initialState.statusIcons.map((icon, i) => ({
          ...icon,
          status: calcCategoryStatus(payload.categories[i]),
          notifications: getCategoryAlerts(payload.categories[i]).length,
        })),
      };
    }

    default:
      return state;
  }
};
