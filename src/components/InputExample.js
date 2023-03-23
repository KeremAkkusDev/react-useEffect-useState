import { useState } from "react"
// BAK BURAYA !
export default function InputExample() {
    
    const [info, setInfo] = useState({name:"Kerem",surname:"Akkuş"})
    
    const changeInput = (e) =>{
        setInfo({...info, [e.target.name]: e.target.value})
    }
  return (
    <>
        <input name="name" value={info.name} onChange={changeInput}/>
        <input name="surname" value={info.surname} onChange={changeInput}/>
    </>
    
  )
}
