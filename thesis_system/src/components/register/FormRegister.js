import React,{useState} from 'react'
import axios from 'axios';


import {Button,ButtonGroup,DropdownButton,Dropdown} from 'react-bootstrap'




import AppButton from "../reusable components/AppDropBtn"
const FormRegister = () => {




const [date,setDate]=useState("2078")
const [month,setMonth]=useState("chaitra")

const [firstname,setFirstname]=useState()
const [lastname,setLastname]=useState()
const [roll,setRoll]=useState()
const [thesis,setThesis]=useState()

const register=()=>{
 
  axios.post('http://localhost:80/thesis/student/insert.php/',{
         
         firstname:firstname,
         lastname:lastname,
         roll:roll,
         thesis:thesis,
         date:date,
         month:month
     })
     .then(function (response) {
       alert(response.data)
     
      
    })

    .catch(function (error) {
      console.log(error);
      alert("failed")
    })

    setFirstname("")
    setLastname("")
    setRoll("")
    setThesis("")
}






const setYearMonth=(item)=>
{
  setDate(item.year)
  setMonth(item.month)

}

    return(
   <form className='form'>
        <h1>
         Add Student Details
        </h1>
        <div className='form-inputs'>
        <div className='Date'>
        <AppButton handleDate={setYearMonth}/>

{''}
    <text className="yeardate"> {date}  </text>
    <text className="yearmonth"> {month}  </text>

</div>
          <label htmlFor='username'
          className='form-label'>
            Student Name 
          </label>
          <div className ="name1">
            <input
            id='FirstName'
            type='text'
            name='StudentName '
            className='form-input'
            placeholder='First Name'
            value={firstname}
            onChange={(event)=>setFirstname(event.target.value)}
            />
            <input
              id='LastName'
            type='text'
            name='StudentName '
            className='form-input'
            placeholder='Last Name'
            onChange={(event)=>setLastname(event.target.value)}
            value={lastname}
            />
            </div>
            </div>

            <div className='form-inputs'>
          <label htmlFor='Rollno'
          className='form-label'>
            Rollno
          </label>
            <input
            
            type='text'
            name='Rollno'
            className='form-input'
            placeholder='Roll'
            onChange={(event)=>setRoll(event.target.value)}
            value={roll}
            />
            </div>


            <div className='form-inputs'>
          <label htmlFor='Thesis Title'
          className='form-label'>
            Thesis Title
          </label>
            <input
            
            type='text'
            name='Thesis Title'
            className='form-input'
            placeholder='Thesis-Title'
            onChange={(event)=>setThesis(event.target.value)}
            value={thesis}
            />
            </div>

           
         
          

       



 


<Button variant="primary" className="registerbutton" onClick={()=>register()}>
    Register
  </Button>{' '}

            </form>
           
          
            
           
    );
};

export default FormRegister
