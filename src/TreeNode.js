import React from 'react';

class TreeNode extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return(
      <li id="foo">
        <dl>
          <dt>Name</dt>
          <dd>{ this.props.traits.name }</dd>
          <dt>Entry Type</dt>
          <dd>{ this.props.traits.entry_type }</dd>
          <dt>Children</dt>
          <dd>{ this.props.traits.children }</dd>
        </dl>
      </li>
    )
  }
}

export default TreeNode;