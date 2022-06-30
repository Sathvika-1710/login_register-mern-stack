import React ,{useState} from 'react'
import './register.css'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router'

export const Register = () => {
    const navigate=useNavigate();
    let [name,set_name]=useState("")
    let [email,set_email]=useState("")
    let [pass,set_pass]=useState("")
    let [re_pass,set_re_pass]=useState("")
    let register=(e)=>{
        e.preventDefault()
        if(name==='' || email==='' || pass!==re_pass || pass.length<6){
            alert("Invalid input")
        }
        else{
        
        axios.post('https://mern-project-new-sathvika.herokuapp.com/register',{username:name,email:email,password:pass}).then(res=>{
            alert(res.data.message)
            navigate('/login')
        })
        }
    }
    return (
        <div className='container'>
            <form>
                <h1 className='heading'>Register</h1>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" placeholder='enter your full name' value={name} onChange={(e)=>{set_name(e.target.value)}} className="form-control" id="name" aria-describedby="emailHelp" />
                   
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={(e)=>{set_email(e.target.value)}} placeholder='enter your email' className="form-control" id="email" aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" value={pass} onChange={(e)=>{set_pass(e.target.value)}} placeholder='minimum length of passowrd should be 6' className="form-control" id="password" />
                </div>

                <div className="mb-3">
                    <label htmlFor="re_password" className="form-label">Reenter the password</label>
                    <input type="password" value={re_pass} onChange={(e)=>{set_re_pass(e.target.value)}} placeholder='re enter your password' className="form-control" id="re_password" />
                </div>
                
                <button type="submit" onClick={register} className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}
