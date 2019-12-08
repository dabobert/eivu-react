import React, { createContext, useState} from 'react';
import logo from './logo.svg';
import TreeRoot from './TreeRoot';
import './App.scss';
import API from './API';


const QueueContext = createContext()

function App() {
  const [ queue, setQueue ] = useState(['ballrom'])
  
  return (
    <QueueContext.Provider value={[queue, setQueue]}>
      <ul>
        <TreeRoot />
      </ul>
      <div id="plyr_wrapper" className="audio"> 
        <div id="plyr_buffer"></div>
        <div id="plyr_container"></div>
      </div>
    </QueueContext.Provider>
  );
}

export default App;
export { QueueContext };
