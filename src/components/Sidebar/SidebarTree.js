import { RuxTree, RuxTreeNode, RuxStatus } from '@astrouxds/react';
import { DataContext } from '../../DataContext';
import { useContext } from 'react';
import './Sidebar.scss';

const SidebarTree = ({ selectEquip }) => {
  const sidebarObjects = useContext(DataContext).data.categories;

  return (
    <div className="sidebar">
      <RuxTree>
        {sidebarObjects &&
          sidebarObjects.map(function (a) {
            return (
              <RuxTreeNode key={a.label}>
                {a.status && <RuxStatus status={a.status} />}
                {a.label}

                {a.components &&
                  a.components.map(function (b) {
                    return (
                      <RuxTreeNode key={b.label} slot="node">
                        {b.status && (
                          <RuxStatus status={b.status} slot="prefix" />
                        )}
                        {b.label}
                        {b.equipment &&
                          b.equipment.map(function (c) {
                            return (
                              <RuxTreeNode
                                key={c.data.id}
                                slot="node"
                                onRuxtreenodeselected={() => selectEquip(c)}
                              >
                                <RuxStatus
                                  status={c.data.status}
                                  slot="prefix"
                                />
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
    </div>
  );
};

export default SidebarTree;
