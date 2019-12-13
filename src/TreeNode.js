import React, {useState, useEffect} from 'react';
import CloudFile from './CloudFile';
import API from './API'
import './tree.scss';

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

  return(
    <li>
      { node.entry_type === 'grouping' && <div className={node.klass} onClick={() => { toggleChildren(); loadChildren()}}>{node.name}</div> }
      { node.entry_type === 'file' && <CloudFile node={node} /> }
      <ul style={ styles() }> { node.entry_type === 'grouping' && childComponents }</ul>
    </li>
  )

}

export default TreeNode;