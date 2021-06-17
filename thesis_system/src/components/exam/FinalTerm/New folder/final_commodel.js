import React, { useState } from 'react'
import { Button,Modal } from 'react-bootstrap';
import Axios from 'axios'




import "./final_supmodel.css"



const Mid_supmodel=({ Visible,close,id,teacherid,teacher,getmarks})=> {
  const [cat1,setCat1]=useState(0)
  const [cat2,setCat2]=useState(0)
  const [cat3,setCat3]=useState(0)
  const [cat4,setCat4]=useState(0)
  const [cat5,setCat5]=useState(0)
  const [cat6,setCat6]=useState(0)
  const [cat7,setCat7]=useState(0)
  const [cat8,setCat8]=useState(0)
  const [cat9,setCat9]=useState(0)
  const [cat10,setCat10]=useState(0)
  

  const calculate=()=>{
    
    
    const sum=parseInt(cat1)+parseInt(cat2)+parseInt(cat3)+parseInt(cat4)+parseInt(cat5)+parseInt(cat6)+parseInt(cat7)+parseInt(cat8)+parseInt(cat9)+parseInt(cat10)
   
   return sum;

 }
  
    
   const inputMarks=()=>{

        Axios.post('http://localhost:80/thesis/finalCommittee/inputmarks.php/',{
          id:id,
          teacherid:teacherid,
       cat1:cat1,
       cat2:cat2,
       cat3:cat3,
       cat4:cat4,
       cat5:cat5,
       cat6:cat6,
       cat7:cat7,
       cat8:cat8,
       cat9:cat9,
       cat10:cat10,
       total:calculate(),

       

     })
     .then(function (response) {
       getmarks()
     
      
    })

    .catch(function (error) {
      console.log(error);
      alert("failed")
    })

    close();



    }
   




    return (
       
        <Modal show={Visible}
      
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modeel"
    >
        
      <div class="header">
        
        <h3>Committee:{teacher}  </h3>
        
          </div>
      <Modal.Body class="markingform">
     {console.log("showed")}
                    
                        <table align="center" className="table table-hover ">
                            <thead className="tablehead">
                            <tr>
                                <th>marking parameter</th>
                                <th>full marks</th>
                                <th>marks obtained</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Quality of Presentation</td> 
                                <td>10</td>
                                <td>
                                <input
                                placeholder="marks"
                                //value={this.state.regularity}
                                //onChange={evt => this.handleInput(evt, "regularity")}
                                onChange={evt=>setCat1(evt.target.value)}
                                />
                                </td>
                            
                            
                            </tr>
                            <tr>
                                <td>Problem Formulation/Identification/Conceptualization</td> 
                                <td>10</td>
                                <td>
                                <input
                                placeholder="marks"
                                //value={this.state.understanding}
                              //  onChange={evt => this.handleInput(evt, "understanding")}
                           onChange={evt=>setCat2(evt.target.value)}
                            
                            
                                /></td>
                            </tr>
                           
                            <tr>
                                <td>Methodology/Approach</td> 
                                <td>10</td>
                                <td>
                                <input
                                placeholder="marks"
                                //value={this.state.effort}
                             //   onChange={evt => this.handleInput(evt, "effort")}
                             onChange={evt=>setCat3(evt.target.value)}
                            
                                /></td>
                            </tr>
                            <tr>
                                <td>Literature review</td> 
                                <td>10</td>
                                <td>
                                <input
                                placeholder="marks"
                               // value={this.state.organization}
                               // onChange={evt => this.handleInput(evt, "organization")}
                               onChange={evt=>setCat4(evt.target.value)}
                            
                                /></td>
                            </tr>
                            <tr>
                                <td>Understanding of thesis work and related theory</td> 
                                <td>10</td>
                                <td>
                                <input
                                placeholder="marks"
                                //value={this.state.timely}
                              //  onChange={evt => this.handleInput(evt, "timely")}
                              onChange={evt=>setCat5(evt.target.value)}
                                
                            
                                /></td>
                            </tr>
                            <tr>
                            <td>Answering to questions</td>
                                <td>10</td>
                                <td>
                                <input
                                placeholder="marks"
                                //value={this.state.timely}
                              //  onChange={evt => this.handleInput(evt, "timely")}
                              onChange={evt=>setCat6(evt.target.value)}
                                
                            
                                /></td>
                            </tr>
                            <tr>
                            <td>Completeness of thesis work</td>
                                <td>10</td>
                                <td>
                                <input
                                placeholder="marks"
                                //value={this.state.timely}
                              //  onChange={evt => this.handleInput(evt, "timely")}
                              onChange={evt=>setCat7(evt.target.value)}
                                
                            
                                /></td>
                            </tr>
                            <tr>
                            <td>Planning of organization of thesis work</td>
                                <td>10</td>
                                <td>
                                <input
                                placeholder="marks"
                                //value={this.state.timely}
                              //  onChange={evt => this.handleInput(evt, "timely")}
                              onChange={evt=>setCat8(evt.target.value)}
                                
                            
                                /></td>
                            </tr>
                            <tr>
                           
                                <td>Originality of research & Scholar's contribution</td> 
                                <td>10</td>
                                <td>
                                <input
                                placeholder="marks"
                                //value={this.state.timely}
                              //  onChange={evt => this.handleInput(evt, "timely")}
                              onChange={evt=>setCat9(evt.target.value)}
                                
                            
                                /></td>
                            </tr>
                            <tr>
                                <td>Conclusions, Suggestions and Recommendation</td>
                                <td>10</td>
                                <td>
                                <input
                                placeholder="marks"
                                //value={this.state.timely}
                              //  onChange={evt => this.handleInput(evt, "timely")}
                              onChange={evt=>setCat10(evt.target.value)}
                                
                            
                                /></td>
                            </tr>
                            <tr>
                                <td>Total</td> 
                                <td>100</td>
                                <td> {calculate()} </td>
                            </tr>
                           
                            
                            </tbody>
                        </table>
                        <div>
                        
                       
                        </div>
                        
            
        
      </Modal.Body>
      <Modal.Footer class="footer">
        <input  class="button1" type="submit" value="Cancel" onClick={close}/>
        <input class="button2" type="submit" value="Upload" onClick={()=>inputMarks()}/>
      </Modal.Footer>
    </Modal>
    )
}

export default Mid_supmodel
