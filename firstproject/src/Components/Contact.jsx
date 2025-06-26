import React from 'react';
//import'./Contact.css'
export const Contact = (props) => {
  const buttonHandler=()=>{alert('welcome')}
  return (
<div className='contact' style={props.styleobj}>
    {console.log("Contact Component is called with props"+JSON.stringify(props))}
    {console.log(props.name.toUpperCase())}
    <h2>{props.name} Form</h2>
    <h2>Age{props.details.age}</h2>
    <h2>Subject{props.details.subject}</h2>
    <h2>Contact{props.contact[0]}</h2>
    <h2>Contact{props.contact[1]}</h2>

    
      <label htmlFor="name">Full Name:</label>
      <input type="text" id="name" name="fullname" required />
      <br/>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
<br/>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required />
<br/>
      <div className="radio-group">
        <label>Gender:</label>
        <input type="radio" id="male" name="gender" value="Male" />
        <label htmlFor="male">Male</label>

        <input type="radio" id="female" name="gender" value="Female" />
        <label htmlFor="female">Female</label>

        <input type="radio" id="other" name="gender" value="Other" />
        <label htmlFor="other">Other</label>
      </div>
<br/>
      <div className="checkbox-group">
        <label>Hobbies:</label>
        <input type="checkbox" id="reading" name="hobbies" value="Reading" />
        <label htmlFor="reading">Reading</label>

        <input type="checkbox" id="sports" name="hobbies" value="Sports" />
        <label htmlFor="sports">Sports</label>

        <input type="checkbox" id="music" name="hobbies" value="Music" />
        <label htmlFor="music">Music</label>
      </div>
<br/>
      <label htmlFor="country">Country:</label>
      <select id="country" name="country" required>
        <option value="">--Select--</option>
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
        <option value="australia">Australia</option>
      </select>
<br/>
      <label htmlFor="address">Address:</label>
      <textarea id="address" name="address" rows="4" placeholder="Your address..."></textarea>
      <br/>
      <button onClick={buttonHandler}>submit</button>
    
    </div>
  )
}
