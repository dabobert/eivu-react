import React from 'react';
import logo from './logo.svg';
import CloudFile from './CloudFile'
import TreeNode from './TreeNode'
import './App.css';
import sampleData from './SampleData';

function App() {
  const treeNodeComponents = sampleData.root.data.map( node => <TreeNode key={node.vue_id} node={node} />)

  return (
    <ul className="App">
      { treeNodeComponents }
    </ul>
  );
}

export default App;
