import React from 'react'

export default function Functional1() {
    var name="pravin"
    
    function greetUser(name){
        return <h3>Hello {name}</h3>
    }   
const greetUser2 = (name) => {
      return (
        <h3>Welcome {name}</h3>
      )
    }
    
  return (
    <>
    <div>{greetUser(name)}</div>
    <div>{greetUser2(name)}</div>
    </>
  )
}
