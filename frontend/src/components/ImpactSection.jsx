
import { Box, Typography, Grid, Button } from '@mui/material';

const ImpactSection = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', padding: 4 , height:"70%"}}>
    
      <Box
        sx={{
          flex: 1,
          backgroundImage: 'url("https://img.freepik.com/premium-photo/children-india-with-happy-expression_470436-1606.jpg")', // Replace with actual image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: { xs: '300px', md: '600px' },
          borderRadius: 2,
        }}
      ></Box>

     
      <Box sx={{ flex: 1, paddingLeft: { xs: 0, md: 4 }, marginTop: { xs: 4, md: 0 } }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#e91e63', marginBottom: 2 }}>
          How you’re changing individual’s lives
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: 2 }}>
          Helping Hands
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          We all together as a catalyst – making a difference in the thousands of needy persons in trouble who are not able to get
          basic facilities, food, and justice.
        </Typography>

      
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: 2 }}>
          Education
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 4 }}>
          Mobile School has been brightening the future of street kids. By offering all the provisions to kids, we are making a
          difference in thousands of needy students who were not able to get the facilities.
        </Typography>

     
        <Button variant="contained" color="primary">
          Support us
        </Button>
      </Box>
    </Box>
  );
};

export default ImpactSection;
