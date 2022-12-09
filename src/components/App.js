import './App.scss';
import GlobalStatusBar from './GlobalStatusBar/GlobalStatusBar';
import EquipmentContainer from './EquipmentContainer/EquipmentContainer';
import SidebarTree from './Sidebar/SidebarTree';
import ScheduleJob from './EquipmentMaintenance/ScheduleJob.js';
import JobDetails from './EquipmentMaintenance/JobDetails.js';
import { useState, useContext, useEffect } from 'react';
import { DataContext } from '../DataContext';

function App() {
  let [currentView, setCurrentView] = useState('main');
  let [currentJob, setCurrentJob] = useState({});
  const dataService = useContext(DataContext);
  let [data, setData] = useState(dataService.data);
  let [currentEq, setCurrentEq] = useState(null);
  let [openEqs, setOpenEqs] = useState([]);

  const selectEquip = (eq) => {
    if (eq && !hasTab(eq) && openEqs.length >= 5) {
      alert(
        'This demo constrains the number of tabs to 5. This is not a recommended UX pattern.'
      );
      return;
    }
    setCurrentEq(eq);
  };

  function hasTab(eq) {
    return openEqs.includes(eq);
  }

  function removeTab(eq) {
    if (hasTab(eq)) {
      openEqs.splice(openEqs.indexOf(eq), 1);
      setOpenEqs([...openEqs]);
    }
    selectEquip(null);
  }

  useEffect(() => {
    function onDataChange(newData) {
      setData({ ...newData });
    }

    dataService.onChange(onDataChange);

    function addTab(eq) {
      setOpenEqs([...openEqs, eq]);
    }

    if (currentEq && !hasTab(currentEq)) {
      addTab(currentEq);
    }

    return () => {
      dataService.removeOnChange(onDataChange);
    };
  }, [dataService, currentEq, openEqs]);

  switch (currentView) {
    case 'scheduleJob':
      return (
        <>
          <GlobalStatusBar data={data} />
          <ScheduleJob cancelEdit={() => setCurrentView('main')} />
        </>
      );
    case 'viewJobDetails':
      return (
        <>
          <GlobalStatusBar data={data} />
          <JobDetails
            currentJob={currentJob}
            cancelEdit={() => setCurrentView('main')}
            events={currentEq.data.events}
          />
        </>
      );
    default:
      return (
        <>
          <GlobalStatusBar data={data} />
          <main key={currentView}>
            <nav className="main-menu">
              <SidebarTree selectEquip={selectEquip} />
            </nav>

            <EquipmentContainer
              changeView={(view) => setCurrentView(view)}
              setCurrentJob={(job) => setCurrentJob(job)}
              data={data}
              currentEq={currentEq}
              selectEquip={selectEquip}
              openEqs={openEqs}
              removeTab={removeTab}
            />
          </main>
        </>
      );
  }
}

export default App;
