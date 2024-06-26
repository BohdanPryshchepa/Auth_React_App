import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from './Form'
import { useDispatch } from 'react-redux'
import { setUser } from 'store/slices/userSlice'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./Form.css"



const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister =(email, password)=> {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then(({user}) => {
            console.log(user);
            dispatch(setUser({
              email: user.email,
              id: user.id,
              token: user.accessToken
            
            }));
            navigate ('/');
          })
          .catch(console.error)
    }
  return (
        <Form
            title='Register'
            handleClick={handleRegister}
        />
  )
}

export  {SignUp}