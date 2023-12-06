import { useState } from "react"


export const Demo=()=>{
    const [c, setC]=useState(11)
const [d, setD]=useState(0)

const fn1=()=>{
    setD(d+1)
}
const fn2=()=>{
    setC(c+1)
}
    return (
        <>
        <span onClick={fn2}> {c}</span>
        <br />
         <span onClick={fn1}>{d}</span>
        </>
    )
}