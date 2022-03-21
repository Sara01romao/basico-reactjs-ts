Componente chamado
 <Tweet text="Tweet" numero={10} funcao={msg} />
<Tweet text="Tweet 2"/>
<Tweet text="Tweet 3"/>

Definido o tipo 

type TweetProps ={
    text:string
    numero?:number
    funcao?: ()=> void

}


export default function Tweet(props:TweetProps) {
  return (
    <div>{props.text}</div>
  )
}
