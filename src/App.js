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
  const [ queueIndex, setQueueIndex ] = useState(0);
  const [ currentMediaType, setCurrentMediaType ] = useState(null);
  const [ activeTab, setActiveTab ] = useState(props.leftNavItems[1]);

  useEffect(() => {
    setCurrentMediaType(queue[queueIndex].contentType.split("/",1)[0]);
  },[queueIndex])

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
            <div id="plyr_wrapper" className={currentMediaType}> 
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
      contentType: 'audio/mp3',
      asset: 'welcome.mp3',
      // artists: [{
      //   name: "eivu"
      // }]
      // size: 720,
    },
    {
      url: "https://www.veed.me/wp-content/uploads/Procrastination-video.mp4",
      contentType: 'video/mp4',
      asset: 'Procrastination-video.mp4',
      name: 'Procrastination video'
      // size: 720,
    },
    // {
    //   url: "https://www.w3schools.com/html/mov_bbb.mp4",
    //   contentType: 'video/mp4',
    //   asset: 'welcome.mp4',
    //   name: 'Big Buck Bunny'
    //   // size: 720,
    // },
    // {
    //   url: "https://mazwai.com/videvo_files/video/free/2016-02/small_watermarked/severe-storm-over-mandurah_preview.webm",
    //   contentType: 'video/webm',
    //   asset: 'Procrastination-video.mp4',
    //   name: 'Severe storm over Mandurah'
    //   // size: 720,
    // },
    // {
    //   url: "https://mazwai.com/videvo_files/video/free/2016-04/small_watermarked/the_valley-graham_uheslki_preview.webm",
    //   contentType: 'video/webm',
    //   asset: 'the_valley-graham_uheslki_preview.webm',
    //   name: 'The Valley'
    //   // size: 720,
    // },
    // {
    //   url: "https://ak4.picdn.net/shutterstock/videos/20684554/preview/stock-footage-cinema-projector-screening-movie.webm",
    //   contentType: 'video/webm',
    //   asset: 'stock-footage-cinema-projector-screening-movie.webm',
    //   // name: 'Procrastination video'
    //   // size: 720,
    // },
    // {
    //   url: "https://mazwai.com/videvo_files/video/free/2014-05/small_watermarked/christoph_pantel--slow_motion_drop_preview.webm",
    //   contentType: 'video/mp4',
    //   asset: 'christoph_pantel--slow_motion_drop_preview.webm',
    //   name: 'Slow motion'
    //   // size: 720,
    // },
    // {
    //   url: "https://www.w3schools.com/html/mov_bbb.mp4",
    //   contentType: 'video/mp4',
    //   asset: 'welcome.mp4',
    //   name: 'Big Buck Bunny'
    //   // size: 720,
    // },
    // {
    //   url: "https://www.veed.me/wp-content/uploads/Procrastination-video.mp4",
    //   contentType: 'video/mp4',
    //   asset: 'Procrastination-video.mp4',
    //   name: 'Procrastination video'
    //   // size: 720,
    // },
  ]
}

export default App;
export { QueueContext, ActiveTabContext };
