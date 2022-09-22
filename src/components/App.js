import './App.scss';
import GlobalStatusBar from './GlobalStatusBar/GlobalStatusBar';
import EquipmentContainer from './EquipmentContainer/EquipmentContainer';
import SidebarTree from './Sidebar/SidebarTree';
import { createDataObject, mainData } from '../services/data';
import { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState(null);

  // const data = createDataObject();

  // useEffect(() => {
  //   if (!data) {
  //     setData(createDataObject());
  //   } else {
  //     setData;
  //   }
  // }, [data]);

  return (
    <>
      <p>{data ? data.foo : 'nothing'}</p>
      <GlobalStatusBar />
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
