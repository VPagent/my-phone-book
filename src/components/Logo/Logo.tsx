import s from '../Logo/logo.module.scss'
import {FaPhoneSquareAlt} from 'react-icons/fa'


const Logo:React.FC = () => {

    return(
        <p className={s.wrapper}>
            <FaPhoneSquareAlt size={30} className={s.icon}/>
            <span className={s.text}>
                PhoneBook
            </span>
        </p>
    )
}


export default Logo