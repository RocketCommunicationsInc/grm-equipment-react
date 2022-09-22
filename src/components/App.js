import './App.scss';
import GlobalStatusBar from './GlobalStatusBar/GlobalStatusBar';
import EquipmentContainer from './EquipmentContainer/EquipmentContainer';
import SidebarTree from './Sidebar/SidebarTree';
import { getTaxonomy } from '../services/equipment';

let data = getTaxonomy();

function App() {
  return (
    <>
      <GlobalStatusBar />
      <main>
        <nav className="main-menu">
          <SidebarTree sidebarObjects={data} />
        </nav>
        <EquipmentContainer data={data}>Equipment</EquipmentContainer>
      </main>
    </>
  );
}

export default App;
