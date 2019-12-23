import React from 'react';
import TreeNode from './TreeNode';
import { useQuery } from '@apollo/react-hooks';
import GET_FOLDER_DETAILS from './apollo/queries/GET_FOLDER_DETAILS'

function TreeRoot(props) {
  const { data, loading, error } = useQuery(GET_FOLDER_DETAILS);
  if (loading) return <ul><li>loading</li></ul>;
  if (error) return <ul><li>ERROR</li></ul>;
  if (data) {
    const treeNodeComponents = data.getFolderFromId.map( node => <TreeNode key={node.domUuid} node={node} />);
    return <ul>{treeNodeComponents}</ul>;
  }
}

export default TreeRoot;
