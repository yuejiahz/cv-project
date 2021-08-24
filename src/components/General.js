import React from 'react';

function General(props) {
  return (
    <div>
      <h2>General Information</h2>
      <div>
        <label> First Name: </label>
        <input 
        type="text" 
        name="firstName" 
        onChange={props.handleChange} />
      </div>
      <br />
      <div>
        <label> Last Name: </label>
        <input 
        type="text" 
        name="lastName" 
        onChange={props.handleChange} 
        value={props.firstName}/>
      </div>
      <br />
      <div>
        <label> Email: </label>
        <input 
        type="email" 
        name="email" 
        onChange={props.handleChange} 
        value={props.lastName}/>
      </div>
      <br />
      <div>
        <label> Phone No: </label>
        <input 
        type="text" 
        name="phoneNum" 
        onChange={props.handleChange} 
        value={props.phoneNum} />
      </div>
      <br />
    </div>
  )
}

export default General
