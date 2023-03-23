import {useState} from 'react'

export default function UseStateE() {
    const [name,setName] = useState("Mehmet")
    const [age,setAge] = useState(20)
    const [friends,setFriends] = useState(['Ahmet','Murat'])
    const [address, setAdrress] = useState({title:'Istanbul',zip:123456})
    const [count, setCount] = useState(0)
    const changeName = () =>{
        name==="Mehmet"
        ? setName("Ahmet")
        : setName("Mehmet")
    }
    const changeAge = () =>{
        age===20
        ? setAge(30)
        : setAge(20)
    }
    const addFriend = (e) =>{
        var newFriend = e.target.elements.newFriend.value;
        setFriends([...friends,newFriend])
        e.target.elements.newFriend.value = "";
        e.preventDefault();
    }
  return (
    <div>
        <h1>Merhaba {name}-{age}!</h1>
        <button onClick={changeName}>Adı Değiştir</button>
        <button onClick={changeAge}>Yaşı Değiştir</button>
        <br/>
        <h2>Friends</h2>
        {
            friends.map((friend,index)=>(
                <div key={index}>{friend}</div>  
            ))
        }
        <div>
            <form onSubmit={addFriend}>
                <input type="text" name="newFriend" id="newFriend"/>
                <button type='submit'>Add Product</button>
            </form>

            <h2>Address</h2>
            <div>{address.title}</div>
            <div>{address.zip}</div>
        </div>
        <div>
            <label>{count}</label>
            <button onClick={()=>{setCount(count+1)}}>+1</button>
            <button onClick={()=>{setCount(count-1)}}>-1</button>
        </div>

    </div>
  )
}
