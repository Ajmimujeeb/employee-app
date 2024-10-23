import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'; 
import { useLocation, useNavigate } from 'react-router-dom';

const Add = () => {
  const [employee, setEmp] = useState({
    empID: '',
    empName: '',
    empDesignation: '',
    empDepartment: '',
    empLocation: '', 
    empSalary: ''
  });

  const navigate = useNavigate();
  const location = useLocation();

  const fetchValue = (e) => {
    setEmp({ ...employee, [e.target.name]: e.target.value });
  };

  const sendData = () => {
    if (location.state != null) {      // If state is not null, go for PUT operation
      axios.put('http://localhost:4000/employees/edit/' + location.state.employee._id, employee)
        .then((res) => {   
          alert('Data updated');
          navigate('/home');  // Navigate to home after update
        }).catch((error) => {
          console.log(error);
        });
    } else {  // If state is null, go for POST operation
      axios.post('http://localhost:4000/employees/add', employee)
        .then((res) => {
          navigate('/home');
        }).catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (location.state != null) {
      setEmp({
        empID: location.state.employee.empID,
        empName: location.state.employee.empName,
        empDesignation: location.state.employee.empDesignation,
        empDepartment: location.state.employee.empDepartment,
        empLocation: location.state.employee.empLocation,
        empSalary: location.state.employee.empSalary
      });
    }
  }, [location.state]);

  return (
    <div>
      <h2>{location.state ? "Edit Employee" : "New Employee"}</h2>
      <TextField 
        id="standard-basic" 
        label="Employee ID" 
        variant="standard" 
        name="empID" 
        value={employee.empID}
        onChange={fetchValue} 
      />  
      <br />
      <TextField 
        id="standard-basic" 
        label="Employee Name" 
        variant="standard" 
        name="empName" 
        value={employee.empName}
        onChange={fetchValue} 
      /> 
      <br />
      <TextField 
        id="standard-basic" 
        label="Employee Designation" 
        variant="standard" 
        name="empDesignation"
        value={employee.empDesignation} 
        onChange={fetchValue} 
      /> 
      <br />
      <TextField 
        id="standard-basic" 
        label="Employee Department" 
        variant="standard" 
        name="empDepartment" 
        value={employee.empDepartment}
        onChange={fetchValue} 
      /> 
      <br />
      <TextField 
        id="standard-basic" 
        label="Employee Location" 
        variant="standard" 
        name="empLocation" 
        value={employee.empLocation}
        onChange={fetchValue} 
      /> 
      <br />
      <TextField 
        id="standard-basic" 
        label="Employee Salary" 
        variant="standard" 
        name="empSalary" 
        value={employee.empSalary}
        onChange={fetchValue} 
      /> 
      <br /> 
      <br />
      <Button 
        sx={{ backgroundColor: '#C5705D' }} 
        variant="contained" 
        onClick={sendData}
      >
        Submit
      </Button>
    </div>
  );
};

export default Add;
