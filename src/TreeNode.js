import React, {useState, useEffect} from 'react';
import CloudFile from './CloudFile';
import API from './API'

function TreeNode(props) {
  const node = props.node;
  const { name, entry_type } = node
  const [ childrenLoaded, setChildrenLoaded ] = useState(false);
  const [ childrenVisible, setChildrenVisible ] = useState(false);
  const [ childComponents, setChildComponents ] = useState(<li>Loading...</li>);


  // async handleGroupingOnClick() {
  //   const treeRoot = await API.get('folders');
  //   if (this.state.childrenLoaded === false) {
  //     const childData = await API.get(`folders/${node.id}`);
  //     const childComponents = childData.data.data.children.map(node => <TreeNode key={node.vue_id} node={node} />);
  //     this.setState((prevState, props) => {
  //       return {
  //         childrenVisible: !prevState.childrenVisible,
  //         childComponents: childComponents
  //       }
  //     })
  //   } 
  //   else {
  //     this.setState((prevState, props) => {
  //       return {
  //         childrenVisible: !prevState.childrenVisible
  //       }
  //     })
  //   }
  // }

  function handleMouseOver() {
    // console.log(node)
  }

  function handleGroupingOnClick() {
    console.log(node)
  }

  function styles() {
    if (childrenVisible) {
      return({
        display: 'block'
      })
    } else {
      return({
        display: 'none'
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

  return(
    <li onMouseOver={handleMouseOver}>
      { node.entry_type === 'grouping' && <div onClick={handleGroupingOnClick}>{node.name}</div> }
      { node.entry_type === 'file' && <CloudFile node={node} /> }
      <ul style={ styles() }> { node.entry_type === 'grouping' && childComponents }</ul>
    </li>
  )

}

export default TreeNode;