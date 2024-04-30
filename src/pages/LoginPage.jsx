import { Login } from 'components/Login'
import React from 'react'
import { Link } from 'react-router-dom'
import "../components/Form.css"


const LoginPage = () => {
  return (
    <div className="form-container">
        <h1>Login</h1>
        <Login />
        <p className='change'>
            Or <Link to="/register" className='btn'>Register</Link>
        </p>
    </div>
  )
}

export default LoginPage