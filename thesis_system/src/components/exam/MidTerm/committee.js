import React from 'react'
import { Button } from 'react-bootstrap'




import "./style/supervisor.css"

function Supervisor() {
    return (
        <div className="marks-body">
            <div className="addteacher">

                <input></input>
                <Button  className="addbutton">Add Teacher</Button>
            </div>
            <div className="border"></div>
            <div className="teacher">
               <div className="name">Ram Thapa</div>
               <div className="update-name"> <Button className="Marks_Giver_Button">Delete</Button>
               </div>
                

            </div>
            <div className="marks-section">
            <table class="table table-striped">
    <thead>
      <tr>
        <th>Marking Parameter</th>
        <th>Marks</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Quality of presentation</td>
        <td>45</td>
        
      </tr>
      <tr>
        <td>Problem Formulation / identification / conceptualization</td>
        <td>90</td>
        
      </tr>
      <tr>
        <td>Methodology/Approach</td>
        <td>9</td>
       
      </tr>
      <tr>
        <td>Literature review</td>
        <td>8</td>
       
      </tr>
      <tr>
        <td>Understanding of thesis work and related theory</td>
        <td>90</td>
       
      </tr>
      <tr>
        <td>Answering to questions</td>
        <td>45</td>
        
      </tr>
      <tr>
        <td>Completeness of thesis work</td>
        <td>90</td>
        
      </tr>
      <tr>
        <td>Planning of organization of thesis work</td>
        <td>9</td>
       
      </tr>
    
    </tbody>
  </table>
            </div>

            <div > <Button className="Marks_Giver_Button">Update</Button></div>
            
        </div>
    )
}

export default Supervisor
