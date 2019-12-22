import React, { createContext, useState, useEffect} from 'react';
import TreeNode from './TreeNode';
import { useQuery } from '@apollo/react-hooks';
import GET_FOLDER_DETAILS from './apollo/queries/GET_FOLDER_DETAILS'


function TreeRoot(props) {

  const { data, loading, error } = useQuery(GET_FOLDER_DETAILS);
  if (loading) return <ul><li>loading</li></ul>;
  if (error) return <ul><li>ERROR</li></ul>;
  if (data) {
    const treeNodeComponents = data.getFolderFromId.map( node => <TreeNode key={node.domUuid} node={node} />);
    // setTreeNodeComponents(treeNodeComponents);
    return <ul>{treeNodeComponents}</ul>;
  }



  // async function fetchData() {
  //   const { data, loading, error } = useQuery(GET_FOLDER_DETAILS);
  //   if (loading) return <h3>loading</h3>;
  //   if (error) return <p>ERROR</p>;




  //   const treeRoot = await API.get('folders'); //https://designrevision.com/react-axios/
  //   const treeNodeComponents = treeRoot.data.data.map( node => <TreeNode key={node.domUuid} node={node} />)
  //   setTreeNodeComponents(treeNodeComponents);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, [])
}


export default TreeRoot;
