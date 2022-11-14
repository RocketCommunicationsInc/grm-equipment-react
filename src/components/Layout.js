import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css';
import './Layout.scss';
import { DataContext } from '../DataContext';
import { DataService } from '../services/Data';
import { useState } from 'react';

const Layout = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [dataService, setDataContext] = useState(new DataService());

  return (
    <DataContext.Provider value={dataService}>{children}</DataContext.Provider>
  );
};

export default Layout;
