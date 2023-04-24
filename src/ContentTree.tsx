import React from 'react';

interface TreeNode {
  id: number;
  title: string;
  children?: TreeNode[];
}

interface ContentTreeProps {
  nodes: TreeNode[];
}

interface ContentTreeNodeProps {
  node: TreeNode;
}

const ContentTreeNode: React.FC<ContentTreeNodeProps> = ({ node }) => {
  return (
    <li>
      {node.title}
      {node.children && (
        <ul>
          {node.children.map((childNode) => (
            <ContentTreeNode key={childNode.id} node={childNode} />
          ))}
        </ul>
      )}
    </li>
  );
};

const ContentTree: React.FC<ContentTreeProps> = ({ nodes }) => {
  return (
    <ul>
      {nodes.map((node) => (
        <ContentTreeNode key={node.id} node={node} />
      ))}
    </ul>
  );
};

export default ContentTree;
