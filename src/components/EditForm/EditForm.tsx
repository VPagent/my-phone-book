import s from '../EditForm/editForm.module.scss'
import { CgClose } from 'react-icons/cg'
import React, { useState } from 'react'
import { Item } from '../../types/types'
import { getContacts, patchContacts } from '../../services/API'
import { useGlobalState } from '../../globalState/store'
import { MdPersonOutline } from 'react-icons/md'
import { BsTelephone, BsFillCheckSquareFill} from 'react-icons/bs'
import { toast } from 'react-toastify'

type Props = {
    id: Item["id"],
    onClose: Function,
}

const EditForm:React.FC<Props> = ({id, onClose}) => {

    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [items, setItems] = useGlobalState('items')

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        switch(e.currentTarget.name){
            case "name":
                return setName(e.target.value);
            case "tel":
                return setTel(e.target.value);
            default: return console.log("Error in switch")
        }
    }
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        if(!name && !tel){
            return toast.warning("Failed, all fields must be filled")
        }
        const obj = {"name": name, "number": tel}
        patchContacts(id, obj)
        getContacts().then(res => setItems(res))
        toast.success("Contact has been updated")
        onClose()
    }

    return items && (
        <>
        <div className={s.overlay} onClick={() => onClose()}></div>
        <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.labelWrapper}>
            <label className={s.label}>
               <span className={s.span}><MdPersonOutline className={s.icon}/></span>
                <input className={s.input}  type="text" name="name" value={name} onChange={handleChange}/>
            </label>
            <label className={s.label}>
                <span className={s.span}><BsTelephone size={14} className={s.icon}/></span>
                <input className={s.input} type="text" name="tel" value={tel} onChange={handleChange}/>
            </label>
            </div>
            <div className={s.controlsWrapper}>
                <button type='button' className={s.btn} onClick={() => onClose()}>
                    <CgClose  size={18}/>
                </button>
                <button type='submit' className={s.btn}>
                    <BsFillCheckSquareFill size={18} className={s.checkIcon}/>
                </button>
            </div>
        </form>
        </>
    )
}

export default EditForm