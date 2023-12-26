import React from 'react'
import { useEffect, useState } from 'react'
import styled, {keyframes} from 'styled-components'

const Watch = () => {
    const [s, setS]=useState(0)
    const [m, setM]=useState(15)
    const [h, setH]=useState(2)
    const countFun=()=>{
        setInterval(()=>{
            setS((p)=>{
                if(p==59){
 setM((m)=>{
    if(m==59){
        setH((h)=>{
            if(h==11){
                return 0
            }
            return h+1
        })
        return 0
    }
    return m+1
 })

                    return 0

                }
               return p+1
            })
        },1000)
       
    }
    useEffect(()=>{
       countFun()
    },[])

    const cont ={
        border:"2px solid teal",
        width:"100px",
        height:"100px",
    position:"relative"
    }
   
  const imgWatch={
   position:"relative",
   top:"218px",
   left:"42px"
  
}
  
  return (
    <div>
       
  <div>
  <span> {h<10?"0"+h:h}</span> :
  <span> {m<10?"0"+m:m}</span> :
  <span> {s<10?"0"+s:s}</span> 
  </div>
<img src="/img/watch.png" alt="" style={imgWatch} />


<SDiv s={s*6+"deg"}>
   |
    
 </SDiv>
 <MDiv m={m*6+"deg"}>
   |
    
 </MDiv>
 <HDiv h={(h*30 + m/2)+"deg"}>
   |
    
 </HDiv>
</div>
 
   
    
  )
}

export default Watch



const SDiv=styled.div`
color:red;
border:1px solid red;
position:relative;
left:100px;
top:100px;
height:55px;
width:3px;
transform: rotate(${props => props.s});
transform-origin:bottom;
`;

const MDiv=styled.div`
color:teal;
border:1px solid teal;
position:relative;
left:100px;
top:49px;
height:50px;
width:3px;

transform: rotate(${props => props.m});
transform-origin:bottom;
`;

const HDiv=styled.div`
color:purple;
border:1px solid purple;
position:relative;
left:100px;
top:10px;
height:40px;
width:3px;

transform: rotate(${props => props.h});
transform-origin:bottom;
`;

