import { useEffect } from 'react'
import AddContactForm from '../../components/AddContactForm'
import ContactsList from '../../components/ContactsList'
import Container from '../../components/Container'
import { useGlobalState } from '../../globalState/store'
import { getContacts } from '../../services/API'
// import s from '../ContactsPage/contactsPage.module.scss'





const ContactsPage:React.FC = () => {

    const [items, setItems] = useGlobalState("items")

    useEffect(()=> {
        getContacts().then(res => setItems(res))
        // eslint-disable-next-line
    }, [])

    console.log(items)
    return(
        <section>
            <Container>
                <h2>ContactsPage</h2>   
                <AddContactForm />
                <ContactsList />

            </Container>
        </section>
       
    )
}


export default ContactsPage


