import { useState } from "react"
import "./testing.css"

export default function Testing(){

    const [count,setCount] = useState(0)

    function increment(){
        setCount(count + 1)
    }

    function decriment(){
        if(!count == 0){
            setCount(count - 1)
        }
        
    } 

    return(
        <>
        
        <button onClick={decriment}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>

        
        </>
    )

}