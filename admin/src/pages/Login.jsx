import { useState } from 'react';
import axios from 'axios';
import {
  
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Stack,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('https://shivraj-assignment-back.onrender.com/api/auth/login', { email, password });
      navigate('/add-images');
      localStorage.setItem('token', data.token);
      window.location.reload();
      alert('Login successful!');
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 10 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Admin Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
          
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

         
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{
                borderRadius: '25px',
                textTransform: 'none',
              }}
            >
              Login
            </Button>
      <Typography sx={{textAlign:"center"}}>OR</Typography>
            <Button
            
              variant="contained"
              color="secondary"
              size="large"
              fullWidth
              sx={{
                borderRadius: '25px',
                textTransform: 'none',
              }}
              component={Link}
              to="/register"
            >
              Register
            </Button>

          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
