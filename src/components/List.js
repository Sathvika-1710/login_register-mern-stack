import React, { useState } from 'react'
import axios from 'axios'
import {User} from '../components/User'

export const List = () => {
    let [users,set_users]=useState([]);
    let [var2,set_var]=useState(true)
    
    if(var2 === true){
    axios.post('https://mern-project-new-sathvika.herokuapp.com/users').then( res=>{
            set_users(res.data.users)
            set_var(false)
    
        

        
    })
}
  return (
    <div>List
         
        {users.map((user) => {
                        return (
                            <>
                                <User user={user} key={user.email} /> 
                                

                            </>
                        )
                        

                    })
                }
    </div>
  )
}
