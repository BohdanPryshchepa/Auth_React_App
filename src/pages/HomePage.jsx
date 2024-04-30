import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from 'hooks/use-auth'
import { useDispatch } from 'react-redux';
import { removeUser } from 'store/slices/userSlice';
import "../components/Form.css"
// import './home.scss'
import '../index.css';



const HomePage = () => {
  const dispatch = useDispatch();

  const {isAuth, email }= useAuth();



  return isAuth ? (
    <div className="form-container">
      <h1>Hello there!</h1>
      <div className='discription'>
        <h2>What is it?</h2>
        <ul>
          <li>This is simple Authorization React App</li>
          <li>Works with Google Firebase</li>
          <li>You can SING UP or Register your ACC</li>
          <li>It can be used in the future like example authorization</li>
        </ul>
     
      </div>

      
      <button
       onClick={() => dispatch(removeUser())}
      >
        Log out from {email}
      </button>
 
    </div>
    
    ):(
    <Navigate to="/login" />
  )
}

export default HomePage
