import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [employee, setEmp] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/employees').then((res) => {
      setEmp(res.data);
    });
  }, []);

  function deleteEmp(p) {
    axios.delete('http://localhost:4000/employees/remove/' + p).then((res) => {
      alert('Data deleted');
    }).catch((error) => {
      console.log(error);
    });
  }

  const navigate = useNavigate();

  function updateEmp(employee) {
    navigate('/add', { state: { employee } });
  }

  const user = localStorage.getItem('username');

  return (
    <div><br /><br /><br />
      <h4>Welcome {user}</h4>
      <Grid container spacing={2}>
        {employee.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.empId}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '300px' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography gutterBottom variant="h5" component="div">
                  {item.empName}
                </Typography>
                <Typography variant="body2">
                  <strong>Designation:</strong> {item.empDesignation}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Department:</strong> {item.empDepartment}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Location:</strong> {item.empLocation}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Salary:</strong> {item.empSalary}
                </Typography>
                <Typography><br />
                  <Button sx={{ backgroundColor: '#C62E2E', color: 'white' }} onClick={() => updateEmp(item)}>Edit</Button> <br />
                  <br />
                  <Button sx={{ backgroundColor: 'black', color: 'white' }} onClick={() => deleteEmp(item._id)}>Delete</Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Home;
