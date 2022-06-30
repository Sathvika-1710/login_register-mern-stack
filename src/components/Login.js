import React,{useState} from 'react'
import './login.css'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router'

export const Login = (props) => {
    const navigate=useNavigate();
   let  [email,set_email]=useState('')
   let  [password,set_pass]=useState('')

    let login=(e)=>{
        e.preventDefault()
        if(email==="" || password===""){
            alert("please enter the valid details")
        }
        else{
            axios.post('https://mern-project-new-sathvika.herokuapp.com/login',{email:email,password:password}).then(res=>{
                alert(res.data.message)
                props.fun(res.data.user)
                {res.data.message==='login succesful'? navigate('/'):navigate('/login')}
                navigate('/')
               
            })
        }
    }
  return (
    <div className='container'>
        
       <form>
        <h1 className='heading'>Login</h1>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" placeholder='Enter your email' className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(e)=>{set_email(e.target.value)}}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" placeholder='Enter the password' className="form-control" id="password" value={password} onChange={(e)=>{set_pass(e.target.value)}}/>
  </div>
  
  <button type="submit" onClick={login} className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
