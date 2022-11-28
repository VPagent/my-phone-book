import { useState } from 'react'
import { useGlobalState } from '../../globalState/store'
import { patchContacts } from '../../services/API'
import ContactCard from '../ContactCard'
import s from '../ContactsList/contactsList.module.scss'


const ContactsList:React.FC = () => {

    const [items] = useGlobalState("items")
    const [filter, setFilter] = useState("")
    const filteredItems = items.filter(elem => elem.name.toLowerCase().includes(filter.toLowerCase()))

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value)
    }

    return(
        <>
        <div className={s.box}>
            <p className={s.title}>Filter</p>
            <input type="text" className={s.input} onChange={handleChange} value={filter}/>
        </div>
        <ul className={s.list}>
            {filteredItems.map(elem => 
            <ContactCard key={elem.id} item={elem} />)}
        </ul>
        </>
    )
}


export default ContactsList