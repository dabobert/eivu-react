import React from 'react';

class TreeNode extends React.Component {
  constructor(props) {
    super();
    this.state = {};

    // this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleGroupingOnClick = this.handleGroupingOnClick.bind(this);
  }


  // handleMouseOver() {
  //   // console.log(`TreeNode ${this.props.node.vue_id}: ${JSON.stringify(this.props)}`)
  // }
  handleGroupingOnClick() {
    alert("hey")
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
          {/*<dt>Name</dt>*/}
          {/*<dd>{ this.props.node.name }</dd>*/}
          {/*<dt>Entry Type</dt>*/}
          {/*<dd>{ this.props.node.entry_type }</dd>*/}
          {/*<dt>Children</dt>*/}
          {/*<dd>{ this.props.node.children }</dd>*/}
        {/*</dl>*/}
      </li>

    )
  }
}

export default TreeNode;