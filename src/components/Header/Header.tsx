import { useGlobalState } from '../../globalState/store'
import Container from '../Container'
import s from '../Header/header.module.scss'
import Logo from '../Logo'
import Menu from '../Menu'
import UserInfo from '../UserInfo'
import {SlMenu} from 'react-icons/sl'
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react'
import MobileMenu from '../MobileMenu'


const Header:React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const isDesktop = useMediaQuery({query: '(min-width: 1280px)'})
    const isTablet = useMediaQuery({query: '(min-width: 768px)'})

    const [token] = useGlobalState("token")

    const handleClickMenu = () => {
        setIsOpen(prev => !prev)
    }

    return(
        <header className={s.header}>
            <Container>
            <div className={s.header_wrapper}>
            <Logo/>
            {isDesktop && <Menu />}
            {token && isTablet && <UserInfo />}
            {!isDesktop && <button type='button' className={s.menu_btn} onClick={handleClickMenu}><SlMenu size={20} className={s.icon}/></button>}
            {isOpen && !isDesktop && <MobileMenu closeMenu={handleClickMenu}/>}
            </div>
            </Container>
        </header>
    )
}


export default Header