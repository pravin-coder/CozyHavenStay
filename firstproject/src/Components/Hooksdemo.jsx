import React, { Component } from 'react'

export default class Hooksdemo extends Component {
    constructor(props){
        console.log("constructor fired....")
        super(props)
        this.state={count:1}
    }
     componentWillMount(){
        console.log("ComponentwillMount() fired.....")
     }
    componentDidMount(){
        console.log("ComponentDidMount() fired.....")
    }
    componentWillUpdate(next,props){
        console.log("Componentwillupdate() fired.....")
    }
    componentDidUpdate(prev,props){
        console.log("ComponentDidupdate() fired.....")

    }
    shouldComponentUpdate(){
        console.log("shouldcomponent() fired.....")
        return true;
    }
    componentWillUnmount(){
        console.log("ComponentwillunMount() fired.....")
    }
    addhandler=()=>{
        this.setState((prev,props)=>({count:prev.count+1}))
    }
  render() {
    console.log("rendere got fired.....")
    return (
      <div>
        <button onClick={this.addhandler}>Add1</button>

      </div>
    )
  }
}
