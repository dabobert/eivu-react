import React from 'react';
import logo from './logo.svg';
import CloudFile from './CloudFile'
import TreeNode from './TreeNode'
import './App.css';

const sampleData = { "id": 324, "name": "Björk", "created_at": "2019-01-17T06:35:32.399Z", "updated_at": "2019-01-17T06:35:32.399Z", "ancestry": null, "bucket_id": 2, "peepy": false, "nsfw": false, "cloud_files_count": 0, "klass": "folder", "vue_id": "folder_324", "entry_type": "grouping", "children": [ { "id": 325, "name": "Biophilia", "created_at": "2019-01-17T06:35:32.466Z", "updated_at": "2019-01-17T06:35:32.466Z", "ancestry": "324", "bucket_id": 2, "peepy": false, "nsfw": false, "cloud_files_count": 0, "klass": "folder", "vue_id": "folder_325", "entry_type": "grouping", "children": [] } ]}

function App() {
  return (
    <ul className="App">
      <TreeNode traits={{name:"Björk", entry_type:"grouping", component_id:"folder_324"}} />
    </ul>
  );
}

export default App;
