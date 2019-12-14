import React, { useState, useEffect } from 'react';
import TreeNode from './TreeNode';
import API from './API'

function TreeRoot() {
  const [ treeNodeComponents, setTreeNodeComponents] = useState(<li>Loading....</li>);

  useEffect( async () => {
    const treeRoot = await API.get('folders'); //https://designrevision.com/react-axios/
    const treeNodeComponents = treeRoot.data.data.map( node => <TreeNode key={node.vue_id} node={node} />)
    setTreeNodeComponents(treeNodeComponents);
  }, [])

  return (
    <ul>
      { treeNodeComponents }
    </ul>
  );
}

export default TreeRoot;