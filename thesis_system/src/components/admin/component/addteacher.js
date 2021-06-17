import React, { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Axios from 'axios'



import  "../admin.css"

export default function Addteacher() {


    const [teacherlist,setTeacherlist]=useState([])
    const [name,setname]=useState()



    const getinfo=()=>{
      Axios.get('http://localhost:80/thesis/admin/Teacher/teacherlist.php')
.then(response=>{
  setTeacherlist(response.data)
})

    }
    useEffect(()=>{ 
      getinfo()
// Axios.get('http://localhost:80/thesis/datelist.php')
// .then(response=>{
//   setDatelist(response.data)
// })

},[])

const deleteteacher=(id)=>{
    Axios.post('http://localhost:80/thesis/admin/Teacher/deleteTeacher.php',
    {id:id})
    .then(response=>{
  
     
      console.log(response)
      getinfo()
      
      if(response.data==="failure"){
        alert("Unable to delete")
      }
      
      
      
    
      
    })
   
  
  }
const addteacher=()=>{
     
    Axios.post('http://localhost:80/thesis/admin/Teacher/insertTeacher.php/',{name:name}).then(response=>{

    getinfo()

    
    console.log(response.data)
    })

    .catch(function (error) {
      console.log(error);
      alert("failed")
    })

    

    setname("")


}



    return (
        <div className="teacher-section">
            {console.log(teacherlist)}
        <text className="teacher-head">TEACHER</text>
        
        <div className="add-teacher">
            <input className="input-box" placeholder="Enter Teacher name" value={name} onChange={(event)=>setname(event.target.value)}/>
            <Button className="add-button" onClick={()=>addteacher()} >Add Teacher</Button>
           
           

        </div>
        <div className="hborder">
                </div>


                <div className="teacher-list">
       
       {
              teacherlist.map((item,index)=>(
                   <div className="list-box">
                   
                   <div className="list-name">
                       <text className="Teacher-id">{index+1}</text>
                       
               <text className="text-name">{item.name}</text>
                       <Button variant="danger" className="name-delete" onClick={()=>deleteteacher(item.Teacherid)}>Delete</Button>
                   </div>
                   <div className="box-border"></div>
           

               

                </div>
               ))
           }



         
         
         
           
        
      
       </div>

    </div>
    )
}
