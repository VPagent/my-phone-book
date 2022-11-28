import Container from '../../components/Container'
import LoginForm from '../../components/LoginForm'
import s from '../LoginPage/loginPage.module.scss'



const LoginPage:React.FC = () => {


    return(
        <section>
            <Container>
                <h1>LoginPage</h1>
                <LoginForm />
            </Container>
        </section>
    )
}


export default LoginPage