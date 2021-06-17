import Axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'



import Inputmodal from "./external/mid_extmodel"
import AppExternalInput from "../../reusable components/AppExternalInput"
import "./style/supervisor.css"

function External({getfinalmarks,id}) 
{
  const [visible,setVisible]=useState(false)
  const [section,setSection]=useState([])
const [teacher,setTeacher]=useState()
const [teacherlist,setTeacherlist]=useState([])


useEffect(()=>{ Axios.get('http://localhost:80/thesis/externalteacherlist.php')
.then(response=>{
  setTeacherlist(response.data)
})


},[])

const getmarks=()=>{
  Axios.post('http://localhost:80/thesis/midExternal/get_midexternal_marks.php/',{id:id})
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
 
  Axios.post('http://localhost:80/thesis/midExternal/mid_ext_teacher.php/',
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
             

           <AppExternalInput handleInput={(value)=>setTeacher(value)} teacher={teacher}/>



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
        <td>Quality of presentation</td>
        <td>{item.cat1}</td>
        
      </tr>
      <tr>
        <td>Problem Formulation / identification / conceptualization</td>
        <td>{item.cat2}</td>
        
      </tr>
      <tr>
        <td>Methodology/Approach</td>
        <td>{item.cat3}</td>
       
      </tr>
      <tr>
        <td>Literature review</td>
        <td>{item.cat4}</td>
       
      </tr>
      <tr>
        <td>Understanding of thesis work and related theory</td>
        <td>{item.cat5}</td>
       
      </tr>
      <tr>
        <td>Answering to questions</td>
        <td>{item.cat6}</td>
      </tr>
      <tr>
        <td>Completeness of thesis work</td>
        <td>{item.cat7}</td>
        
      </tr>
      <tr>
        <td>Planning of organization of thesis work</td>
        <td>{item.cat8}</td>
       
      </tr>
      <tr>
        <td>Total</td>
        <td>{item.total}</td>
       
      </tr>
   

    </tbody>
  </table>
  {visible && <Inputmodal getmarks={getmarks} Visible={visible} close={()=>onclose()} id={id}/>}
  <div > <Button className="Marks_Giver_Button" onClick={()=>{setVisible(true)}}>Update</Button></div>
            </div>

            
            </>
            
            )
           )}




           
           
        </div>
        
    
    )

       }
export default External;
