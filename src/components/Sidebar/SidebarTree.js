import { RuxTree, RuxTreeNode, RuxStatus } from '@astrouxds/react';
import { DataContext } from '../../DataContext';
import { useContext } from 'react';

import './Sidebar.scss';

const SidebarTree = () => {
  const sidebarObjects = useContext(DataContext).data.categories;

  return (
    <>
      <RuxTree>
        {sidebarObjects &&
          sidebarObjects.map(function (a) {
            return (
              <RuxTreeNode key={a.label}>
                {a.status && <RuxStatus status={a.status} />}
                {a.label}

                {a.children &&
                  a.children.map(function (b) {
                    return (
                      <RuxTreeNode key={b.label} slot="node">
                        {b.status && <RuxStatus status={b.status} />} {b.label}
                        {b.children &&
                          b.children.map(function (c) {
                            return (
                              <RuxTreeNode key={c.data.id} slot="node">
                                <RuxStatus status={c.data.status} />
                                {c.data.label}
                              </RuxTreeNode>
                            );
                          })}
                      </RuxTreeNode>
                    );
                  })}
              </RuxTreeNode>
            );
          })}
      </RuxTree>
    </>
  );
};

export default SidebarTree;
