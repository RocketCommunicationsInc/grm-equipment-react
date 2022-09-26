import './App.scss';
import GlobalStatusBar from './GlobalStatusBar/GlobalStatusBar';
import EquipmentContainer from './EquipmentContainer/EquipmentContainer';
import SidebarTree from './Sidebar/SidebarTree';
import { createDataObject, getCategoryAlerts, mainData } from '../services/data';
import { useEffect, useState } from 'react';
function App() {
  // const [data, setData] = useState(null);
  const [data, setData] = useState(mainData);

  // const data = createDataObject();

  useEffect(() => {
    setData(data);
  }, [data]);

  setInterval(() => {
    console.log(getCategoryAlerts(data[0]).length);
  }, 5000);

  // console.log(data);

  return (
    <>
      <p>{data ? getCategoryAlerts(data[0]).length : 'nothing'}</p>
      <GlobalStatusBar data={data} />
      <main>
        <nav className="main-menu">
          <SidebarTree data={mainData} />
        </nav>
        <EquipmentContainer data={mainData}>Equipment</EquipmentContainer>
      </main>
    </>
  );
}

export default App;
