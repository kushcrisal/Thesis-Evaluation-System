
import Axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'



import Inputmodal from "./New folder/final_supmodel"

import "./style/supervisor.css"

function Supervisor(props) 
{
  const [visible,setVisible]=useState(false)
  const [section,setSection]=useState([])
const [teacher,setTeacher]=useState()
const [teacherlist,setTeacherlist]=useState([])


useEffect(()=>{ Axios.get('http://localhost:80/thesis/teacherlist.php')
.then(response=>{
  setTeacherlist(response.data)
})


},[])
useEffect(()=>{


  Axios.post('http://localhost:80/thesis/finalSupervisor/get_finalsupervisor_marks.php/',{id:props.id})
  .then(response=>{
    setSection(response.data)
    console.log(response)

  })
 
})

const onclose=()=>{

  setVisible(false)
  
}
const update=()=>
{
 
  Axios.post('http://localhost:80/thesis/finalSupervisor/final_sup_teacher.php/',
  {id:props.id,
  teachername:teacher})
  .then(response=>{

   
    console.log(response)
    
   
  
  })

  setTeacher("");

}






    return (
        <div className="marks-body">
         
           <div className="addteacher">
             

<input  list="teacherlist" onChange={(event)=>setTeacher(event.target.value)  }    value={teacher}/>

<datalist id="teacherlist">
  { teacherlist.map((item)=>(
     <option value={item.name}/>

  )) }
 
  


</datalist>



<Button  className="addbutton" onClick={()=>update()}>Update Teacher</Button>
</div>
<div className="border"></div>


       { section.map((item)=>( 
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
        <td>Understanding thesis work and related theory</td>
        <td>{item.cat2}</td>
        
      </tr>
      <tr>
        <td>Student effort and performance</td>
        <td>{item.cat3}</td>
       
      </tr>
      <tr>
        <td>Organization of study</td>
        <td>{item.cat4}</td>
       
      </tr>
      <tr>
        <td>Timely completion of thesis work</td>
        <td>{item.cat5}</td>
       
      </tr>
     
      
    </tbody>
    </table>
    {visible && <Inputmodal Visible={visible} close={()=>onclose()} id={props.id}/>}
  <div > <Button className="Marks_Giver_Button" onClick={()=>{setVisible(true)}}>Update</Button></div>
            </div>

            
            </>
            
            )
           )}




           
           
        </div>
        
    
    )

       }

export default Supervisor
