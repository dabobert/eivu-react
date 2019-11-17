import React from 'react';

class TreeNode extends React.Component {
  render() {
    return(
      <li id="foo">
        <dl>
          <dt>Name</dt>
          <dd>{ this.props.name }</dd>
          <dt>Entry Type</dt>
          <dd>{ this.props.entry_type }</dd>
          <dt>Children</dt>
          <dd>{ this.props.children }</dd>
        </dl>
      </li>
    )
  }
}

export default TreeNode;