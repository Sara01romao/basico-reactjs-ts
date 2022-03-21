import { useState } from "react"
import Tweet from "./components/Tweet";




function App() {

  const [tweets, setTweet] = useState<string[]>([
    'Tweet 4',
    'Tweet 5'
  ])
 
  function msg(){
    console.log("sara")
  }

  function createTweet(){
     setTweet([...tweets, "Tweet 6"])
  }

  return (
    <div className="App">
       <Tweet text="Tweet" numero={10} funcao={msg} />
       <Tweet text="Tweet 2"/>
       <Tweet text="Tweet 3"/>

       {tweets.map((tweet, index)=>{
         return <Tweet key={index} text={tweet}/>
       })}

       <button 
        onClick={createTweet}
        style={{
          backgroundColor: '#8257e6', 
          border:0, 
          height:'35px',
          borderRadius:'5px',
          padding:'10px 20px'
        }}
       >
         Adicionar tweet
        </button>

      
      

    </div>
  )
}

export default App
