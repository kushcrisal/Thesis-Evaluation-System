
import React, { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom";
import axios from 'axios'


import "./search.css"


const Search=()=> {
  const [studentinfo,setStudentinfo]=useState([])
  const [letter,setLetter]=useState(" ")
  const [counter,setCounter]=useState(0)
  
  const getinfo=()=>{
    axios.post('http://localhost:80/thesis/search.php/',
  {letter:letter})
  .then(response=>{

   
    console.log(response)
    setStudentinfo(response.data)
   
    
    
  
    
  })



  }

useEffect(()=>{
  getinfo()
  

  
},[counter])

const changehandler=(text)=>{
  setLetter(text)
  setCounter(counter+1)


}

  const deleteinfo=(id)=>{
    axios.post('http://localhost:80/thesis/student/delete.php/',
    {id:id})
    .then(response=>{
  
     
      console.log(response)
      getinfo()
      
      
    
      
    })
  
  }

  return (
    <div className="search-body">
      <input className="input-student" placeholder="Enter firstname or lastname" onChangeCapture ={(evt)=>{changehandler(evt.target.value) 
      } }></input>

      

      {   studentinfo.map((item)=>(
                 <ul className="listcontainer">
                     <div className="infobox">
                 <li className="text">
                     Roll No: {item.roll}
                 </li>
                 <li className="text">
                     Name: {item.firstname } {item.lastname}
                 </li>
                
                 <li className = "text">
                     Title: {item.thesis}
                 </li>
                 </div>
               
                 <li>
                   
                     <NavLink to={{pathname:"/studentdetails", state:{firstname:item.firstname,lastname:item.lastname,roll:item.roll,
                    thesis:item.thesis,id:item.id}}}>
                         <button className="button">View Details</button>
                     </NavLink> 
                 </li>
                 <li>
                   <button className="button_delete"  onClick={()=>deleteinfo(item.id)} >Delete</button>
                 </li>
                
             </ul>




            ))}

    </div>
   
  )
}

export default Search;