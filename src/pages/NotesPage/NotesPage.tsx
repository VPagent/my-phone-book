import { useEffect, useState } from 'react'
import Container from '../../components/Container'
import NotesList from '../../components/NotesList'
import s from '../NotesPage/notesPage.module.scss'
import { nanoid } from 'nanoid'
import { Todo } from '../../types/types'
import NotesForm from '../../components/NotesForm'



const NotesPage:React.FC = () => {

    const [notes, setNotes] = useState<Todo[]>([])
    
    const parse = JSON.parse(localStorage.getItem("notes") as string)

        useEffect(()=> {
            if(parse?.length > 0){
                setNotes(parse)
            }
        }, [])

        useEffect(() => {
            localStorage.setItem("notes", JSON.stringify(notes))
        }, [notes])

        const handleSubmit = (obj:Todo) => {
            setNotes(prev => [...prev, obj])
        }

        const handleCompleted = (notes:Todo[], name: string):void =>{
            const currentArr = notes.map(elem => {
                if(elem.name === name){
                elem.done = !elem.done
                }
                return elem
            })
            setNotes(currentArr)
        }

        const handleDelete = (notes: Todo[], id:Todo["id"]):void => {
            const deletedNotes = notes.filter((elem:Todo) => elem.id !== id)
            setNotes(deletedNotes)
        }

    return(
        <section>
            <Container>
                <div>
                    <h1 className={s.title}>Welcome to Notes page</h1>
                    <p className={s.text}>In this page you can add your notes, there are save in localStorage, you dont using backend</p>
                </div>
                <div>
                    <NotesForm notes={notes} onFormSubmit={handleSubmit}/>
                </div>
                <div>
                    <NotesList notes={notes} onInputChange={handleCompleted} onDelete={handleDelete}/>
                </div>
            </Container>
        </section>
    )
}


export default NotesPage