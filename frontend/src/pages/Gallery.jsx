import axios from "axios";
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Container,
  } from '@mui/material';
import {useState, useEffect} from "react";
import Navbar from "../components/Navbar";
const Gallery = () => {

  
        const [gallery, setGallery] = useState([]);
      
        useEffect(() => {
          const fetchGallery = async () => {
            try {
              const res = await axios.get('http://localhost:9000/api/upload/gallery');
              setGallery(res.data.images);
              console.log(res.data)
              console.log("object")
            } catch (err) {
              console.error('Error fetching gallery:', err.message);
            }
          };
      
          fetchGallery();
        }, []);
  return (
   <>
     <Navbar/>
    <Container maxWidth="lg" style={{ marginTop: '20px', width:"100vw" }} >
      <Typography variant="h4" component="h1" gutterBottom sx={{textAlign:"center"}} >
        Image Gallery
      </Typography>
      <Grid container spacing={4}>
        {gallery.length > 0 ? (
          gallery.map((image) => (
            <Grid item xs={12} sm={6} md={4} key={image._id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={`http://localhost:9000/${image.imagePath}`}
                  alt={image.caption}
                />
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {image.caption}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography
            variant="h6"
            component="p"
            textAlign="center"
            style={{ width: '100%', marginTop: '20px' }}
          >
            No images found
          </Typography>
        )}
      </Grid>
    </Container>
   </>
  )
}

export default Gallery