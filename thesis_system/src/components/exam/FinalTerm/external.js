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
        <td>Standard of technical language, expression and format</td>
        <td>45</td>
        
      </tr>
      <tr>
        <td>Problem formulation, research identification and formulation of research topic</td>
        <td>90</td>
        
      </tr>
      <tr>
        <td>Selection of research methodology (research method and tools)</td>
        <td>9</td>
       
      </tr>
      <tr>
        <td>Quality of data processing and result interpretation</td>
        <td>8</td>
       
      </tr>
      <tr>
        <td>Matching and finding with objectives</td>
        <td>90</td>
       
      </tr>
      <tr>
        <td>Logic reasoning, conclusions and interpretation</td>
        <td>45</td>
        
      </tr>
      <tr>
        <td>Quality of abstract</td>
        <td>90</td>
        
      </tr>
      <tr>
        <td>Originality of research</td>
        <td>9</td>
       
      </tr>
      <tr>
        <td>Scope of research</td>
        <td>8</td>
       
      </tr>
      <tr>
        <td>Answer to the examiner's question</td>
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
