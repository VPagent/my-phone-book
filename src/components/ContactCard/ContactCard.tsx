import { Item } from '../../types/types'
import s from '../ContactCard/contactCard.module.scss'
import {MdDeleteOutline} from 'react-icons/md'
import { useGlobalState } from '../../globalState/store'
import { deleteContact } from '../../services/API'
import {BsFillPersonFill, BsTelephoneFill} from 'react-icons/bs'
import {FiEdit2} from 'react-icons/fi'
import { useState } from 'react'
import EditForm from '../EditForm'
import { toast } from 'react-toastify'

type Props = {
    item: Item
}

const ContactCard:React.FC<Props> = ({item}) => {
    const {id, name, number} = item
    const [items, setItems] = useGlobalState("items")
    const [isFormOpen, setIsFormOpen] = useState(false)

    const handleDelete = () => {
        if(items){
        deleteContact(id)
        setItems(prev => prev.filter(elem => elem.id !== id))
        toast.success("contact has been deleted")
        }
    }
    const handleOpenForm = () => {
        setIsFormOpen(prev => !prev)
    }
    
    return(
        <li id={id} className={s.card}>
            <div className={s.card_text_wrapper}>
                <p className={s.card_text}><BsFillPersonFill className={s.icon}/>{name}</p>
                <p className={s.card_text}><BsTelephoneFill className={s.icon}/>{number}</p>
            </div>
            <div className={s.card_controls}>
            {isFormOpen ? <EditForm id={id} onClose={handleOpenForm}/> :
                <button className={s.card_btn} type='button' onClick={handleOpenForm}>
                    <FiEdit2 className={s.card_btn_icon}/>
                    <span className={s.span}>edit</span>
                </button>}
                <button className={s.card_btn} type='button' id={id} onClick={handleDelete}>
                    <MdDeleteOutline className={s.card_btn_icon}size={20}/>
                </button>
            </div>
        </li>
    )
}


export default ContactCard