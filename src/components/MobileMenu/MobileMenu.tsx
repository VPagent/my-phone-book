import s from '../MobileMenu/mobileMenu.module.scss'
import { CgClose } from 'react-icons/cg'
import UserInfo from "../UserInfo"
import { useGlobalState } from '../../globalState/store'
import { useMediaQuery } from 'react-responsive'
import Menu from '../Menu'
import { createPortal } from 'react-dom'

type Props = {
    closeMenu : Function
}

const portal = document.getElementById("portal")!

const MobileMenu:React.FC<Props> = ({closeMenu}) => {

    const [token] = useGlobalState("token")
    const isTablet = useMediaQuery({query: '(min-width: 768px)'})

    return createPortal(
        <>
        <div className={s.overlay} onClick={() => closeMenu()}></div>
        <div className={s.mobileMenu}>
            <div className={s.mobileMenu_header}>
                {token && !isTablet && <UserInfo />}
                <button type="button" className={s.close_btn} onClick={() => closeMenu()}>
                    <CgClose size={20} className={s.close_btn_icon}/>
                </button>
            </div>
            <Menu />
        </div>
        </>, portal
    )
}

export default MobileMenu

