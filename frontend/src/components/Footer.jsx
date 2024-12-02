
import { Box, Typography, Grid, Link } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1a202c",
        color: "white",
        padding: "40px 20px",
        mt: 4,
      }}
    >
      <Grid container spacing={4}>
      
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            About
          </Typography>
          <Typography variant="body2">
            The organization is actively engaged in various social sectors such
            as education, health, environment, women empowerment, child
            development, poverty, and much more.
          </Typography>
        </Grid>

  
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Contact
          </Typography>
          <Typography variant="body2" sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <LocationOn sx={{ mr: 1 }} />
            Ashiyana Lucknow - 226012
          </Typography>
          <Typography variant="body2" sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Email sx={{ mr: 1 }} />
            shivrajfoundation00101@gmail.com
          </Typography>
          <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
            <Phone sx={{ mr: 1 }} />
            +91-9598095385
          </Typography>
        </Grid>

     
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Useful Links
          </Typography>
          <Link href="#" color="inherit" underline="hover" sx={{ display: "block", mb: 1 }}>
            Home
          </Link>
          <Link href="#" color="inherit" underline="hover" sx={{ display: "block", mb: 1 }}>
            About
          </Link>
          <Link href="#" color="inherit" underline="hover" sx={{ display: "block", mb: 1 }}>
            Project
          </Link>
          <Link href="#" color="inherit" underline="hover" sx={{ display: "block" }}>
            Members
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Important
          </Typography>
          <Link href="#" color="inherit" underline="hover" sx={{ display: "block", mb: 1 }}>
            Gallery
          </Link>
          <Link href="#" color="inherit" underline="hover" sx={{ display: "block", mb: 1 }}>
            Support Us
          </Link>
          <Link href="#" color="inherit" underline="hover" sx={{ display: "block" }}>
            Join Us
          </Link>
        </Grid>
      </Grid>

   
      <Box
        sx={{
          textAlign: "center",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          mt: 4,
          pt: 2,
        }}
      >
        <Typography variant="body2" color="inherit">
          ©2024 SHIVRAJ HELPING HAND FOUNDATION. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
