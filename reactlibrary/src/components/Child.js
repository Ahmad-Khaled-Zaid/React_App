
import React from 'react';

class Child extends React.Component {

    constructor(props){
        super(props)
    }

  render() {
    return (
      <div>
        <p>I'm the Child I ate {this.props.increaseChild} </p>
        <p>full is true </p>
      </div>
    );
  }
}
export default Child;
