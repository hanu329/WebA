import { useState, useRef , useEffect, useContext} from "react"
import axios from "axios"
import { Data } from "./context/data"
import { Link,useNavigate,Navigate } from "react-router-dom"
import './css/que.css'


//[{que:"",options:[],createdon:""}]


export const Que =()=>{
    const [que, setQue]=useState({
        que:"",
        options:{},
        createdOn:""
    })

    const [elem, setElem] = useState([])

    const navigate=useNavigate();

    const ref=useRef(0)
   

    useEffect(()=>{
         

    },[])
   
    const OpFn =()=>{
      let els=document.getElementsByClassName("op")
      for(let i=0; i<els.length; i++){
         els[i].value=""
      }
        }

    const handleSubmit=(e)=>{
        e.preventDefault()
      axios.post("http://localhost:3000/que", que).then((res)=>{
        setQue({
            que:"",
            options:{},
            createdOn:""
        })
        ref.current=0;
      
        OpFn()
        navigate('/quepage')
      })
    }

    const handleChange=(e)=>{
  
       if(e.target.id[0]=="o"){
       
        setQue((pre)=>{
          const nQue={ ...pre, options:{...que.options, [e.target.id] : e.target.value}}
         return nQue
        
        })
       }
       else{
     
        setQue({...que, [e.target.id]:e.target.value})
       }
    
    
     
    }
   
    const addAns=(e)=>{ 
      e.preventDefault()
        const v=`options${++ref.current}`;
   
     const el= <input type="text" key={ref.current} id={v} className="op" onChange={handleChange}  />
     setElem((pre)=>[...pre,el])
   
    }
   
    console.log(que)
    return(
        <div className="contQue">
            <div className="innerQue">

            
      <h2>Add Question</h2>
      
        <form name='frm' action="" onSubmit={handleSubmit} className="frm">
        <label>Question(english)<sup style={{color:"red"}}>*</sup></label><br />
         <input className='inp'  type="text" id="que" onChange={handleChange} value={que.que} /> <br />
       <label>Options<sup style={{color:"red"}}>*</sup></label>
         <ul type="circle" style={{paddingLeft:"25px"}}>
<li> <input type="text" id="options0" className="op" onChange={handleChange}  /> </li>

       
         <br />
       { elem.map((el,i)=>(
          
        <li key={i}>{el}</li> 
         
          
         ))}  </ul>
         <input  className='inp'type="datetime-local" id="createdOn" onChange={handleChange} value={que.createdOn} />  <br />
         <button className="btnCls" type='button' onClick={addAns}>add ans</button>  <br />
       
        
         <input className='inp addBtn' type="submit" value="Add" />
         
        </form>
        </div>
        </div>
    )
}