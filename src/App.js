import React, { createContext, useState, useEffect} from 'react';
import TreeRoot from './TreeRoot';
import './App.scss';
import Player from './Player';
import Sidebar from './Sidebar';
import NowPlaying from './NowPlaying';
import Header from './Header';
import PropTypes from "prop-types";
import Queue from './Queue'

const QueueContext = createContext();
const ActiveTabContext = createContext();

function App(props) {

  const [ queue, setQueue ] = useState(props.queue);
  const [ queueIndex, setQueueIndex ] = useState(0)
  const [ activeTab, setActiveTab ] = useState(props.leftNavItems[1]);
  return (
    <QueueContext.Provider value={[queue, setQueue, queueIndex, setQueueIndex]}>
      <Header />
      <div id="wrapper">
        <ActiveTabContext.Provider value={[activeTab, setActiveTab]}>    
          <div id="sidebar-wrapper" className="col-md-1">
            <Sidebar itemAnchorClassName={'list-group-item'} items={props.leftNavItems} />
          </div>
        </ActiveTabContext.Provider>
        <div id="main-wrapper" className="col-md-11 pull-right">
          <div id="main">
            <h1>{activeTab}</h1>

            { activeTab === 'Now Playing' && <NowPlaying /> }
            { activeTab === 'Library' && <TreeRoot /> }
            { activeTab === 'Queue' && <Queue />}
            <div id="plyr_wrapper" className="audio"> 
              <div id="plyr_buffer"></div>
              <div id="plyr_container">
                <Player />
              </div>
            </div>
          </div>
        </div>
      </div>
    </QueueContext.Provider>
  );
}


App.defaultProps = {
  leftNavItems: ['Now Playing', 'Library', 'Queue'],
  queue: [
    {
      url: 'http://eivu.s3.amazonaws.com/welcome.mp3',
      type: 'audio/mp3',
      asset: 'welcome.mp3'
      // size: 720,
    }
  ]
}

export default App;
export { QueueContext, ActiveTabContext };
