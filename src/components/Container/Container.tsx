import s from '../Container/container.module.scss'

type Props = {
    children: React.ReactNode
}

const Container:React.FC<Props> = ({children}) => {

    return(
        <div className={s.container}>
            {children}
        </div>
    )
}

export default Container