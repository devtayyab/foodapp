import axios from 'axios'
import {uri} from '../../api/api'
export const productadd =(products)=>{
console.log(products)
    return(dispatch=>{

            const  data = axios.post(`${uri}/product`, products)

            dispatch({
                type: "ADD",
                payload : data
            })
    })
}
export const productget =()=>{
        return(async(dispatch)=>{
    try{
        const  data = await axios.post(`${uri}/product/getByOwner`, { owner:"612534601ba0470016df52ea"})
        console.log(data)
        dispatch({
            type: "GETPRODUCT",
            payload : data
        })
    }
    catch (error) {
        console.log("hello",error.message) 
     }
               })
               
    }
    export const updatetodo = (updatedtodo,id) =>{
        console.log(updatedtodo)
        return(dispatch) =>{
    
            axios
            .put(`${url}/todos/${id}`, updatedtodo)
            .then(todo => {
                    console.log(todo)
                dispatch({
                    type : "Resturant",
                     todo
                }) 
            })
            .catch(error=>{
            console.log(error)
           
            })
        }
    }

export const searchaction = (search)=>{

    return ( async(dispatch)=>{

        try {
            const {data} = await axios.post(`${uri}/product/search`, {search})
         
            dispatch({
                type : "SEARCH",
                payload : data
            })  
        } catch (error) {
           console.log(error.message) 
        }
    })

  
    }
    export  const Detailaction = (id)=>{
        console.log("action" + id)
         return( async(dispatch)=>{
 
             try {
                 const {data} = await axios.post(`${uri}/product/${id}`, {id})
                 dispatch({
                     type: "DETAIL",
                     payload : data
                 })
             } catch (error) {
                 console.log(error.message)
             }
         })
 
      }