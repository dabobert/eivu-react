import React from 'react';
import logo from './logo.svg';
import CloudFile from './CloudFile'
import TreeNode from './TreeNode'
import './App.css';
import sampleData from './SampleData';
// import axios from 'axios';
import API from './API'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      treeNodeComponents: null
    }

  }

  async componentDidMount() {
    const treeRoot = await API.get('folders'); //https://designrevision.com/react-axios/
    const treeNodeComponents = treeRoot.data.data.map( node => <TreeNode key={node.vue_id} node={node} />)
    this.setState({
      isLoading: false,
      treeNodeComponents: treeNodeComponents
    })
  }

  render() {
    return (
      <ul className="App">
        { this.state.isLoading ? <li>Loading....</li> : this.state.treeNodeComponents }
      </ul>
    );
  }
}

export default App;
