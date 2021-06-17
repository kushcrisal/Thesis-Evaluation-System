import Axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'



import Inputmodal from "./external/final_extmodel"
import AppExternalInput from "../../reusable components/AppExternalInput"

import "./style/supervisor.css"

function External({id,getfinalmarks}) 
{
  const [visible,setVisible]=useState(false)
  const [section,setSection]=useState([])
const [teacher,setTeacher]=useState()




const getmarks=()=>{
  Axios.post('http://localhost:80/thesis/finalExternal/get_finalexternal_marks.php/',{id:id})

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
 

  Axios.post('http://localhost:80/thesis/finalExternal/final_ext_teacher.php/',

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
    <td>Standard of technical language, expression and format</td>
    <td>{item.cat1}</td>
  </tr>
  <tr>
    <td>Problem formulation, research identification and formulation of research topic</td>
    <td>{item.cat2}</td>
  </tr>
  <tr>
    <td>Selection of research methodology (research method and tools)</td>
    <td>{item.cat3}</td>
   
  </tr>
  <tr>
    <td>Quality of data processing and result interpretation</td>
    <td>{item.cat4}</td>
   
  </tr>
  <tr>
    <td>Matching and finding with objectives</td>
    <td>{item.cat5}</td>
   
  </tr>
  <tr>
    <td>Logic reasoning, conclusions and interpretation</td>
    <td>{item.cat6}</td>
    
  </tr>
  <tr>
    <td>Quality of abstract</td>
    <td>{item.cat7}</td>
    
  </tr>
  <tr>
    <td>Originality of research</td>
    <td>{item.cat8}</td>
   
  </tr>
  <tr>
    <td>Scope of research</td>
    <td>{item.cat9}</td>
   
  </tr>
  <tr>
    <td>Answer to the examiner's question</td>
    <td>{item.cat10}</td>
   
  </tr>
  <tr>
        <td>Total</td>
        <td>{item.total}</td>
       
      </tr>
</tbody>
</table>
{
visible && <Inputmodal getmarks={getmarks}Visible={visible} close={()=>onclose()} id={id}/>}
<div > <Button className="Marks_Giver_Button" onClick={()=>{setVisible(true)}}>Update</Button></div>
        </div>

        
        </>
    
            
            )
           )}




           
           
        </div>
        
    
    )

       }

export default External;
