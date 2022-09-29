import './App.scss';
import GlobalStatusBar from './GlobalStatusBar/GlobalStatusBar';
import EquipmentContainer from './EquipmentContainer/EquipmentContainer';
import SidebarTree from './Sidebar/SidebarTree';
import { useState } from 'react';
import { DataContext } from '../DataContext';
import { mainData } from '../services/data';

function App() {
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
    <>
      <DataContext.Provider value={dataContext}>
        <GlobalStatusBar />
        <main>
          <nav className="main-menu">
            <SidebarTree />
          </nav>
          <EquipmentContainer>Equipment</EquipmentContainer>
        </main>
      </DataContext.Provider>
    </>
  );
}

export default App;
