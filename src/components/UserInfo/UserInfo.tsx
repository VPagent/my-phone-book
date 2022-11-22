import { useGlobalState } from '../../globalState/store'
import { User } from '../../types/types'
import s from '../UserInfo/userInfo.module.scss'
import {TbLogout} from 'react-icons/tb'


const UserInfo:React.FC = () => {

    const [user] = useGlobalState("user")

    return user && (
        <div className={s.box}>
            <p className={s.box_text}><span className={s.box_circle}>{user.name[0]}</span>{user.name}</p>
            <button type='button' className={s.box_btn}><TbLogout size={20} className={s.box_icon}/></button>
        </div>
    )
}


export default UserInfo