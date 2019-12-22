import React, {useState, useEffect} from 'react';
import CloudFile from './CloudFile';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import GET_FOLDER_DETAILS from './apollo/queries/GET_FOLDER_DETAILS'
import './tree.css';


function TreeNode(props) {
  const node = props.node;
  const client = useApolloClient();
  const { name, entryType } = node
  const [ childrenNotLoaded, setChildrenNotLoaded ] = useState(true);
  const [ childrenVisible, setChildrenVisible ] = useState(false);
  const [ childComponents, setChildComponents ] = useState(<li>Loading...</li>);
  // const { data, loading, error } = useQuery(GET_FOLDER_DETAILS);

  function toggleChildren() {
    setChildrenVisible( prevVisibility => !prevVisibility)
  }

  async function loadChildren() {
    if (childrenNotLoaded) {

      const { data } =  await client.query({
        query: GET_FOLDER_DETAILS,
        variables: { "id": node.id },
      })

      if (data) {
        const childComponents = data.getFolderFromId.map( node => <TreeNode key={node.domUuid} node={node} />);
        setChildComponents(childComponents);
        setChildrenNotLoaded(false);
      }
      // const childComponents = data.data.children.map(node => <TreeNode key={node.domUuid} node={node} />);
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
      { node.entryType === 'grouping' && <div className={node.klass} onClick={() => { toggleChildren(); loadChildren()}}>{node.name}</div> }
      { node.entryType === 'file' && <CloudFile node={node} /> }
      <ul style={ styles() }> { node.entryType === 'grouping' && childComponents }</ul>
    </li>
  )

}

export default TreeNode;