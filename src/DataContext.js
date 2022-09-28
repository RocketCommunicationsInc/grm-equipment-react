import { createContext } from 'react';
import { mainData } from './services/data';

export const DataContext = createContext({
  data: mainData,
  setData: function () {},
});
