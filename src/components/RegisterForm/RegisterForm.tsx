import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../../globalState/store'
import tokenApi, { userRegistration } from '../../services/API'
import s from '../RegisterForm/registerForm.module.scss'





const RegisterForm:React.FC = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useGlobalState("token")
    const [user, setUser] = useGlobalState("user")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        switch(e?.currentTarget?.name){
            case "email":
               return setEmail(e.target.value);
            case "password":
               return setPassword(e.target.value);
            case "name":
                return setName(e.target.value);
            default: console.log("error in switch")
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        try{
        userRegistration({name, email, password})
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
            <p className={s.title}>Please fill in all fields</p>
            <label className={s.label}>
               Name:
                <input type="text" name='name' className={s.input} placeholder='name' value={name} onChange={handleChange}/>
            </label>
            <label className={s.label}>
                Email:
                <input type="email" name='email' className={s.input} placeholder='email' value={email} onChange={handleChange}/>
            </label>
            <label className={s.label}>
                Password:
                <input type="password" name='password' className={s.input} placeholder='password' value={password} onChange={handleChange}/>
            </label>
            <Link to="/login">I have account</Link>
            <button className={s.btn} type='submit'>Register</button>
        </form>
    )
}

export default RegisterForm