import React from 'react';
import CloudFile from './CloudFile';
import API from './API'

class TreeNode extends React.Component {
  constructor(props) {
    super();
    this.state = {
      childrenLoaded: false,
      childrenVisible: false,
      childComponents: <li>Loading...</li>
    };
    this.handleGroupingOnClick = this.handleGroupingOnClick.bind(this);
  }

  async handleGroupingOnClick() {
    const treeRoot = await API.get('folders');
    if (this.state.childrenLoaded === false) {
      const childData = await API.get(`folders/${this.props.node.id}`);
      console.log(JSON.stringify(childData.data.data.children))
      childData.data.data.children.map(node => <TreeNode key={node.vue_id} node={node} />);
      // this.setState((prevState, props) => {
      this.setState(prevState => {
        return {
        ...prevState,
        childComponents: <li>foo</li>
      }
      })
    }
  }



//<template>
//  <li v-bind:id="node.id" v-bind:class="node.entry_type">
//    <span v-if="node.entry_type == 'grouping'">
//      <div v-bind:class="node.klass" v-bind:type="node.entry_type" @click="toggleChildren">{{ node.name }}</div>
//    </span>
//    <span v-else-if="node.entry_type == 'file'">
//      <CloudFile v-bind:file="node"></CloudFile>
//    </span>
//    <span v-else>
//      <div>{{ node.name }}</div>
//    </span>
//   
//    <ul v-if="node.children && showChildren">
//      <TreeNode v-for="child in children" v-bind:node="child" :key="child.vue_id">
//      </TreeNode>
//    </ul>
//  </li>
// </template>

  render() {
    return(
      <li onMouseOver={this.handleMouseOver}>
        { this.props.node.entry_type === 'grouping' && <div onClick={this.handleGroupingOnClick}>{this.props.node.name}</div> }
        { this.props.node.entry_type === 'file' && <ul><CloudFile node={this.props.node} /></ul> }
        <ul > { this.state.childComponents }</ul>
      </li>
    )
  }
}

export default TreeNode;