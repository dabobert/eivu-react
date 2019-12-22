import React, { createContext, useState, useEffect} from 'react';
import logo from './logo.svg';
import TreeNode from './TreeNode';
import './App.scss';
import API from './API';
import { useQuery } from '@apollo/react-hooks';
import GET_FOLDER_DETAILS from './apollo/queries/GET_FOLDER_DETAILS'
import Player from './Player';
import Sidebar from './Sidebar';
import Header from './Header';
import PropTypes from "prop-types";
import Launcher from './SunGod'

const QueueContext = createContext();
const ActiveTabContext = createContext();

function App(props) {

  const [ queue, setQueue ] = useState(props.queue);
  const [ activeTab, setActiveTab ] = useState(props.leftNavItems[1]);
  const [ treeNodeComponents, setTreeNodeComponents] = useState(<li>Loading....</li>);
  const { data, loading, error } = useQuery(GET_FOLDER_DETAILS);
  if (loading) return <h3>loading</h3>;
  if (error) return <p>ERROR</p>;
  if (data) {
    debugger
    console.log(data)
  }



  // async function fetchData() {
  //   const { data, loading, error } = useQuery(GET_FOLDER_DETAILS);
  //   if (loading) return <h3>loading</h3>;
  //   if (error) return <p>ERROR</p>;




  //   const treeRoot = await API.get('folders'); //https://designrevision.com/react-axios/
  //   const treeNodeComponents = treeRoot.data.data.map( node => <TreeNode key={node.vue_id} node={node} />)
  //   setTreeNodeComponents(treeNodeComponents);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, [])

  return (
    <QueueContext.Provider value={[queue, setQueue]}>
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

            { activeTab === 'Now Playing' && <h1>info</h1> }
            { activeTab === 'Library' && <ul>{ treeNodeComponents }</ul> }
            { activeTab === 'Queue' && <div><h1>info</h1>{JSON.stringify(queue) }</div>}
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
      src: 'http://eivu.s3.amazonaws.com/welcome.mp3',
      type: 'audio/mp3',
      // size: 720,
    },
    {
      src: 'http://eivutest.s3.amazonaws.com/audio/FD/DA/6E/1C/40/50/19/D7/69/1F/94/92/4D/E0/E2/12/01_-_Born_To_Die.mp3',
      type: 'audio/mp3',
      // size: 1080,
    },
  ]
}

export default App;
export { QueueContext, ActiveTabContext };
