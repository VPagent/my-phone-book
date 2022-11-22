
import { Navigate, Outlet } from "react-router-dom"
import { useGlobalState } from "../../globalState/store"



const PrivateRoute = () => {
    const [token] = useGlobalState("token")

    return token ? <Navigate to="/"/> : <Outlet/>
    
}

export default PrivateRoute