import React, {useState, useEffect} from 'react';
import CloudFile from './CloudFile';
import API from './API'

function TreeNode(props) {
  const node = props.node;
  const { name, entry_type } = node
  const [ childrenNotLoaded, setChildrenNotLoaded ] = useState(true);
  const [ childrenVisible, setChildrenVisible ] = useState(false);
  const [ childComponents, setChildComponents ] = useState(<li>Loading...</li>);

  function toggleChildren() {
    setChildrenVisible( prevVisibility => !prevVisibility)
  }

  async function loadChildren() {
    if (childrenNotLoaded) {
      const childData = await API.get(`folders/${node.id}`);
      const childComponents = childData.data.data.children.map(node => <TreeNode key={node.vue_id} node={node} />);
      setChildComponents(childComponents);
      setChildrenNotLoaded(false);
    }
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
    <li>
      {/*{ node.entry_type === 'grouping' && <div onClick={handleGroupingOnClick}>{node.name}</div> }*/}
      { node.entry_type === 'grouping' && <div onClick={() => { toggleChildren(); loadChildren()}}>{node.name}</div> }
      { node.entry_type === 'file' && <CloudFile node={node} /> }
      <ul style={ styles() }> { node.entry_type === 'grouping' && childComponents }</ul>
    </li>
  )

}

export default TreeNode;