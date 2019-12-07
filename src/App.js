import React from 'react';
import logo from './logo.svg';
import CloudFile from './CloudFile';
import TreeNode from './TreeNode';
import TreeRoot from './TreeRoot';
import './App.css';
import API from './API';

function App() {
  const root = {
    entry_type: 'grouping',
    name: 'Welcome'
  }
  return (
    <ul>
      <TreeNode isRoot={true} node={root} />
    </ul>
  );
}

export default App;
