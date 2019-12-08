import React, { createContext, useState} from 'react';
import logo from './logo.svg';
import TreeRoot from './TreeRoot';
import './App.css';
import API from './API';


const QueueContext = createContext()

function App() {
  const [ queue, setQueue ] = useState(['ballrom'])
  
  return (
    <QueueContext.Provider value={[queue, setQueue]}>
      <ul>
        <TreeRoot />
      </ul>
    </QueueContext.Provider>
  );
}

export default App;
export { QueueContext };
