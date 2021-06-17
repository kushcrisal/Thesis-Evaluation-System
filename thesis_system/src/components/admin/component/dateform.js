import React, { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Axios from 'axios'



import  "../admin.css"







export default function Dateform() {

    const fullmonth=["Baisakh","Jestha","Ashar","Shrawan","Bhadra","Ashwin","Kartik","Mangsir","Poush","Magh","Falgun","Chaitra"]
    
    const [datelist,setDatelist]=useState([])
    const [year,setYear]=useState()
    const[month,setMonth]=useState()

    const getinfo=()=>{
        Axios.get('http://localhost:80/thesis/admin/Date/datelist.php')
    .then(response=>{
      setDatelist(response.data)
    })


    }

    useEffect(()=>{ 
        getinfo()
    
    
    },[])

    const deletedate=(dateid)=>{
        Axios.post('http://localhost:80/thesis/admin/Date/deleteDate.php',
        {dateid:dateid})
        .then(response=>{
            getinfo()
         
          console.log(response)

          if(response.data==="failure"){
        alert("Unable to delete")
      }
      
          
          
        
          
        })
       
      
      }
      const addDate=()=>{
     
        Axios.post('http://localhost:80/thesis/admin/Date/insertDate.php/',{year:year,month:month}).then(response=>{
    
        
        console.log(response.data)
        getinfo()
        })
    
        .catch(function (error) {
          console.log(error);
          alert("failed")
        })
    
        
    
        setYear("")
        setMonth("")
    
    
    }
    


    
    return (
        
        <div className="teacher-section">
            {console.log(datelist)}
                <text className="teacher-head">Date</text>
                
                <div className="add-teacher">
                    <input className="input-box" placeholder="Enter Year" type="numeric" value={year} onChange={(evt)=>setYear(evt.target.value)}/>
                    <input className="input-box" list="month" placeholder="Enter Month" value={month} onChange={(evt)=>setMonth(evt.target.value)}/>
                    <datalist id="month">
                    { fullmonth.map((item)=>(
                        <option value={item}/>

                            )) }
 
  


                        </datalist>
                    <Button className="add-button" onClick={addDate}>Add Date</Button>
                   

                </div>
                <div className="hborder">
                        </div>


                <div className="teacher-list">
               
                {
                        datelist.map((item,index)=>(
                            <div className="list-box">
                            
                            <div className="list-name">
                                <text className="Teacher-id">{index+1}</text>
                                
                        <text className="text-name">{item.year} {item.month}</text>
                                <Button variant="danger" className="name-delete" onClick={()=>deletedate(item.dateid)}>Delete</Button>
                            </div>
                            <div className="box-border"></div>
                    

                        

                         </div>
                        ))
                    }


  
                  
                  
                  
                    
                 
               
                </div>

                
                
                </div>
      
    )
}
