import { Route, Routes } from "react-router-dom"
import ContactsPage from "../../pages/ContactsPage"
import HomePage from "../../pages/HomePage"
import LoginPage from "../../pages/LoginPage"
import NotesPage from "../../pages/NotesPage"
import RegisterPage from "../../pages/RegisterPage"
import PablickRoute from "./PablickRoute"
import PrivateRoute from "./PrivateRoute"


const ClientRoutes:React.FC = () => {

    return(
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
    )
}


export default ClientRoutes