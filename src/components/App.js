import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css';
import '../css/App.scss';
import GlobalStatusBar from './GlobalStatusBar/GlobalStatusBar';
import EquipmentContainer from './EquipmentContainer/EquipmentContainer';
import React from 'react';

function App() {
  return (
    <>
      <GlobalStatusBar />
      <main>
        <nav className="main-menu">Menu</nav>
        <EquipmentContainer>Equipment</EquipmentContainer>
      </main>
    </>
  );
}

export default App;
