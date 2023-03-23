import Header from './components/Header';
import Loggedin from './components/LoggedIn';
import {useState} from "react"
import UseStateE from './components/UseStateE';
import InputExample from './components/InputExample';
import UseEffectE from './components/UseEffectE';
import Counter from './components/Counter';

const name = "Kerem"
const surname = "Akkuş"
function App() {
  const [isLoggedIn,setLoggedIn] = useState();
  const [isVisible,setIsVisible] = useState(true);
  return (
    
    <div className="App">
      <Header/>
      <Loggedin 
        name={name} 
        surname={surname} 
        isLoggedIn={isLoggedIn} 
        setLoggedIn={setLoggedIn} 
        friends={["Ahmet","Tayfun","Gökhan","Ayşe"]}
        address={{
          title: 'Ataşehir/İstanbul',
          zip: 154325,      
        }}
      
      />
      <UseStateE/>
      <InputExample/>
      <UseEffectE/>
      {isVisible && <Counter/>}
      <button onClick={()=> setIsVisible(!isVisible)}>Toggle</button>    
    </div>
  );
}

export default App;
