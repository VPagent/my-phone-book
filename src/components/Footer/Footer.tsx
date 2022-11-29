import Container from '../Container'
import s from '../Footer/footer.module.scss'
import {BsLinkedin, BsGithub, BsFillTelephoneFill} from 'react-icons/bs'
import {HiMail} from 'react-icons/hi'
import { useMediaQuery } from 'react-responsive'
import UkrFlag from '../UkrFlag'



const Footer:React.FC = () => {

    const isDesktop = useMediaQuery({query: '(min-width: 1280px)'})
    const isTablet = useMediaQuery({query: '(min-width: 768px)'})

    return(
        <footer className={s.footer}>
            <Container>
               <div className={s.footer_wrapper}>
               <div className={s.text_box}>
                    <h3 className={s.title}>Created by Pavel Voloshin</h3>
                    <p className={s.text}>React.js developer</p>
                </div>
                <div className={s.link_box}>
                    <a href="https://www.linkedin.com/in/pavel-voloshin-406697228/"
                    className={s.link}>
                        <BsLinkedin className={s.icon} size={20}/>
                    </a>
                    <a href="https://github.com/VPagent" 
                    className={s.link}>
                        <BsGithub className={s.icon} size={20}/>
                    </a>
                    <a href="mailto:vpagent13@gmail.com" className={s.link} type='email'>
                        <HiMail className={s.address_icon} size={20}/>
                        {isTablet && <span className={s.span}>vpagent13@gmail.com</span>}</a>
                    <a href="tel:+380934535663" className={s.link} type='tel'>
                        <BsFillTelephoneFill className={s.address_icon} size={20}/>
                        {isTablet && <span className={s.span}>+38 093 4535663</span>}</a>
                    <p className={s.location}><UkrFlag />Kyiv Ukraine</p>
                </div>
               </div>
            </Container>
        </footer>
    )
}

export default Footer