import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../../globalState/store'
import tokenApi, { userLogIn } from '../../services/API'
import s from '../LoginForm/loginForm.module.scss'


const LoginForm:React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useGlobalState("token")
    const [user, setUser] = useGlobalState("user")
    console.log(user)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        switch(e?.currentTarget?.name){
            case "email":
               return setEmail(e.target.value);
            case "password":
               return setPassword(e.target.value);
        }
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        try{
        userLogIn({email, password})
        .then(res => {
            setToken(res.token)
            setUser(res.user)
            tokenApi.set(res.token)
            localStorage.setItem("token", JSON.stringify(res.token))
        })
        } catch(error:any){console.log(error.message)}
    }
    return(
        <form action="" className={s.form} onSubmit={handleSubmit}>
            <p className={s.title}>Please enter your Email and Password</p>
            <label className={s.label}>
                Email:
                <input type="email" className={s.input} name='email' placeholder='email' value={email} onChange={handleChange}/>
            </label>
            <label className={s.label}>
                Password:
                <input type="password" className={s.input} name='password'placeholder='password' value={password} onChange={handleChange}/>
            </label>
            <Link to="/register">I don't have account</Link>
            <button className={s.btn} type='submit'>LogIn</button>
        </form>
    )
}

export default LoginForm