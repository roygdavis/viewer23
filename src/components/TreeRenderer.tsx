import React from 'react';
import { RawNodeDatum, Tree as Tree3d } from 'react-d3-tree';
import { Tree } from '../types/Tree';

interface TreeNode {
    name: string;
    children?: TreeNode[];
}

interface Props {
    data: Tree;
}

const processTreeNode = (nodes: any[], parentId: string | null = null): RawNodeDatum[] => {
    console.log(nodes);
    return nodes
        .filter(node => parentId === null ? node.parent_ids.length === 0 : node.parent_ids.includes(parentId))
        .map(node => ({ name: node.first_name ? `${node.first_name} ${node.last_name}` : node.id, children: processTreeNode(nodes, node.id) }));
};

const TreeRenderer: React.FC<Props> = ({ data }) => {
    const treeNodes = processTreeNode(data.nodes);

    console.log(treeNodes);

    return (
        <div className='row vh-100'>
            <div className='col'>
                <Tree3d data={treeNodes} orientation="vertical" />
            </div>
        </div>
    );
};

export default TreeRenderer;
