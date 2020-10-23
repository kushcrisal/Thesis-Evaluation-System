import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'


import Supervisor from "./FinalTerm/Supervisor"
import Committee from "./FinalTerm/committee"
import External from "./FinalTerm/external"

import "./styles/finalterm.css"

function FinalTerm() {
    const [section,setSection]=useState("supervisor")
    return (
        <div className="marks_section_title">
      
      <text className="marks_name">Final Term</text>
      <div className="marksinfo_block">
      <div className="marks_giver">
        <ButtonGroup vertical toggle className="Buttongroup">
          <Button autoFocus={true} className="Marks_Giver_Button" onClick={()=>setSection("supervisor")}>Supervisor</Button>
          <Button className="Marks_Giver_Button" onClick={()=>setSection("external")}>External</Button>
          <Button className="Marks_Giver_Button" onClick={()=>setSection("committee")}>Committee</Button>
          


        </ButtonGroup>

      
        </div>
        
        <div className="marks_value">
            
            {section==="supervisor" && <Supervisor/>}
            {section==="committee" && <Committee/>}
            {
                section==="external" && <External/>
            }
            
            </div>
        </div>

   
   
   
   
   
      </div>
       
    )
}

export default FinalTerm


