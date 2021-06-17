import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'


import Supervisor from "./MidTerm/Supervisor"
import Committee from "./MidTerm/committee"
import External from "./MidTerm/external"

import "./styles/finalterm.css"


function MidTerm({getfinalmarks,id}) {
  const [section,setSection]=useState("supervisor")
  
    return (
        
        <div className="marks_section_title">
      
    <text className="marks_name">Mid Term </text>
        <div className="marksinfo_block">
        <div className="marks_giver">
          <ButtonGroup vertical className="Buttongroup">
          <Button autoFocus={true} className={section==="supervisor"?"clicked":"Marks_Giver_Button"} onClick={()=>setSection("supervisor")}>Supervisor</Button>
          <Button className={section==="external"?"clicked":"Marks_Giver_Button"} onClick={()=>setSection("external")}>External</Button>
          <Button className={section==="committee"?"clicked":"Marks_Giver_Button"} onClick={()=>setSection("committee")}>Committee</Button>
          
        
            
  
  
          </ButtonGroup>
  
        
          </div>
         
          <div className="marks_value">
          {section==="supervisor" && <Supervisor id={id} getfinalmarks={getfinalmarks}/>}
            {section==="committee" && <Committee id={id} getfinalmarks={getfinalmarks}/>}
            {
                section==="external" && <External id={id} getfinalmarks={getfinalmarks}/>
            }
          </div>
          </div>
  
     
     
     
     
     
        </div>
        
    )
}

export default MidTerm
