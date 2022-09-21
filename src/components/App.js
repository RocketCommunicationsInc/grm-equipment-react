import './App.scss';
import GlobalStatusBar from './GlobalStatusBar/GlobalStatusBar';
import EquipmentContainer from './EquipmentContainer/EquipmentContainer';
import SidebarTree from './Sidebar/SidebarTree';
import { getTaxonomy } from '../services/equipment';

let sidebarObjects = getTaxonomy();

function App() {
  return (
    <>
      <GlobalStatusBar />
      <main>
        <nav className="main-menu">
          <SidebarTree sidebarObjects={sidebarObjects} />
        </nav>
        <EquipmentContainer>Equipment</EquipmentContainer>
      </main>
    </>
  );
}

export default App;
