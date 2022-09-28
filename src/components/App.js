import './App.scss';
import { RuxButton } from '@astrouxds/react';
import GlobalStatusBar from './GlobalStatusBar/GlobalStatusBar';
import EquipmentContainer from './EquipmentContainer/EquipmentContainer';
import SidebarTree from './Sidebar/SidebarTree';
import { createDataObject, getCategoryAlerts, mainData } from '../services/data';
import { useEffect, useState, createContext } from 'react';
import { DataContext } from '../DataContext';

function App() {
  // const [data, setData] = useState(mainData);
  let [num, setNum] = useState(0);

  // const [timestamp, setTimestamp] = useState(Date.now());
  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setTimestamp(Date.now());
  //   }, 1000);
  //   setData(data); // is this needed?
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [timestamp, data]);

  function changeNum() {
    setNum((num += 1));
  }

  function setNumState() {
    console.log('setNumState');
  }

  const [dataContext, setDataContext] = useState({
    data: mainData,
    setData: customSetDataContext,
  });

  function customSetDataContext() {
    console.log('customSetDataContext', getCategoryAlerts(dataContext.data[3]).length);
    setDataContext((oldContext) => ({
      data: oldContext.data,
      setData: oldContext.setData,
    }));
  }

  return (
    <>
      <DataContext.Provider value={dataContext}>
        {/* <p>{data ? getCategoryAlerts(data.categories[3]).length : 'nothing'}</p> */}

        <RuxButton className="rux-button" onClick={changeNum}>
          Parent
        </RuxButton>
        <p>{num}</p>
        <GlobalStatusBar />
        {/* <main>
          <nav className="main-menu">
            <SidebarTree data={data.categories} />
          </nav>
          <EquipmentContainer data={data.categories}>Equipment</EquipmentContainer>
        </main> */}
      </DataContext.Provider>
    </>
  );
}

export default App;
