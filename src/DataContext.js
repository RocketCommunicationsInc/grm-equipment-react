import { createContext } from 'react';
import { mainData } from './services/data';

export const DataContext = createContext({
  data: mainData,
  notifiyUpdate: function () {
    console.log('original notifiyUpdate');
  },
});
