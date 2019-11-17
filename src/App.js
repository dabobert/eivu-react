import React from 'react';
import logo from './logo.svg';
import CloudFile from './CloudFile'
import TreeNode from './TreeNode'
import './App.css';
import sampleData from './SampleData'

function App() {
  return (
    <ul className="App">
      <TreeNode traits={{name:"Björk", entry_type:"grouping", component_id:"folder_324"}} />
    </ul>
  );
}

export default App;
