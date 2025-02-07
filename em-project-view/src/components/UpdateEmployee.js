import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import EmployeeService from '../service/EmployeeService'

const UpdateEmployee = () => {

    const { id } = useParams();
    const navigate =useNavigate();
    const [employee, setEmployee] = useState({
        id:id,
        name:"",
        phone:"",
        email:"",
      });
    
    
    
      const handleChange = (e) =>{
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]: value})
      }

       useEffect(() => {
          const fetchData = async () =>{
           
            try{
              const Response = await EmployeeService.getEmployeeById(employee.id);
              setEmployee(Response.data);
            }catch(error){
              console.log(error);
            }
           
          };
          fetchData();
      
        }, []);
      
    
      const updateEmployee = (e) =>{
        e.preventDefault();
        EmployeeService.updateEmployee(employee,id)
        .then((Response) => {
          console.log("saved",Response);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
    
        });
        
    
      };
    
     
    
      
      return (
        
        <div className="max-w-xl mx-20 bg-slate-800 my-10 rounded py-2 px-8">
            <div className="text-4xl tracking-wider font-bold text-center py-4 px-10 ">
            <p>Update  Employee</p>
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
            onClick={updateEmployee}
            className="bg-green-400 hover:bg-green-700 py-2 px-10 rounded" >Update</button>
           
            <button 
            onClick={()=>navigate("/")}
            className="bg-red-400 hover:bg-red-700 py-2 px-10 rounded" >Cancel</button>
            </div>
        </div>
       
       
      );
    
}

export default UpdateEmployee