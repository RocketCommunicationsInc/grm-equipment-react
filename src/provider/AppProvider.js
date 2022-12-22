import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

import { appReducer } from './appReducer';
import { initialState } from './appInitialState';
import { DataService } from '../services/Data';

const AppContext = createContext({});

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const dataService = useMemo(() => new DataService(), []);

  useEffect(() => {
    dispatch({ type: 'SET_APP_DATA', payload: dataService.data });

    dataService.onChange((data) => {
      dispatch({ type: 'SET_APP_DATA', payload: data });
    });
  }, [dataService]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
