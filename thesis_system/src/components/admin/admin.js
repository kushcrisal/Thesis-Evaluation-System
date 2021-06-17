import React, { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Axios from 'axios'



import TeacherForm from "./component/addteacher"
import Dateform from "./component/dateform"
import External from "./component/addexternal"
import Marking from "./component/Marking"
import "./admin.css"




export default function Admin() {



    const [section,setSection]=useState("Teacher")
    
    


  
    
    return (
        <form className="adminbody">

            <div className="button-section">
                <Button className={section==="Teacher"?"selected-button":"choice-button"} onClick={()=>setSection("Teacher")}>Teacher</Button>
                <Button className={section==="Date"?"selected-button":"choice-button"}  onClick={()=>setSection("Date")}>Date</Button>
                <Button className={section==="external"?"selected-button":"choice-button"}  onClick={()=>setSection("external")}>External</Button>
                <Button className={section==="marking"?"selected-button":"choice-button"}  onClick={()=>setSection("marking")}>Marking</Button>
            </div>
            <div className="admin-border"></div>
            {

                section==="Teacher" && <TeacherForm/>

               
            }
           

            { section==="Date" && <Dateform/>  }
            { section==="external" && <External/>  }
            { section==="marking" && <Marking/>  }
            

            
            </form>
    )
}
