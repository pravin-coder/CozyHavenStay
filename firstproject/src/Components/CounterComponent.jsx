import React, { Component } from 'react'

export default class CounterComponent extends Component {
    constructor(props){
        super(props);
        //state vriable definition
        this.state={counter:1, x:89, text:"hello"}
    }
    increment(){
        //changing state variable using setstate method
        //this.setState({counter:9})
        this.setState((prev, props) => ({counter: prev.counter + 1,}));
    }
    componentDidMount(){
         console.log("Componentdidmount() method invoked")
        this.increment()
    }
  render() {
    return (
      <div>
        <h1>Value of the counter:{this.state.counter}</h1>
      
        {/* {this.increment()} */}
      </div>
    )
  }
}
