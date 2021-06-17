import React, { useState,useEffect } from 'react'
import Axios from 'axios'



export default function AppTeacherInput({handleInput,teacher}) {

    
const [teacherlist,setTeacherlist]=useState([])

    useEffect(()=>{ Axios.get('http://localhost:80/thesis/admin/Teacher/teacherlist.php')
.then(response=>{
  setTeacherlist(response.data)
})


},[])
    
    return (
        <>
        <input  list="teacherlist" onChange={(event)=>handleInput(event.target.value)  }    value={teacher}/>

<datalist id="teacherlist">
  { teacherlist.map((item)=>(
     <option value={item.name}/>

  )) }
 
  


</datalist>
</>
        
            
       
    )
}
