import React,{useEffect, useState} from "react";
import { Link, NavLink } from "react-router-dom";
import axios from 'axios'
import {Button,ButtonGroup,DropdownButton,Dropdown} from 'react-bootstrap'



import "./studentlist.css";
import AppButton from "../reusable components/AppDropBtn"
import AppWarn from "../reusable components/AppWarn"



const Studentlist = () => {

    


const [date,setDate]=useState(2078)
const [month,setMonth]=useState("Chaitra")
const [studentinfo,setStudentinfo]=useState([])
const [counter,setCounter]=useState(0)
const [show,setShow]=useState(false)
const[deleteid,setDeleteid]=useState()




const getstudentinfo=()=>{
  console.log(month)
  console.log(date)
  axios.post('http://localhost:80/thesis/student/upload.php/',
  {yeardate:date,
  yearmonth:month})
  .then(response=>{

   
    console.log(response)
    setStudentinfo(response.data)
   
    
    
  
    
  })


}


useEffect(()=>{
  
    getstudentinfo()
  

},[counter])
const setYearMonth=(item)=>
{

  setDate(item.year)
  setMonth(item.month)
  

  setCounter(counter+1)
 
  
}
const deleteinfo=(id)=>{
  axios.post('http://localhost:80/thesis/student/delete.php/',
  {id:id})
  .then(response=>{

   
    console.log(response)
    
    
    getstudentinfo()
    setShow(false)
  
    
  })

  

}

const ondelete=(id)=>
{
  setShow(true)
  setDeleteid(id)
  console.log(deleteid)
}





    
    return (
        <div className="listbody">
           
            


            <div className='Date2'>

            <AppButton handleDate={setYearMonth}/>{''}


</div >







            <h2>{date}  {month} </h2>
            {show && <AppWarn Show={show} ondelete={deleteinfo} onhide={()=>setShow(false)}  id={deleteid} />}
        
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
                   <button className="button_delete"  onClick={()=>ondelete(item.id)} >Delete</button>
                 </li>
                
             </ul>




            ))}
            </div>
           
         
        
    )
}
export default Studentlist;