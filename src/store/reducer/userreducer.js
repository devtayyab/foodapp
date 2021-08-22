import AsyncStorage from '@react-native-async-storage/async-storage';
export default async (state = [] , action)=>{
    console.log(state)
    console.log(action)
switch (action.type) {
    case "SIGININ":
        try {
            await AsyncStorage.setItem('user',JSON.stringify(action?.payload))
          } catch (e) {
            console.warn(e)
          }
        // localStorage.setItem("user",JSON.stringify(action?.payload))
        return action.payload
    case "SIGINUP":
        try {
            await AsyncStorage.setItem('user',JSON.stringify(action?.payload))
          } catch (e) {
            console.warn(e)
          }
            // localStorage.setItem("user",JSON.stringify(action?.payload))
            return action.payload
    case "LOGOUT":
        // localStorage.removeItem("user")
            return action.payload
    default:
        return  state
}


}
