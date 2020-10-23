import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import { FaUserTie} from "react-icons/fa";


import "./profile.css";
import FinalTerm from "./exam/FinalTerm"
import MidTerm from "./exam/MidTerm"


function Student_profile() {

  const [exam,setExam]=useState("MidTerm")
  return <div className="student_body"> 

  <div className="studentinfo">
    <div className="studenticon"><FaUserTie size={100} color="blue"/></div>
    <div className="studentdetails">
    
    <div className="name_updateblock">
   <text className="studentname">Kushal Shrestha</text>
   <div className="student-button-section"><Button variant="primary" className="update_button">Update</Button></div>
   </div>
   <div className="studentrow">
   <text className="studentother">Roll no: 074BCT519   </text>
   <text className="studentother">Thesis-Title: Biotechnology</text>
   
   </div>
  
   
   </div>
   

    </div>
  
  <div className="toggle">
    <div>
      <ButtonGroup role='group' toggle>
      <Button autoFocus={true} className="ToggleButton" onClick={()=>setExam("MidTerm")}>MidTerm</Button>



     <Button   onClick={()=>setExam("FinalTerm")} className="ToggleButton1">FinalTerm</Button>
     </ButtonGroup>
    </div>
  </div>
  
  



  
    <div className="studentmarks">
      {  exam==="MidTerm" &&      <MidTerm/>}
      {exam==="FinalTerm" &&  <FinalTerm/>}
  
  
  
  
    


      

  </div>
  
  
  </div>;
}

export default Student_profile;
