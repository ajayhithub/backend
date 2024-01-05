import { useEffect, useState } from "react"
import axios from 'axios';


function App() {
 const [joke,setjoke] = useState([]);

   useEffect(()=>{
     
    axios.get('/api/jokes')
    .then((res)=>{
           console.log(res.data);
           setjoke(res.data);
    })
    .catch((error)=>{
      console.log(error);
    })

   },[])


  return (
       <>
       <h1>full stack</h1>
       <h4>{joke.length}</h4>
       {
         joke.map((joke)=>{
           return(
            <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
           </div>) 
         })
       }
       </>
      
  )
}

export default App
