import { SignUp } from 'components/SingUp'
import React from 'react'
import { Link } from 'react-router-dom'
import "../components/Form.css"


const RegisterPage = () => {
  return (
    <div className="form-container">
    <h1>Register</h1>
    <SignUp />
    <p>
        Already have an account? <Link to="/login" className='btn'>Sing IN</Link>
    </p>
</div>
  )
}

export default RegisterPage