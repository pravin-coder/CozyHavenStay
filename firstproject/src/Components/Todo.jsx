import React, { Component } from 'react'

export default class Todo extends Component {
   constructor(props){
    super(props);
    this.state={
        taskArray:["Implement the about page","Add authetication","RoleBased auth"],
        newtask:""
    }
}
    texthandler=(e)=>{
        this.setState({newtask:e.target.value})

    }
    addhandler=()=>{
        let tempArray=this.state.taskArray;
        tempArray.push(this.state.newtask)
        this.setState({taskArray:tempArray})
    }
    removehandler=(k)=>{
        let tempArray=this.state.taskArray;
        tempArray.splice(k,1);
        this.setState({taskArray:tempArray})
    }

   
    render() {
    return (
      <div>
        <h1>Todo App</h1>
        <h2>Add new Task</h2>
        <input type="text"onChange={this.texthandler}/>
        <button onClick={this.addhandler}>Add Task</button>
        <h2>Task={this.state.newtask}</h2>
        <ul>
            {this.state.taskArray.map((task,k)=>
            (<li key={k}>{task}
            <button onClick={()=>{this.removehandler(k)}}>Delete</button></li>))}
        </ul>
      </div>
    )
  }
}
