
import { Box, Typography, Button } from "@mui/material";
const Main = () => {
  return (

      <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#495057", 
        backgroundImage: "url('https://shivrajfoundation.org.in/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-05-at-23.54.22_ec7f6136.jpg')", 
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "#fff",
      }}
    >
    
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

    
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: 3,
        }}
      >
        <Typography
          variant="h3"
          sx={{
           
            fontWeight: "bold",
            marginBottom: 2,
          }}
        >
          सर्वे भवन्तु सुखिनः
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#e83e8c",
              "&:hover": { backgroundColor: "#c72d70" },
            }}
          >
            Donate Now
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#007bff",
              "&:hover": { backgroundColor: "#0056b3" },
            }}
          >
            Discover More
          </Button>
        </Box>
      </Box>
    </Box>

  )
}

export default Main
