import React, { FormEvent, useState } from 'react'
import { Todo } from '../../types/types'
import s from '../NotesForm/notesForm.module.scss'
import { nanoid } from 'nanoid'

type Props ={
    onFormSubmit: Function,
    notes: Todo[]
}

const NotesForm:React.FC<Props> = ({notes, onFormSubmit}) => {

    const [name, setName] = useState('')
    const [text, setText] = useState('')

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        switch(e.target.name){
            case "name":
                return setName(e.target.value);
            case "text":
                return setText(e.target.value);
            default: console.log("Error in Switch")
        }
    }

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()
        const inspect = notes.some(elem => elem.name === name)
        if(inspect){
        //  toast.warning('there is already a note with the same name')
         return
        }
        const obj = {name, text, done: false, id: nanoid(2)}
        onFormSubmit(obj)
    }
    return(
        <form className={s.form} onSubmit={handleSubmit}>
            <p className={s.title}>Add info</p>
            <label className={s.label}>
                Note name:
                <input type="text" className={s.input} name="name" value={name} onChange={handleChange}/>
            </label>
            <label className={s.label}>
                Note text:
                <textarea className={s.textArea} name="text" value={text} placeholder="Your text..." onChange={handleChange}/>
            </label>
            <button className={s.btn} type='submit'>submit</button>
        </form>
    )
}



export default NotesForm