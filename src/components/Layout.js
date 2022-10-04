import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css';
import './Layout.scss';
import { DataContext } from '../DataContext';
import { mainData } from '../services/data';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [dataContext, setDataContext] = useState({
    data: mainData,
    notifiyUpdate: customNotifiyUpdate,
  });

  function customNotifiyUpdate() {
    setDataContext((oldContext) => ({
      data: oldContext.data,
      notifiyUpdate: oldContext.notifiyUpdate,
    }));
  }

  mainData.notifiyUpdate = customNotifiyUpdate;

  return (
    <DataContext.Provider value={dataContext}>{children}</DataContext.Provider>
  );
};

export default Layout;
