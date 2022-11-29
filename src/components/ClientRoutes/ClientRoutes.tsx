import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import PablickRoute from "./PablickRoute"
import PrivateRoute from "./PrivateRoute"
import Loader from "../Loader"
const HomePage = lazy(() => import('../../pages/HomePage'))
const LoginPage = lazy(() => import('../../pages/LoginPage'))
const RegisterPage = lazy(() => import('../../pages/RegisterPage'))
const ContactsPage = lazy(() => import('../../pages/ContactsPage'))
const NotesPage = lazy(() => import('../../pages/NotesPage'))



const ClientRoutes:React.FC = () => {

    return(
        <Suspense fallback={<Loader />}>
        <Routes>
            <Route path ="/" element={<HomePage />}/>
            <Route path="/" element={<PrivateRoute />}>
                <Route path="/login" element={<LoginPage />}/> 
                <Route path="/register" element={<RegisterPage />}/> 
            </Route>
            <Route path="/" element={<PablickRoute />}>
                <Route path="/contacts" element={<ContactsPage />}/>
                <Route path="/notes" element={<NotesPage />}/>
            </Route>
        </Routes>
        </Suspense>
    )
}


export default ClientRoutes