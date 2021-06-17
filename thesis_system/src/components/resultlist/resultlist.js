import React,{useEffect, useState} from "react";
import { Link, NavLink } from "react-router-dom";
import axios from 'axios'
import {Button,ButtonGroup,DropdownButton,Dropdown} from 'react-bootstrap'



import "./resultlist.css";
import AppButton from "../reusable components/AppDropBtn"


const Resultlist = () => {

    


const [date,setDate]=useState(2078)
const [month,setMonth]=useState("Chaitra")
const [studentinfo,setStudentinfo]=useState([])
const [counter,setCounter]=useState(0)




const getstudentinfo=()=>{
  console.log(month)
  console.log(date)
  axios.post('http://localhost:80/thesis/student/result.php/',
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


  







    
    return (
        <div className="result-body">
           
            


            <div className='Date-section'>

            <AppButton handleDate={setYearMonth}/>{''}


</div >
<h2>{date}  {month} </h2>






            

            <div className="result-list">

            <div className="result-index title">S.N</div>
              <div className="roll-no title">ROLL.NO</div>
              <div className="result-name title">NAME</div>
              <div className="result-internal title">INTERNAL</div>
              <div className="result-final title">FINAL</div>
              <div className="result-total title">TOTAL</div>
            </div>
           

{studentinfo.map((item,index)=>(
  <>
  <div className="result-list">

  <div className="result-index data">{index+1}</div>
<div className="roll-no data">{item.roll}</div>
<div className="result-name data">{item.firstname} {item.lastname}</div>
<div className="result-internal data">{(parseFloat(item.internal)).toFixed(2)}</div>
<div className="result-final data">{(parseFloat(item.final)).toFixed(2)}</div>
<div className="result-total data">{(parseFloat(item.internal)+parseFloat(item.final)).toFixed(2)}</div>
  </div>
  <div className="result-border"></div>
  </>


))}
           
           
            
        
          
            </div>
           
         
        
    )
}
export default Resultlist;