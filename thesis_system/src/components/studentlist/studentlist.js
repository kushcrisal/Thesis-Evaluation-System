import React,{useEffect, useState} from "react";
import { Link, NavLink } from "react-router-dom";
import axios from 'axios'



import "./studentlist.css";
import {Button,ButtonGroup,DropdownButton,Dropdown} from 'react-bootstrap'

const Studentlist = () => {

    const year=[2074,2075,2076,2077,2078,2079,2080]
const year_month=["magh","chaitra"]


const [date,setDate]=useState("2074")
const [month,setMonth]=useState("Ashwin")
const [studentinfo,setStudentinfo]=useState([])


useEffect(()=>{
    axios.post('http://localhost:80/thesis/upload.php/',
  {yeardate:date,
  yearmonth:month})
  .then(response=>{

   
    console.log(response)
    setStudentinfo(response.data)
   
    
    
  
    
  })
  

})
const setYear=(item)=>
{
  setDate(item)
  axios.post('http://localhost:80/thesis/upload.php/',
  {yeardate:date,
  yearmonth:month})
  .then(response=>{

   
    console.log(response.data)
    setStudentinfo(response.data)
 

    
    
  
    
  })
  
}
const  setYearmonth=(item)=>{
  setMonth(item)
  axios.post('http://localhost:80/thesis/upload.php/',
  {yeardate:date,
  yearmonth:month})
  .then(response=>{

   
    console.log(response.data)
    setStudentinfo(response.data)
 

    
    
  
    
  })

  
}





    
    return (
        <div className="listbody">
           
            


            <div className='Date2'>

<ButtonGroup className="dategroup">

<DropdownButton as={ButtonGroup}  className="dropbutton"  title="Year" id="bg-nested-dropdown">
{year.map((item,index)=>( <Dropdown.Item eventKey={index} onClick={()=>setYear(item)}  >{item}</Dropdown.Item>))}

</DropdownButton>
<DropdownButton as={ButtonGroup} title="Month" id="bg-nested-dropdown">
{year_month.map((item,index)=>(<Dropdown.Item eventKey={index} onClick={()=>setYearmonth(item)}>{item}</Dropdown.Item>))}


</DropdownButton>
</ButtonGroup>{''}


</div >







            <h2>{date}  {month} </h2>
        
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
                    thesis:item.thesis}}}>
                         <button className="button">View Details</button>
                     </NavLink> 
                 </li>
             </ul>




            ))}
            </div>
           
         
        
    )
}
export default Studentlist;