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
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const { data } = await axios.post('http://localhost:9000/api/auth/register', {
        name,
        email,
        password,
      });
      window.location.reload();
      alert(data.message || 'Registration successful!');
    } catch (err) {
        console.log(err)
      alert(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 10 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Admin Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
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
            <TextField
              label="Confirm Password"
              variant="outlined"
              fullWidth
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              Register
            </Button>
            <Typography sx={{ textAlign: 'center' }}>OR</Typography>
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
              to="/login"
            >
              Login
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default Register;
