import React from 'react'

type TweetProps ={
    text:string
    numero?:number
    funcao?: ()=> void
}


export default function Tweet(props:TweetProps) {
    props.funcao
  return (
    <div>{props.text} {props.numero} <button onClick={props.funcao}>Mostrar Msg</button></div>
  )
}
