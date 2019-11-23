import React from 'react';


class CloudFile extends React.Component {

  constructor() {
    //super must be called before state can be set
    super(); 
    this.state = {  
      // message: "my friend (from state)!";
    };  
    // this.updateMessage = this.updateMessage.bind(this);   
   }

  render() {
    return(
      <div>CloudFile:
        <span>{this.props.node.name}</span>
        <span>(visit)</span>
        <span>(edit)</span>
      </div>
    )
  }
}


export default CloudFile;