import Container from '../../components/Container'
import s from '../HomePage/homePage.module.scss'



const HomePage:React.FC = () => {

    return(
        <section>
            <Container>
                <div className={s.wrapper}>
                    <h2 className={s.title}>HomePage</h2>
                    <p className={s.text}>Welcome to PhoneBook, in this application you can both add notes and recreate your phone book.
First of all, you need to register, but if you are already our user, then go through authorization, so you will be convinced that only you can see and edit your data! enjoy!</p>
                </div>
            </Container>
        </section>
    )
}


export default HomePage