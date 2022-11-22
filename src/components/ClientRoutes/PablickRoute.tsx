import { Navigate, Outlet } from "react-router-dom"
import { useGlobalState } from "../../globalState/store"



const  PablickRoute = () => {
    const [token] = useGlobalState("token")

    return token ? <Outlet/> : <Navigate to="/login"/> 
    
}

export default PablickRoute