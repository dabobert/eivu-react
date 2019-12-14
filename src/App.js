import React, { createContext, useState, useEffect} from 'react';
import logo from './logo.svg';
import TreeRoot from './TreeRoot';
import './App.scss';
import API from './API';
import Player from './Player';
import Sidebar from './Sidebar';
import Header from './Header';

const QueueContext = createContext()

function App() {
  const [ queue, setQueue ] = useState(
    [
      {
        src: 'http://eivu.s3.amazonaws.com/welcome.mp3',
        type: 'audio/mp3',
        // size: 720,
      },
      {
        src: 'http://eivutest.s3.amazonaws.com/audio/FD/DA/6E/1C/40/50/19/D7/69/1F/94/92/4D/E0/E2/12/01_-_Born_To_Die.mp3',
        type: 'audio/mp3',
        // size: 1080,
      },
    ])


  return (
    <QueueContext.Provider value={[queue, setQueue]}>
      <Header />





<div id="wrapper">
  <div id="sidebar-wrapper" class="col-md-1">
    <Sidebar />
  </div>
  <div id="main-wrapper" class="col-md-11 pull-right">
    <div id="main">
      <h1>Pages#welcome</h1>
      <div id="app4">


      <div>{JSON.stringify(queue) }</div>
      <ul>
        <TreeRoot />
      </ul>
      <div id="plyr_wrapper" className="audio"> 
        <div id="plyr_buffer"></div>
        <div id="plyr_container">
          <Player />
        </div>
      </div>


      </div>
    </div>
  </div>
</div>


    </QueueContext.Provider>
  );
}




export default App;
export { QueueContext };
