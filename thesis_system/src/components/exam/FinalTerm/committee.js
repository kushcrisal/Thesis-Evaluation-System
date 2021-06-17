import Axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'


import Inputmodal from "./New folder/final_commodel"
import AppInput from "../../reusable components/AppTeacherInput"
import "./style/supervisor.css"

function Committee({getfinalmarks,id}) {
  const [teacher,setTeacher]=useState()
 
  const [visible,setVisible]=useState(false)
  const [section,setSection]=useState([])
const [teacherid,setTeacherid]=useState()
const [modelteacher,setModelteacher]=useState()


const getmarks=()=>{
  Axios.post('http://localhost:80/thesis/finalCommittee/get_committe_marks.php/',{id:id})
  .then(response=>{
    setSection(response.data)
    console.log(response)
    getfinalmarks()

  })
}



const update=()=>
{
 
  Axios.post('http://localhost:80/thesis/finalCommittee/update_teachername.php/',
  {id:id,
  teachername:teacher})
  .then(response=>{

   
    console.log(response)
    getmarks()
    
   
  
  })

  setTeacher("");

}





useEffect(()=>{

getmarks()
  
 
},[])

const callmodel=(teacherid,teacher)=>{
  setTeacherid(teacherid)
  setModelteacher(teacher)
  setVisible(true)


}

const deleteteacher=(id)=>{
  Axios.post('http://localhost:80/thesis/finalCommittee/delete.php/',
  {id:id
 })
  .then(response=>{

   
    console.log(response)
    getmarks()
    
   
  
  })

}
    return (
      <div className="marks-body">
             <div className="addteacher">
             

             <AppInput handleInput={(value)=>setTeacher(value)} teacher={teacher}/>
            
             
             
             
             <Button  className="addbutton" onClick={()=>update()}>Add Teacher</Button>
             </div>
             <div className="border"></div>
             {visible && <Inputmodal Visible={visible} getmarks={getmarks}close={()=>setVisible(false)} id={id} teacherid={teacherid} teacher={modelteacher}/>}


{ section.map((item,index)=>(
  
  <>
  <div className="teacher">
  <div className="teacher-index">{index+1}</div>
<div className="name">{item.teacher}</div>
<Button variant="danger" className="deletebutton" onClick={()=>deleteteacher(item.id)}>Delete</Button>
   

 </div>

 
 <div className="marks-section-committee">
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
        <td>Originality of research & Scholar's contribution</td>
        <td>{item.cat9}</td>
       
      </tr>
      <tr>
        <td>Conclusions, Suggestions and Recommendation</td>
<td>{item.cat10}</td>
       
      </tr>
      <tr>
        <td>Total</td>
        <td>{item.total}</td>
       
      </tr>

</tbody>

</table>
 </div>
 
 <div > <Button className="Marks_Giver_Button" onClick={()=>callmodel(item.teacherid,item.teacher)}>Update</Button></div>
 <div className="border"></div>

 </>




)) }
            
        </div>
      
    )
}

export default Committee
