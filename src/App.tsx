import { useEffect } from "react";
import ClientRoutes from "./components/ClientRoutes";
import Header from "./components/Header";
import { useGlobalState } from "./globalState/store";
import tokenApi, { getCurrentUser } from "./services/API";


function App() {

  const [token, setToken] = useGlobalState("token")
  const [user, setUser] = useGlobalState("user")

  useEffect(() => {
    if(!token){
      const getCurrent = async () => {
        if(localStorage.getItem("token")){
          await tokenApi.set(JSON.parse(localStorage.getItem("token") as string))
          getCurrentUser().then(res => setUser(res))
          setToken(JSON.parse(localStorage.getItem("token") as string))

        }
      }
      getCurrent()
    }
  }, [token, user])

  return (
    <div>
      <Header />
      <ClientRoutes />
    </div>
  );
}

export default App;
