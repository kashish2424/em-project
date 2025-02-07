package com.example.em_project;

import org.springframework.web.bind.annotation.RestController;

 import ch.qos.logback.core.model.Model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.ui.Model;  // This is crucial for Thymeleaf views






@RestController
@CrossOrigin("http://localhost:3000/")
public class EmpController {

   // List<Employee> employees = new ArrayList<>();
     // EmployeeService employeeService = new EmployeeServiceImpl();
   @Autowired 
   private EmployeeService employeeService;


  
   


      @GetMapping("employees")
    public List<Employee> getAllEmployees() {
        return employeeService.readEmployees();
    } 

    
    @GetMapping("employees/{id}")
    public Employee getEmployeeById(@PathVariable Long id) {
        return employeeService.readEmployee(id);
    }

   


    @PostMapping("employees")
    public String createEmployee(@RequestBody Employee employee) {
        return employeeService.createEmployee(employee);
    }

    @PutMapping("employees/{id}")
    public String putMethodName(@PathVariable Long id, @RequestBody Employee employee) {
        
        
        return employeeService.updateEmployee(id, employee);
    }

 




         



    @DeleteMapping("employees/{id}")
    public String deleteEmployee(@PathVariable Long id){
        if(employeeService.deleteEmployee(id))
        return "Delete Successfully";
        return "Not Found";


    }
    
    
    
}
