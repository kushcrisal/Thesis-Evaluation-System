import React, { useState,useEffect } from 'react'
import { Button,Dropdown,DropdownButton } from 'react-bootstrap'

import Axios from 'axios'



export default function AppDropBtn({handleDate}) {
    const [datelist,setDatelist]=useState([])
    useEffect(()=>{ 
        Axios.get('http://localhost:80/thesis/admin/Date/datelist.php')
        .then(response=>{
          setDatelist(response.data)
          handleDate(response.data[response.data.length-1])
          
        })

       
        
        },[])
    return (
        
            <DropdownButton id="dropdown-basic-button" title="  Date  ">
  
  {datelist.map((item,index)=>( <Dropdown.Item eventKey={index} onClick={()=>handleDate(item)}  >{item.year} {item.month}</Dropdown.Item>))}
  
</DropdownButton>
       
    )
}
