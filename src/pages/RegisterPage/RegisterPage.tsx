import Container from '../../components/Container'
import RegisterForm from '../../components/RegisterForm'
import s from '../RegisterPage/registerPage.module.scss'


const RegisterPage:React.FC = () => {

    return(
        <section>
        <Container>
        <h2>RegisterPage</h2>
        <RegisterForm />
        </Container>
        </section>
    )
}


export default RegisterPage