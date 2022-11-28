import s from '../NotesCard/notesCard.module.scss'
import Switch from "react-switch";
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { Todo } from '../../types/types';


type Props = {
    elem: Todo,
    notes: Todo[],
    onInputChange: Function,
    onDelete: Function
}

const NotesCard:React.FC<Props> =({elem, notes, onInputChange, onDelete}) => {

    const {name, text, done, id} = elem

    return(
        <li key={name} className={s.item}>
            <div className={s.headerCard}>
                <h3>{name}</h3>
                <div>{done && <p><BsFillCheckCircleFill color='green' /></p>}</div>
            </div>
            <p className={s.text}>{text}</p>
            <div className={s.footerCard}>
                <Switch checked={done} onChange={() => onInputChange(notes, name)} />
                <button type="button" onClick={() => onDelete(notes, id)} className={s.button}><MdDelete color='grey' size={25}/></button>
            </div>
        </li>
    )

}

export default NotesCard