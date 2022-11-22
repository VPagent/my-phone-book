import  axios  from "axios";

export const contactsApi = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
});

export const privateApi = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
})

export const getContacts = async () => {
    const response = await privateApi.get("contacts")
    return response.data
}

export const postContacts = async (body: any) => {
    const response = await privateApi.post("contacts", body)
    return response.data
    
}

export const deleteContact = async (id: any) => {
    const response = await privateApi.delete(`contacts/${id}`)
    return response.data 
    
}

//USERS
export const userRegistration = async (credential: any) => {
    const response = await contactsApi.post("users/signup", credential)
    return response.data
}

export const userLogIn = async (credential: any) => {
    const response = await contactsApi.post("users/login", credential)
    return response.data
}

export const userLogOut = async () => {
    await privateApi.post("users/logout")
}

export const getCurrentUser = async () => {
    const response = await privateApi.get("users/current")
    return response.data
}

const tokenApi = {
    set(userToken:string){
        privateApi.defaults.headers.common.Authorization = `Bearer ${userToken}`
    },
    unset(){
        privateApi.defaults.headers.common.Authorization = ""
    }
}
export default tokenApi