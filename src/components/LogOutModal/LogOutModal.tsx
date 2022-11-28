import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { useGlobalState } from '../../globalState/store'
import tokenApi from '../../services/API'
import s from '../LogOutModal/logOutModal.module.scss'

const portal = document.getElementById("portal")!

type Props = {
    onClose: Function
}

const LogOutModal:React.FC<Props> = ({onClose}) => {

    const [token, setToken] = useGlobalState("token")
    const [user, setUser] = useGlobalState("user")

    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.removeItem("token")
        tokenApi.unset()
        setToken(null)
        setUser(null)
        navigate("/")
        onClose()
    }

    return createPortal(
        <div className={s.backdrop}>
            <div className={s.modal}>
                <h2 className={s.title}>Are you sure?</h2>
                <div className={s.controls}>
                    <button type='button'className={s.btn} onClick={handleLogOut}>Yes</button>
                    <button type='button'className={s.btn} onClick={() => onClose()}>Cancel</button>
               </div>
            </div>
        </div>, portal
    )
}


export default LogOutModal