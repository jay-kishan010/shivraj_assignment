import  { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
} from '@mui/material';

const Add_Image = () => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
 

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token'); 

    if (!token) {
     console.log("user not log in")
      return;
    }

    const formData = new FormData();

    formData.append('caption', caption);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:9000/api/upload/img', formData, {

        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(token)

     console.log(response)
      setCaption('');
      setImage(null);
    } catch (error) {
      console.error(error);
    
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: "10%" }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Upload Image
        </Typography>


        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Caption"
              variant="outlined"
              fullWidth
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ borderRadius: '20px', textTransform: 'none' }}
            >
              Upload
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default Add_Image;
