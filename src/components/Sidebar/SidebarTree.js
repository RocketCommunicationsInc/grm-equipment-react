import {
  RuxTree,
  RuxTreeNode,
  RuxStatus
} from '@astrouxds/react';

import './Sidebar.css';


const SidebarTree = () => {
    
  return (
    <>
    <RuxTree>
      <RuxTreeNode>
        Comms
        <RuxTreeNode slot="node">
          Component A
          <RuxTreeNode slot="node">
            <RuxStatus status="critical" />Equipment 1247</RuxTreeNode>
          <RuxTreeNode slot="node">
            <RuxStatus status="serious" />Equipment 2375</RuxTreeNode>
          <RuxTreeNode slot="node">
            <RuxStatus status="critical" />Equipment 3267</RuxTreeNode>
          <RuxTreeNode slot="node">
            <RuxStatus status="serious" />Equipment 6757</RuxTreeNode>
        </RuxTreeNode>

        <RuxTreeNode slot="node">
          Component B
          <RuxTreeNode slot="node"><RuxStatus status="serious" />Equipment 1543</RuxTreeNode>
          <RuxTreeNode slot="node"><RuxStatus status="critical" />Equipment 2126</RuxTreeNode>
          <RuxTreeNode slot="node"><RuxStatus status="critical" />Equipment 3653</RuxTreeNode>
          <RuxTreeNode slot="node"><RuxStatus status="serious" />Equipment 7342</RuxTreeNode>
        </RuxTreeNode>
        <RuxTreeNode slot="node">
          Component C
          <RuxTreeNode slot="node"><RuxStatus status="serious" />Equipment 1364</RuxTreeNode>
          <RuxTreeNode slot="node"><RuxStatus status="serious" />Equipment 2734</RuxTreeNode>
          <RuxTreeNode slot="node"><RuxStatus status="serious" />Equipment 4782</RuxTreeNode>
          <RuxTreeNode slot="node"><RuxStatus status="critical" />Equipment 9433</RuxTreeNode>
        </RuxTreeNode>
        <RuxTreeNode slot="node">
          Component D
          <RuxTreeNode slot="node"><RuxStatus status="critical" />Equipment 2364</RuxTreeNode>
          <RuxTreeNode slot="node"><RuxStatus status="critical" />Equipment 3734</RuxTreeNode>
          <RuxTreeNode slot="node"><RuxStatus status="serious" />Equipment 5782</RuxTreeNode>
          <RuxTreeNode slot="node"><RuxStatus status="critical" />Equipment 9623</RuxTreeNode>
        </RuxTreeNode>
    </RuxTreeNode>

    <RuxTreeNode>
      Digital
      <RuxTreeNode slot="node">Component A
        <RuxTreeNode slot="node"><RuxStatus status="serious" />Equipment 247</RuxTreeNode>
        <RuxTreeNode slot="node"><RuxStatus status="critical" />Equipment 345</RuxTreeNode>
        <RuxTreeNode slot="node"><RuxStatus status="critical" />Equipment 267</RuxTreeNode>
        <RuxTreeNode slot="node"><RuxStatus status="serious" />Equipment 757</RuxTreeNode>

      </RuxTreeNode>

      <RuxTreeNode slot="node">Component B
        <RuxTreeNode slot="node"><RuxStatus status="critical" />Equipment 543</RuxTreeNode>
        <RuxTreeNode slot="node"><RuxStatus status="serious" />Equipment 345</RuxTreeNode>
        <RuxTreeNode slot="node"><RuxStatus status="critical" />Equipment 653</RuxTreeNode>
        <RuxTreeNode slot="node"><RuxStatus status="serious" />Equipment 342</RuxTreeNode>

      </RuxTreeNode>

      <RuxTreeNode slot="node">Component C
        <RuxTreeNode slot="node"><RuxStatus status="critical" />Equipment 364</RuxTreeNode>
        <RuxTreeNode slot="node"><RuxStatus status="critical" />Equipment 734</RuxTreeNode>
        <RuxTreeNode slot="node"><RuxStatus status="serious" />Equipment 782</RuxTreeNode>
        <RuxTreeNode slot="node"><RuxStatus status="serious" />Equipment 433</RuxTreeNode>

      </RuxTreeNode>
    </RuxTreeNode>

    <RuxTreeNode>
      Facilities
      <RuxTreeNode slot="node">Component A
        <RuxTreeNode slot="node"><RuxStatus status="serious" />Equipment 12247</RuxTreeNode>
        <RuxTreeNode slot="node"><RuxStatus status="critical" />Equipment 21345</RuxTreeNode>
        <RuxTreeNode slot="node"><RuxStatus status="serious" />Equipment 32267</RuxTreeNode>
        <RuxTreeNode slot="node"><RuxStatus status="critical" />Equipment 63757</RuxTreeNode>

      </RuxTreeNode>

      <RuxTreeNode slot="node">Component B
        <RuxTreeNode slot="node"><RuxStatus status="serious" />Equipment 11543</RuxTreeNode>
        <RuxTreeNode slot="node"><RuxStatus status="serious" />Equipment 27345</RuxTreeNode>
        <RuxTreeNode slot="node"><RuxStatus status="critical" />Equipment 35653</RuxTreeNode>
        <RuxTreeNode slot="node"><RuxStatus status="serious" />Equipment 76342</RuxTreeNode>

      </RuxTreeNode>

      <RuxTreeNode slot="node">Component C
        <RuxTreeNode slot="node"><RuxStatus status="critical" />Equipment 10364</RuxTreeNode>
        <RuxTreeNode slot="node"><RuxStatus status="serious" />Equipment 23734</RuxTreeNode>
        <RuxTreeNode slot="node"><RuxStatus status="serious" />Equipment 46782</RuxTreeNode>
        <RuxTreeNode slot="node"><RuxStatus status="critical" />Equipment 91433</RuxTreeNode>

      </RuxTreeNode>
    </RuxTreeNode>

    
    <RuxTreeNode>
      RF
      <RuxTreeNode slot="node">Black FEP
        <RuxTreeNode slot="node"><RuxStatus status="critical" />Equipment 1247</RuxTreeNode>
        <RuxTreeNode slot="node"><RuxStatus status="critical" />Equipment 2461</RuxTreeNode>
        <RuxTreeNode slot="node"><RuxStatus status="serious" />Equipment 3267</RuxTreeNode>
        <RuxTreeNode slot="node"><RuxStatus status="critical" />Equipment 6757</RuxTreeNode>

      </RuxTreeNode>

      <RuxTreeNode slot="node">Red FEP
        <RuxTreeNode slot="node"><RuxStatus status="serious" />Equipment 1543</RuxTreeNode>
        <RuxTreeNode slot="node"><RuxStatus status="serious" />Equipment 3164</RuxTreeNode>
        <RuxTreeNode slot="node"><RuxStatus status="critical" />Equipment 3653</RuxTreeNode>
        <RuxTreeNode slot="node"><RuxStatus status="serious" />Equipment 7342</RuxTreeNode>

      </RuxTreeNode>
    </RuxTreeNode>
</RuxTree>

    </>
  );
};

export default SidebarTree;