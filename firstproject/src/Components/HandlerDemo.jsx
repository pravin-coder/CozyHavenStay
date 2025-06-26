import React, { Component } from 'react'

export default class HandlerDemo extends Component {
constructor(props){
    super(props);
    this.state={
        count:0,
        enabled:false,
        textContent:""
    }
}
clickHandler=()=>{
    console.log("clickhandler is tricked.....")
    alert("welcome")
}
addHandler=()=>{
    console.log("Addhandler triggered....")
    this.setState((prev,props)=>({count:prev.count+1}))
}

minusHandler=()=>{
    console.log("minushandler triggered....")
    this.setState((prev,props)=>({count:prev.count-1}))
}

checkboxHandler=()=>{
    console.log("checkboxhandler is triggered....")
    this.setState((prev,props)=>({enabled:!prev.enabled}))
}

textChangeHandler=(e)=>{
    console.log("textxhangehandler is triggered....value recieved:",e.target.value)
    this.setState({textContent:e.target.value})
}

    render() {
        console.log("Component Rendered....")
    return (
      <div>
        <button onClick={this.addHandler}>Add1</button>
        <button onClick={this.minusHandler}>minus1</button>
        <h2>Counter value={this.state.count}</h2>
        <button onClick={this.clickHandler}>alertclick</button>
        <label>Enter text:
            <input type="text" onChange={this.textChangeHandler}/>
        </label>
        <h3>{this.state.textContent}</h3>
      </div>

    )
  }
}
