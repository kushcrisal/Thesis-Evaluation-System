import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'


import Supervisor from "./FinalTerm/Supervisor"

function FinalTerm() {
    return (
        <div className="marks_section_title">
      
      <text className="marks_name">Final Marks</text>
      <div className="marksinfo_block">
      <div className="marks_giver">
        <ButtonGroup vertical className="Buttongroup">
          <Button className="Marks_Giver_Button">Supervisor</Button>
          <Button className="Marks_Giver_Button">External</Button>
          


        </ButtonGroup>

      
        </div>
        
        <div className="marks_value"><Supervisor/></div>
        </div>

   
   
   
   
   
      </div>
       
    )
}

export default FinalTerm


