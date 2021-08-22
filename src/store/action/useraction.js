
import axios from 'axios'
import {useruri} from '../../api/api'
export const Signinaction =(user, navigation)=>{
    console.log(user)
return( async(dispatch)=>{
try {
    const {data} = await axios.post(`${useruri}/login`, user)
  
    dispatch({

        type: "SIGININ",
        payload : data
    })
    navigation.navigate('Home')
} catch (error) {
    console.warn(error.message)
}

})
}
export const Signupaction =(user)=>{
    return( async(dispatch)=>{
    try {
        const {data} = await axios.post(`${useruri}/register`, user)
        dispatch({
    
            type: "SIGINUP",
            payload : data
        })
    } catch (error) {
        console.warn(error.message)
    }
    
    })
    }
export const logoutaction =()=> (dispatch)=> dispatch({
            type: "LOGOUT",
            payload: null
    
        })
    
    

     
  