import { useGlobalState } from '../../globalState/store'
import { User } from '../../types/types'
import s from '../UserInfo/userInfo.module.scss'
import {TbLogout} from 'react-icons/tb'
import { useState } from 'react'
import LogOutModal from '../LogOutModal'


const UserInfo:React.FC = () => {

    const [user] = useGlobalState("user")
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
    }
    return user && (
        <div className={s.box}>
            <p className={s.box_text}><span className={s.box_circle}>{user.name[0]}</span>{user.name}</p>
            <button type='button' className={s.box_btn} onClick={handleOpenModal}>
                <TbLogout size={20} className={s.box_icon}/>
            </button>
            {isModalOpen && <LogOutModal onClose={handleOpenModal} />}
        </div>
    )
}


export default UserInfo