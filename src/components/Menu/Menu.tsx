import { NavLink } from "react-router-dom"
import { useGlobalState } from "../../globalState/store"
import s from '../Menu/menu.module.scss'


const Menu:React.FC = () => {

    const [token] = useGlobalState("token")

    return(
        <menu className={s.menu}>
            <ul className={s.menu_list}>
                <li className={s.menu_item}><NavLink className={s.menu_link} to='/' end>Home</NavLink></li>
                {token && <li className={s.menu_item}><NavLink className={s.menu_link} to='/notes'>Notes</NavLink></li>}
                {!token && <li className={s.menu_item}><NavLink className={s.menu_link} to='/login'>LogIn</NavLink></li>}
                {token && <li className={s.menu_item}><NavLink className={s.menu_link} to='/contacts'>Contacts</NavLink></li>}

            </ul>
        </menu>
    )
}

export default Menu