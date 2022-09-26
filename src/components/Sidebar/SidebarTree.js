import { RuxTree, RuxTreeNode, RuxStatus } from '@astrouxds/react';

import './Sidebar.scss';

const SidebarTree = ({ data }) => {
  return (
    <>
      <RuxTree>
        {data &&
          data.map(function (a) {
            return (
              <RuxTreeNode key={a.id}>
                {a.status && <RuxStatus status={a.status} />}
                {a.label}
                {a.children &&
                  a.children.map(function (b) {
                    return (
                      <RuxTreeNode key={b.id} slot="node">
                        {b.status && <RuxStatus status={b.status} />} {b.label}
                        {b.children &&
                          b.children.map(function (c) {
                            return (
                              <RuxTreeNode key={c.id} slot="node">
                                {c.status && <RuxStatus status={c.status} />}
                                {c.label}
                                {c.children &&
                                  c.children.map(function (d) {
                                    return (
                                      <RuxTreeNode key={d.id} slot="node">
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
