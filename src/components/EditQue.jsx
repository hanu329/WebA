import { useState, useRef , useEffect, useContext} from "react"
import axios from "axios"
import { Link,useNavigate,Navigate } from "react-router-dom"
import { Data } from "./context/data"
import './css/editque.css'


export const EditQue=()=>{

    const [que, setQue]=useState({
        que:"",
        options:{},
        createdOn:""
    })
    const [elem, setElem] = useState([])

    const navigate=useNavigate();

    const {d, conFun}= useContext(Data);

    const ref=useRef(0)

    const upPage=async ()=>{
       const dataObj= await axios.get(`http://localhost:3000/que?id=${d}`)
       const data = await dataObj.data[0];
       for(let item in data.options){
       
        const v=`options${++ref.current}`;
        const el= <input type="text" key={item} id={v} className="op" onChange={handleChange} value={data.options[item]} />
        setElem((pre)=>[...pre, el])
     
    } 
       setQue(data)
    }
 console.log(elem)
    useEffect(()=>{
      
             if(d>0){
              upPage()
             }
             //inputFun()
    },[])
   console.log(que)
   console.log(d)
    const handleSubmit=(e)=>{
        e.preventDefault()
      axios.put(`http://localhost:3000/que/${d}`, que).then((res)=>{
        setQue({
            que:"",
            options:{},
            createdOn:""
        })
        ref.current=null;
      
        OpFn()
        navigate('/quepage')
      })
    }

    const handleChange=(e)=>{
        
       if(e.target.id[0]=="o"){
      
        setQue((pre)=>{
          const nQue={...pre, options:{...que.options, [e.target.id] : e.target.value}}
           return nQue
        })
       }
       else{
        console.log(222)
        setQue({...que, [e.target.id]:e.target.value})
       }
    
    
     
    }
  

   const OpFn =()=>{
 let els=document.getElementsByClassName("op")
 for(let i=0; i<els.length; i++){
    els[i].value=""
 }
   }


 
    const addAns=()=>{ 
        const v=`options${++ref.current}`;
   
     const el= <input type="text" key={ref.current} id={v} className="op" onChange={handleChange}  />
     setElem([...elem,el])
   
    }
  
   

    return (
        <div className="contEdit">
        <h2>Update Que</h2>
        <form name='frm' action="" onSubmit={handleSubmit}>
        <label>Question(english)<sup style={{color:"red"}}>*</sup></label><br />
         <input className='inp'  type="text" id="que" onChange={handleChange} value={que.que} /><br />
         <label>Options<sup style={{color:"red"}}>*</sup></label>
         <ul type="circle"  style={{paddingLeft:"25px"}}>
         {elem.map((el)=>{
    return <>  
    {/* <input type="text" onChange={handleChange} value={el}/>  */}
    <li>   {el}</li>
    </>
   
})}

         </ul>

        

         {/* <input type="text" id="options0" className="op" onChange={handleChange}  />
       */}
         <input className='inp' type="datetime-local" id="createdOn" onChange={handleChange} value={que.createdOn} />
         <button className='btnCls' type='button' onClick={()=>addAns()}>add ans</button>
         <input className='inp' type="submit" value="update" />
         
        </form>
        </div>
    )
}