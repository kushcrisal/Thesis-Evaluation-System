import React, { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Axios from 'axios'



import  "../admin.css"
import "./marking.css"

export default function Marking() {


   const [cat1,setCat1]=useState(20)
   const [cat2,setCat2]=useState(10)
   const [cat3,setCat3]=useState(10)
   const [cat4,setCat4]=useState(20)
   const [cat5,setCat5]=useState(20)
   const [cat6,setCat6]=useState(20)
   const [marks,setMarks]=useState([])
   





    const getinfo=()=>{
      Axios.get('http://localhost:80/thesis/admin/Marking/get.php')
.then(response=>{
  setMarks(response.data)
  console.log(response.data)

})

    }
    const update=()=>{
      Axios.post('http://localhost:80/thesis/admin/Marking/update.php',{cat1:cat1,cat2:cat2,cat3:cat3,cat4:cat4,cat5:cat5,cat6:cat6,total:calculate()})
.then(response=>{
  console.log(response.data)
  getinfo()
 
})

    }

    


    useEffect(()=>{ 
      getinfo()
// Axios.get('http://localhost:80/thesis/datelist.php')
// .then(response=>{
//   setDatelist(response.data)
// })

},[])

const calculate=()=>{
  return parseInt(cat1)+parseInt(cat2)+parseInt(cat3)+parseInt(cat4)+parseInt(cat5)+parseInt(cat6)
}




    return (
        <div className="teacher-section">
   
        <text className="teacher-head">External</text>
        
       
       


                <div className="teacher-list">
                  <div className="marking-row margg">
                    <div className="marking-param">MID SUPERVISOR</div>
    <div className="marking-marks">{marks.map((item)=>(<text>{item.cat1}</text>))}</div>
                   <div className="marking-input"> <input value={cat1} onChange={(evt)=>setCat1(evt.target.value)}></input></div>

                  </div>
                  <div className="marking-row">
                    <div className="marking-param">MID EXTERNAL</div>
                    <div className="marking-marks">{marks.map((item)=>(<text>{item.cat2}</text>))}</div>
                   <div className="marking-input"> <input value={cat2} onChange={(evt)=>setCat2(evt.target.value)}></input></div>

                  </div>
                  <div className="marking-row">
                    <div className="marking-param">MID COMMITTEE</div>
                    <div className="marking-marks">{marks.map((item)=>(<text>{item.cat3}</text>))}</div>
                   <div className="marking-input"> <input value={cat3} onChange={(evt)=>setCat3(evt.target.value)}></input></div>

                  </div>

                  <div className="marking-row ">
                    <div className="marking-param">FINAL SUPERVISOR</div>
                    <div className="marking-marks">{marks.map((item)=>(<text>{item.cat4}</text>))}</div>
                   <div className="marking-input"> <input value={cat4} onChange={(evt)=>setCat4(evt.target.value)}></input></div>

                  </div>
                  <div className="marking-row">
                    <div className="marking-param">FINAL EXTERNAL</div>
                    <div className="marking-marks">{marks.map((item)=>(<text>{item.cat5}</text>))}</div>
                   <div className="marking-input"> <input value={cat5} onChange={(evt)=>setCat5(evt.target.value)}></input></div>

                  </div>
                  <div className="marking-row">
                    <div className="marking-param">FINAL COMMITTEE</div>
                    <div className="marking-marks">{marks.map((item)=>(<text>{item.cat6}</text>))}</div>
                   <div className="marking-input"> <input value={cat6} onChange={(evt)=>setCat6(evt.target.value)}></input></div>

                  </div>
                  <div className="marking-row">
                    <div className="marking-param">TOTAL</div>
                    <div className="marking-marks">{marks.map((item)=>(<text>{item.total}</text>))}</div>
                   <div className="marking-input"> {calculate()}</div>

                  </div>

<Button className="buttonstyle" onClick={()=>update()}>UPDATE</Button>
                  
      



         
         
         
           
        
      
       </div>

    </div>
    )
}
