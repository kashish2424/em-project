import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import EmployeeService from '../service/EmployeeService'

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id:"",
    name:"",
    phone:"",
    email:"",
  });



  const handleChange = (e) =>{
    const value = e.target.value;
    setEmployee({...employee, [e.target.name]: value})
  }

  const saveEmployee = (e) =>{
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
    .then((Response) => {
      console.log("saved",Response);
      navigate("/")
    })
    .catch((error) => {
      console.log(error);

    });
    

  }

  const reset = (e) =>{
  e.preventDefault();
  setEmployee({
    id:"",
    name:"",
    phone:"",
    email:"",

  });
  }

  const navigate =useNavigate();
  return (
    
    <div className="max-w-xl mx-20 bg-slate-800 my-10 rounded py-2 px-8">
        <div className="text-4xl tracking-wider font-bold text-center py-4 px-10 ">
        <p>Add New Employee</p>
         </div>
        <div className="mx-18 my-2 ">
        <input
        type="text"
        name="name"
        value={employee.name}
        onChange={(e)=> handleChange(e)}
        className="w-full py-2 my-4 text-slate-800" placeholder='Name'></input>

        <input
        type="number"
        name="phone"
        value={employee.phone}
        onChange={(e)=> handleChange(e)}
        className="w-full py-2 my-4 text-slate-800" placeholder='Phone'></input>

        <input
        type="email"
        name="email"
        value={employee.email}
        onChange={(e)=> handleChange(e)}
        className="w-full py-2 my-4 text-slate-800" placeholder='Email'></input>
        </div>
        <div className="flex my-4 space-x-4 px-10 ">
        <button
        onClick={saveEmployee}
        className="bg-green-400 hover:bg-green-700 py-2 px-10 rounded" >Save</button>
        <button
        onClick={reset}
        className="bg-green-400 hover:bg-blue-700 py-2 px-10 rounded" >Clear</button>
        <button 
        onClick={()=>navigate("/")}
        className="bg-green-400 hover:bg-red-700 py-2 px-10 rounded" >Cancel</button>
        </div>
    </div>
   
   
  )
}

export default AddEmployee