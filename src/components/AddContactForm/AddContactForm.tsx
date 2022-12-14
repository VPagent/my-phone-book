import s from '../AddContactForm/addContactForm.module.scss'
import {BsFillPersonFill, BsTelephoneFill} from 'react-icons/bs'
import React, { useState } from 'react';
import { postContacts } from '../../services/API';
import { useGlobalState } from '../../globalState/store';
import { toast } from 'react-toastify';
import { bigLetter } from '../../helpers/firstLetter';

const AddContactForm:React.FC = () => {
    const [items, setItems] = useGlobalState("items")
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        switch(e.target.name){
            case "name":
                return setName(bigLetter(e.target.value));
            case "tel":
                return setNumber(bigLetter(e.target.value));
            default: console.log("error in switch")
        }
    }

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        const obj = { "name": name,  "number": number };
        const inspect = items.length > 0 && items.some(elem => elem.name === name);
        if (inspect) {
          return toast.warning(`${name} is already in contacts`);
        }
       postContacts(obj).then(res => setItems(prev => [...prev, res]))
       toast.success(`contact ${name} has been added`)
       reset()
    }
    const reset = () => {
        setName('')
        setNumber('')
    }
    return(
        <form action="" className={s.form} onSubmit={handleSubmit}>
            <p className={s.form_text}>Please add contact</p>
            <label className={s.label}>
                <input className={s.input} name="name" type="text" placeholder='Name'onChange={handleChangeInput} value={name}/>
                <span className={s.span}><BsFillPersonFill className={s.icon}/></span>
            </label>
            <label className={s.label}>
                <input className={s.input} name="tel" type="text" placeholder='Tel' onChange={handleChangeInput} value={number}/>
                <span className={s.span}><BsTelephoneFill className={s.icon}/></span>
            </label>
            <button className={s.btn} type='submit'>add</button>
        </form>
    )
}

export default AddContactForm