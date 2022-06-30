import logo from './logo.svg';
import './App.css';
import {Home} from './components/Home'
import {Login} from './components/Login'
import {Register} from './components/Register'
import {useState} from'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {axios} from 'axios'
import {List} from './components/List'


function App() {
   let [all_users,set_all_users]=useState([])
  let [user,set_user]=useState([])
 
  let setusers=(user)=>{
    set_user(user)
    
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/allusers'element={<List/>}/>
          <Route exact path='/' element={<Home users={user}/>}/>
          <Route path='/login' element={<Login fun={setusers}/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
