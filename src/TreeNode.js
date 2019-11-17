import React from 'react';

class TreeNode extends React.Component {
  constructor(props) {
    super();
    this.state = {};

    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver() {
    console.log(`TreeNode ${this.props.traits.vue_id}: ${JSON.stringify(this.props)}`)
  }

  render() {
    return(
      <li onMouseOver={this.handleMouseOver}>
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