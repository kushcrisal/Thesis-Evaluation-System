import Axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'



import Inputmodal from "./New folder/mid_supmodel"
import AppInput from "../../reusable components/AppTeacherInput"
import "./style/supervisor.css"

function Supervisor({getfinalmarks,id}) 
{
  const [visible,setVisible]=useState(false)
  const [section,setSection]=useState([])
const [teacher,setTeacher]=useState()





const getmarks=()=>{
  Axios.post('http://localhost:80/thesis/midSupervisor/get_midsupervisor_marks.php/',{id:id})
  .then(response=>{
    setSection(response.data)
    console.log(response)
    getfinalmarks()

  })

}
useEffect(()=>{

getmarks()
  
 
},[])

const onclose=()=>{

  setVisible(false)
  
}
const update=()=>
{
 
  Axios.post('http://localhost:80/thesis/midSupervisor/update_teachername.php/',
  {id:id,
  teachername:teacher})
  .then(response=>{

   
    console.log(response)
    getmarks()
    
   
  
  })

  setTeacher("");

}






    return (
        <div className="marks-body">
         
           <div className="addteacher">
             
<AppInput handleInput={(value)=>setTeacher(value)} teacher={teacher}/>



<Button  className="addbutton" onClick={()=>update()}>Update Teacher</Button>
</div>
<div className="border"></div>


       {  section.map((item)=>( 
       <>    <div className="teacher">
    <div className="name">{item.teacher}</div>
              

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
       <td>{item.cat1}</td>
        
      </tr>
      <tr>
        <td>Degree of Completeness of thesis</td>
        <td>{item.cat2}</td>
       
      </tr>
      <tr>
        <td>Understanding thesis work and related theory</td>
        <td>{item.cat3}</td>
        
      </tr>
      <tr>
        <td>Student effort and performance</td>
        <td>{item.cat4}</td>
       
      </tr>
      <tr>
        <td>Organization of study</td>
        <td>{item.cat5}</td>
       
      </tr>
      <tr>
        <td>Total</td>
        <td>{item.total}</td>
       
      </tr>
      
     
     
    </tbody>
  </table>
  
{visible && <Inputmodal Visible={visible} getmarks={getmarks} close={()=>onclose()} id={id}/>}
  <div > <Button className="Marks_Giver_Button" onClick={()=>{setVisible(true)}}>Update</Button></div>
            </div>

            
            </>
            
            )
           )
           
           
           
           
           
           }




           
           
        </div>
        
    
    )

       }
export default Supervisor
