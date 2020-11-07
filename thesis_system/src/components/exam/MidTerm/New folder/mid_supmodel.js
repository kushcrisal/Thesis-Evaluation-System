import React, { useState } from 'react'
import { Button,Modal } from 'react-bootstrap';
import Axios from 'axios'




import "./mid_supmodel.css"



const Mid_supmodel=({ Visible,close,id})=> {
  const [cat1,setCat1]=useState(0)
  const [cat2,setCat2]=useState(0)
  const [cat3,setCat3]=useState(0)
  const [cat4,setCat4]=useState(0)
  const [cat5,setCat5]=useState(0)
    
    
   const inputMarks=()=>{

        Axios.post('http://localhost:80/thesis/inputmarks.php/',{
          id:id,
       cat1:cat1,
       cat2:cat2,
       cat3:cat3,
       cat4:cat4,
       cat5:cat5,

       

     })
     .then(function (response) {
       alert(response.data)
     
      
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
    >
        
      <div class="header">
        
        <h1>Supervisor  </h1>
        
          </div>
      <Modal.Body class="markingform">
     
                    
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
                                <td>regularity of work</td> 
                                <td>20</td>
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
                                <td>understanding thesis work</td> 
                                <td>20</td>
                                <td>
                                <input
                                placeholder="marks"
                                //value={this.state.understanding}
                              //  onChange={evt => this.handleInput(evt, "understanding")}
                           onChange={evt=>setCat2(evt.target.value)}
                            
                            
                                /></td>
                            </tr>
                           
                            <tr>
                                <td>student effort and performance</td> 
                                <td>20</td>
                                <td>
                                <input
                                placeholder="marks"
                                //value={this.state.effort}
                             //   onChange={evt => this.handleInput(evt, "effort")}
                             onChange={evt=>setCat3(evt.target.value)}
                            
                                /></td>
                            </tr>
                            <tr>
                                <td>organization of study</td> 
                                <td>20</td>
                                <td>
                                <input
                                placeholder="marks"
                               // value={this.state.organization}
                               // onChange={evt => this.handleInput(evt, "organization")}
                               onChange={evt=>setCat4(evt.target.value)}
                            
                                /></td>
                            </tr>
                            <tr>
                                <td>Timely completion of thesis work</td> 
                                <td>20</td>
                                <td>
                                <input
                                placeholder="marks"
                                //value={this.state.timely}
                              //  onChange={evt => this.handleInput(evt, "timely")}
                              onChange={evt=>setCat5(evt.target.value)}
                                
                            
                                /></td>
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
