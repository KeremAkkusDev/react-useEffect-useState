import { useState, useEffect } from "react"
export default function Counter() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log("COMPONENT MOUNT EDİLDİ!")
        const interval = setInterval(()=>{
          setCount((n)=> n+1)
        },1000)
        return() => {
            clearInterval(interval) 
            console.log("COMPONENT UNMOUNT EDİLDİ!")
        }
      },[])

      useEffect(() => {
        console.log("COUNT GÜNCELLENDİ") // HER COUNT GÜNCELLENİNCE
        
      },[count])

    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>+1</button>
        <button onClick={()=>{setCount(count-1)}}>-1</button>
    </div>
  )
}
