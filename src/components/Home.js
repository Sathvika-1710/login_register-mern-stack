import React from 'react'
import { useNavigate,useParams } from 'react-router'


export const Home = (props) => {
    const navigate=useNavigate();
  return (
    <>
    {Object.keys(props.users).length===0 ?<h1>Not logged in </h1>:<div>
        <h1>Home page</h1>
        
        { <h1>{props.users[0].username}</h1> }
        <h1>{props.users[0].email}</h1>
        
       

    </div>}
    </>
  )
}
