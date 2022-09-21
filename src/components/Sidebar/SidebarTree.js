import { RuxTree, RuxTreeNode, RuxStatus } from '@astrouxds/react';

import './Sidebar.scss';

const SidebarTree = (props) => {
  let sidebarObjects = props.sidebarObjects;

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
                              <RuxTreeNode key={c.label} slot="node">
                                {c.status && <RuxStatus status={c.status} />}
                                {c.label}
                                {c.children &&
                                  c.children.map(function (d) {
                                    return (
                                      <RuxTreeNode key={d.label} slot="node">
                                        <RuxStatus status={d.status} />
                                        {d.label}
                                      </RuxTreeNode>
                                    );
                                  })}
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
