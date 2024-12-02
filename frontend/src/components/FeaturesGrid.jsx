
import { Grid, Card, CardContent, Typography, Button, Box } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import SchoolIcon from '@mui/icons-material/School';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const features = [
  {
    icon: <FavoriteIcon color="primary" sx={{ fontSize: 50 }} />,
    title: "Healthy Food",
    description:
      "We provide access to nutritious food through community programs, education, and partnerships, ensuring everyone can lead a healthy life.",
    buttonText: "Support Us",
  },
  {
    icon: <SchoolIcon color="primary" sx={{ fontSize: 50 }} />,
    title: "Education",
    description:
      "We empower communities by providing access to quality education, enabling children and adults to build brighter, more sustainable futures.",
    buttonText: "Support Us",
  },
  {
    icon: <MedicalServicesIcon color="primary" sx={{ fontSize: 50 }} />,
    title: "Medical",
    description:
      "We offer essential medical services and health education, ensuring underserved communities have access to proper healthcare and well-being.",
    buttonText: "Support Us",
  },
  {
    icon: <LocalDrinkIcon color="primary" sx={{ fontSize: 50 }} />,
    title: "Pure Water",
    description:
      "We ensure access to clean and safe drinking water, promoting health and well-being in underserved communities in urgent need.",
    buttonText: "Support Us",
  },
  {
    icon: <FavoriteIcon color="primary" sx={{ fontSize: 50 }} />,
    title: "Love & Care",
    description:
      "We spread love and care through compassionate support, nurturing the well-being of those in need within our communities.",
    buttonText: "Support Us",
  },
  {
    icon: <TravelExploreIcon color="primary" sx={{ fontSize: 50 }} />,
    title: "Travel Activities",
    description:
      "We organize travel activities to raise awareness and support for our causes, fostering community engagement and impactful experiences.",
    buttonText: "Support Us",
  },
];

const FeaturesGrid = () => {
  return (
    <Box sx={{ padding: "40px" }}>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ textAlign: "center", padding: "20px", boxShadow: 3 }}>
              <CardContent>
                <Box sx={{ marginBottom: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {feature.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: 2,
                    backgroundColor: "#e83e8c",
                    "&:hover": { backgroundColor: "#c72d70" },
                  }}
                >
                  {feature.buttonText}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesGrid;
