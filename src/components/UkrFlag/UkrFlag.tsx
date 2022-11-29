import s from '../UkrFlag/ukrFlag.module.scss'




const UkrFlag:React.FC = () => {

    return(
        <span className={s.box}>
            <span className={s.box_header}></span>
            <span className={s.box_footer}></span>
        </span>
    )
}

export default UkrFlag