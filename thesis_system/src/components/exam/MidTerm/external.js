import React from 'react'
import { Button } from 'react-bootstrap'




import "./style/supervisor.css"

function Supervisor() {
    return (
        <div className="marks-body">
            <div className="teacher">
               <div className="name">Sajan Thapa</div>
               <div className="update-name"> <Button className="Marks_Giver_Button">Update</Button>
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
        <td>Regularity of works</td>
        <td>45</td>
        
      </tr>
      <tr>
        <td>Understanding thesis work and related theory</td>
        <td>90</td>
        
      </tr>
      <tr>
        <td>Student and performance</td>
        <td>9</td>
       
      </tr>
      <tr>
        <td>Organization of study</td>
        <td>8</td>
       
      </tr>
      <tr>
        <td>Timely completion of thesis work</td>
        <td>90</td>
       
      </tr>
      <tr>
        <td>Regularity of works</td>
        <td>45</td>
        
      </tr>
      <tr>
        <td>Understanding thesis work and related theory</td>
        <td>90</td>
        
      </tr>
      <tr>
        <td>Student and performance</td>
        <td>9</td>
       
      </tr>
      <tr>
        <td>Organization of study</td>
        <td>8</td>
       
      </tr>
      <tr>
        <td>Timely completion of thesis work</td>
        <td>90</td>
       
      </tr>
    </tbody>
  </table>
            </div>

            <div > <Button className="Marks_Giver_Button">Update</Button></div>
            
        </div>
    )
}

export default Supervisor
