import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import { FaUserTie} from "react-icons/fa";


import "./profile.css";
import FinalTerm from "./exam/FinalTerm"
import MidTerm from "./exam/MidTerm"
import Axios from "axios";


function Student_profile(props) {
  
  const [marks,setMarks]=useState([])
 
  
  const getfinalmarks=()=>{
  
    Axios.post('http://localhost:80/thesis/student/finalmarks.php/',{identity:props.location.state.id})
.then(response=>{

  setMarks(response.data)
  
  
  
  console.log(response.data)
  
})



  }

 
  useEffect(()=>{ Axios.post('http://localhost:80/thesis/student/final.php',{id:props.location.state.id})
.then(response=>{
  console.log(response.data)
})
getfinalmarks()


},[])




  const [exam,setExam]=useState("MidTerm")
  return <div className="student_body"> 

  <div className="studentinfo">
    <div className="studenticon"><FaUserTie size={100} color="blue"/></div>
    <div className="studentdetails">
    
    <div className="name_updateblock">
<text className="studentname">{props.location.state.firstname} {props.location.state.lastname}</text>
   <div className="student-button-section"></div>
   </div>
   <div className="studentrow">
   <div className="studentother">Roll no: {props.location.state.roll}   </div>
<div className="studentother">Thesis-Title:{props.location.state.thesis} </div>
   
   </div>
   <div className="studentrow">
   <text className="studentother">Internal-Marks:{ (marks.map((item)=>((parseFloat(item.internal)).toFixed(2))))}   </text>
<text className="studentother">final-Defense:{marks.map((item)=>((parseFloat(item.final)).toFixed(2)))} </text>
   
   </div>
   

  
   
   </div>
   

    </div>
  
  <div className="toggle">
    <div>
      <ButtonGroup role='group' toggle>
      <Button autoFocus={true}   className={exam==="MidTerm"?"clickedToggle":"ToggleButton"} onClick={()=>setExam("MidTerm")}>MidTerm</Button>



     <Button   onClick={()=>setExam("FinalTerm")} className={exam==="FinalTerm"?"clickedToggle1":"ToggleButton1"}>FinalTerm</Button>
     </ButtonGroup>
    </div>
  </div>
  
  



  
    <div className="studentmarks">
     
      {  exam==="MidTerm" &&      <MidTerm id={props.location.state.id} getfinalmarks={getfinalmarks}/>}
      {exam==="FinalTerm" &&  <FinalTerm id={props.location.state.id} getfinalmarks={getfinalmarks}/>}
  
  
  
  
    


      

  </div>
  
  
  </div>;
}

export default Student_profile;
