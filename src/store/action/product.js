import axios from 'axios'
import {uri} from '../../api/productapi'
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
    
                const  {data} = await axios.get(`${uri}/product`)
                console.log(data)
                dispatch({
                    type: "GETPRODUCT",
                    payload : data
                })
        })
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