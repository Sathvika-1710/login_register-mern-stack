import React, { useState } from 'react'


export const User = (props) => {
  
  return (
    <div>
   
      <h3>Username</h3>
        <h1>{props.user.username}</h1>
      <h3>Registered email id</h3>
        <h1>{props.user.email}</h1>
        <br/>
        <hr/>
       
      
    </div>
    
  )
}
