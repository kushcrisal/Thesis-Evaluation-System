import React,{useState} from 'react'
import axios from 'axios';


import {Button,ButtonGroup,DropdownButton,Dropdown} from 'react-bootstrap'
const FormRegister = () => {


const year=[2074,2075,2076,2077,2078,2079,2080]
const year_month=["magh","chaitra","Ashwin"]

const [date,setDate]=useState("2077")
const [month,setMonth]=useState("chaitra")

const [firstname,setFirstname]=useState()
const [lastname,setLastname]=useState()
const [roll,setRoll]=useState()
const [thesis,setThesis]=useState()

const register=()=>{
 
  axios.post('http://localhost:80/thesis/insert.php/',{
         
         firstname:firstname,
         lastname:lastname,
         roll:roll,
         thesis:thesis,
         date:date,
         month:month
     })
     .then(function (response) {
      console.log(response);
      alert("successfully added")
    })

    .catch(function (error) {
      console.log(error);
      alert("failed")
    })
}






const setYear=(item)=>
{
  setDate(item)

}
const  setYearmonth=(item)=>{
  setMonth(item)
}
    return(
   <form className='form'>
        <h1>
         Add Student Details
        </h1>
        <div className='form-inputs'>
        <div className='Date'>

        <ButtonGroup>

<DropdownButton as={ButtonGroup} title="Year" id="bg-nested-dropdown">
  {year.map((item,index)=>( <Dropdown.Item eventKey={index} onClick={()=>setYear(item)}  >{item}</Dropdown.Item>))}
 
</DropdownButton>
<DropdownButton as={ButtonGroup} title="Month" id="bg-nested-dropdown">
    {year_month.map((item,index)=>(<Dropdown.Item eventKey={index} onClick={()=>setYearmonth(item)}>{item}</Dropdown.Item>))}
  
 
</DropdownButton>
</ButtonGroup>{''}
    <text className="yeardate"> {date}  </text>
    <text className="yearmonth"> {month}  </text>

</div>
          <label htmlFor='username'
          className='form-label'>
            Student Name 
          </label>
          <div className ="name">
            <input
            id='FirstName'
            type='text'
            name='StudentName '
            className='form-input'
            placeholder='First Name'
            onChange={(event)=>setFirstname(event.target.value)}
            />
            <input
              id='LastName'
            type='text'
            name='StudentName '
            className='form-input'
            placeholder='Last Name'
            onChange={(event)=>setLastname(event.target.value)}
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
            />
            </div>

           
         
          

       



 


<Button variant="primary" className="registerbutton" onClick={()=>register()}>
    Register
  </Button>{' '}

            </form>
           
          
            
           
    );
};

export default FormRegister
