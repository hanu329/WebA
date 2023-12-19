
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { Data } from "./context/data"
import { useNavigate, Link } from "react-router-dom"
import './css/quepage.css'

export const QuePage =()=>{
   const [qSet, setQset]=useState([])
   const [c, setC]= useState(true)
   const [searchInput, setSearchInput] = useState("")

   const {d, conFun}= useContext(Data);
  
   const navigate= useNavigate()
   
  const getData=async ()=>{
   const res= await axios.get("http://localhost:3000/que")
   setQset(res.data)
  }

 const searchedQue=async ()=>{
    const res= await axios.get("http://localhost:3000/que")
    const data = await res.data
  const newData= data.filter((el)=>{

    return el.que.toLowerCase().includes(searchInput)
  })
  //console.log(newData)
   setQset(newData) 
 }

  useEffect(()=>{
   if(searchInput.length==0){
    getData()
   } 
    searchedQue()

  },[c,searchInput])
  
  const remFun=async (id)=>{
    await axios.delete(`http://localhost:3000/que/${id}`)
    setC(c?false:true)
  }


  const editFun=(id)=>{
    conFun(id)
    navigate('/editque')
   
  }
console.log(c)
  const searchFun=(e)=>{
//console.log(e.target.value)
setSearchInput(e.target.value)
  }

    return(
        <div className="contQue">
            <div className="headDiv">
                <div><h3>QUESTIONS</h3></div>
                <div> <input className="searchinp" type="search" onChange={searchFun}  /> <button className="searchBtn">Search</button>
                <Link to={'/'} style={{textDecoration:"none"}}> <button className="addBtn">Add New</button>
    </Link>
                </div>
            </div>
       
   
    <div className="tblDiv">

        <table style={{borderCollapse:"collapse"}}>
          
            <thead bgcolor="green" className="thead">
            <tr>
             <th >#</th>
            <th>QUESTION</th>
            <th>OPTIONS</th>
            <th>CREATED ON</th>
            <th>ACTION</th>
            </tr>
            </thead>
          
           
           <tbody className="tbody">
           {qSet.map((el,i)=>(
        <tr key={i}>
           <td>{i+1}</td>
           <td>{el.que}</td>
           <td><ul>
            <li>{el.options.options0} </li>
            <li>{el.options.options1}</li>
            <li>{el.options.options2}</li>
            <li>{el.options.options3}</li>
           </ul>
            </td>
           <td>{el.createdOn}</td>
           <td>  <button onClick={()=>remFun(el.id)} className="del">del</button>
        <button onClick={()=>editFun(el.id)} className="edt">edit</button>
        </td>
          
      
        </tr>
       ))}
            </tbody>  
           
        </table>
    </div>
       
      
        </div>
    )
}

