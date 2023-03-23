import { useState, useEffect } from "react"

export default function UseEffectE() {
  
  const [number, setNumber] = useState(0)
  const [name, setName] = useState("Kerem")

  /* useEffect(() => {
    console.log("Component Mount Edildi!") // MOUNT EDİLİNCE
  },[])
  useEffect(() => {
    console.log("GÜNCELLEME GERÇEKLEŞTİ") // HER GÜNCELLEMEDE
  }) */
  
  /* useEffect(() => {
    console.log("NAME GÜNCELLENDİ") // HER NAME GÜNCELLENİNCE
  },[name])
  
  useEffect(() => {
    console.log("NUMBER GÜNCELLENDİ") // HER NUMBER GÜNCELLENİNCE
  },[number]) */
  
  /*  useEffect(() => {
    console.log("NUMBER veya NAME GÜNCELLENDİ") // HER NUMBER veya NAME GÜNCELLENİNCE
  },[name,number]) */

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={()=> setNumber(number+1)}>+1</button>
      <br/>
      <h1>{name}</h1>
      <button onClick={()=> setName("Ahmet")}>İsmin Değiştir</button>
    </div>
  )
}
