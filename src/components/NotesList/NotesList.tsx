import { Todo } from '../../types/types'
import NotesCard from '../NotesCard'
import s from '../NotesList/notesList.module.scss'


type Props = {
    notes: Todo[],
    onInputChange: Function,
    onDelete:Function
}

const NotesList:React.FC<Props> = ({notes, onInputChange, onDelete}:Props) => {

    
    return(
        <ul className={s.list}>
            {notes && notes.map((elem) => {
                return <NotesCard elem={elem} key={elem.id} notes={notes} onInputChange={onInputChange} onDelete={onDelete}/>
            }
                
            )}
        </ul>
    )
}

export default NotesList