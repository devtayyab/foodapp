import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const Globalcontext = createContext();

const Context = ({ children }) => {
    const [userRegister, setUserRegister] = useState();
    const [dairyData, setDairyData]= useState()
    const [data, setData]=useState()
    useEffect(() => {
        // GetUser();
        // makeGetRequest()
    }, [])

    const GetUser = async () => {
        const token = JSON.parse(localStorage.getItem("token"));
        if(token!==null){
            let body = token;
            const { data } = await axios.post("http://localhost:5000/api/user/authUser", body);
            setUserRegister(data);
        }
    }
    async function makeGetRequest() {

        let res = await axios.get(`http://localhost:5000/api/diary/get`)
            .then((response) => response.data)
       
        setDairyData(res)

    }
 console.log("fetch data",dairyData)


 const deleteData = async (post) => {
    console.log(post)
    if (window.confirm(`Are you sure you want to delete "${post}"`)) {
      await axios.delete(`http://localhost:5000/api/diary/get/${post}`);
      makeGetRequest();
    }
  }

    // const PostDairyData=async()=>{
    //     const { data } = await axios.post("http://localhost:5000/api/dairy", body);
    //     setDairyData(data)
    // }
    return (
    
    <Globalcontext.Provider value={{ userRegister, setUserRegister }}>
            {children}
        </Globalcontext.Provider>
    )
    
}

export default Context;