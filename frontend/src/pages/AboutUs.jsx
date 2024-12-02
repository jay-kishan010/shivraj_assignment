
import { Box, Typography, Grid, Divider } from "@mui/material";

const AboutUs = () => {
  return (
    <>
    
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
      
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#495057",
          backgroundImage: "url('https://img.freepik.com/premium-photo/crumpled-used-white-wrapping-paper-texture-background_108146-1924.jpg')", 
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          color: "#fff",
        }}
      >

        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#000",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          About Us
        </Typography>
      </Box>

     
      <Box sx={{ mb: 3 }}>
        <Divider
          variant="middle"
          sx={{
            width: "150px",
            height: "3px",
            backgroundColor: "#e91e63",
            margin: "0 auto 10px auto",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
         
          <Divider
            sx={{
              flex: 1,
              borderColor: "#e91e63",
            }}
          />

         
          <Box
            sx={{
             
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            

            }}
          >
            <img width={"60px"} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSD9aRKlLVWB1tGHf7kUrgvUn91tuRFHk7A7MNAWtMZ3u6ulZ7y" alt="" />

          </Box>

       
          <Divider
            sx={{
              flex: 1,
              borderColor: "#e91e63",
            }}
          />
        </Box>


      </Box>

      <Grid container spacing={4} justifyContent="center" alignItems="center">
    
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            sx={{
              textAlign: "justify",
              lineHeight: "1.8",
              color: "#333",
              fontSize: "16px",
              mb: 2,
            }}
          >
            <b>SHIVRAJ HELPING HAND FOUNDATION</b> is a reputed non-governmental
            organization based in Uttar Pradesh, Lucknow, registered under the
            Societies Registration Act, 1860 (
            <b>Registration No. LUC/11262/2022-2023</b>). The organization is
            actively engaged in various social sectors such as education,
            health, environment, women empowerment, child development, poverty
            alleviation, human rights, spiritual, and historical awareness, and
            economic development, among others.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "justify",
              lineHeight: "1.8",
              color: "#333",
              fontSize: "16px",
            }}
          >
            Our organization’s goal is not only to assist in solving these
            issues but also to raise awareness about these issues and empower
            people to be able to solve them on their own. Awareness empowers
            people with knowledge not only about their rights but also enables
            them to play an active role in the development of society as
            responsible citizens.
          </Typography>
        </Grid>

   
        <Grid item xs={12} md={6} textAlign="center">
          <Box
            component="img"
            src="https://shivrajfoundation.org.in/wp-content/uploads/2024/08/Aboutx.png"
            alt="Team Shivraj"
            sx={{
              maxWidth: "100%",
              height: "auto",


            }}
          />

        </Grid>
      </Grid>

      <Box sx={{ mb: 3 }}>
        <Divider
          variant="middle"
          sx={{
            width: "150px",
            height: "3px",
            backgroundColor: "#e91e63",
            margin: "0 auto 10px auto",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
        
          <Divider
            sx={{
              flex: 1,
              borderColor: "#e91e63",
            }}
          />

       
          <Box
            sx={{
             
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              

            }}
          >
            <img width={"60px"} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSD9aRKlLVWB1tGHf7kUrgvUn91tuRFHk7A7MNAWtMZ3u6ulZ7y" alt="" />

          </Box>

     
          <Divider
            sx={{
              flex: 1,
              borderColor: "#e91e63",
            }}
          />
        </Box>


      </Box>


      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid size={5}>
          <Box
            component="img"
            src="https://shivrajfoundation.org.in/wp-content/uploads/2024/08/Aboutx.png"
            alt="Team Shivraj"
            sx={{
              maxWidth: "100%",
              height: "auto",


            }}
          />
        </Grid>
        <Grid size={5}>

          <Typography
            variant="body1"
            sx={{
              textAlign: "justify",
              lineHeight: "1.8",
              color: "#333",
              fontSize: "16px",
              mb: 2,
            }}
          >
            <b>SHIVRAJ HELPING HAND FOUNDATION</b> is a reputed non-governmental
            organization based in Uttar Pradesh, Lucknow, registered under the
            Societies Registration Act, 1860 (
            <b>Registration No. LUC/11262/2022-2023</b>). The organization is
            actively engaged in various social sectors such as education,
            health, environment, women empowerment, child development, poverty
            alleviation, human rights, spiritual, and historical awareness, and
            economic development, among others.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "justify",
              lineHeight: "1.8",
              color: "#333",
              fontSize: "16px",
            }}
          >
            Our organization’s goal is not only to assist in solving these
            issues but also to raise awareness about these issues and empower
            people to be able to solve them on their own. Awareness empowers
            people with knowledge not only about their rights but also enables
            them to play an active role in the development of society as
            responsible citizens.
          </Typography>
        </Grid>


      </Grid>


     
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Divider
          sx={{
            flex: 1,
            borderColor: "#e91e63",
            borderWidth: "2px",
          }}
        />
        <Box
          sx={{
            mx: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#e91e63",
            color: "#fff",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
          }}
        >
          🤝
        </Box>
        <Divider
          sx={{
            flex: 1,
            borderColor: "#e91e63",
            borderWidth: "2px",
          }}
        />
      </Box>

    
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, 
          alignItems: "center",
          justifyContent: "center",
          gap: "40px", 
        }}
      >
      
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src="https://shivrajfoundation.org.in/wp-content/uploads/2024/08/Aboutx.png"
            alt="Team Hands"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </Box>

      
        <Box sx={{ flex: 1, textAlign: "left" }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "bold", marginBottom: "20px" }}
          >
            We Are A Strong Team
          </Typography>
          <Typography
            variant="body1"
            sx={{ lineHeight: "1.8", color: "text.secondary" }}
          >
            Our team is composed of community leaders, educators, volunteers,
            and professionals who work tirelessly to design and implement impactful
            programs. We believe in the power of collaboration and the importance
            of community-driven solutions.
          </Typography>
          <Typography
            variant="body1"
            sx={{ lineHeight: "1.8", marginTop: "10px", color: "text.secondary" }}
          >
            Join us on our journey to empower, educate, and elevate the lives of
            those we serve. Together, we can make a lasting change.
          </Typography>
        </Box>
      </Box>




   
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Divider
          sx={{
            flex: 1,
            borderColor: "#e91e63",
            borderWidth: "2px",
          }}
        />
        <Box
          sx={{
            mx: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#e91e63",
            color: "#fff",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
          }}
        >
          🤝
        </Box>
        <Divider
          sx={{
            flex: 1,
            borderColor: "#e91e63",
            borderWidth: "2px",
          }}
        />
      </Box>

     

      <Box sx={{ padding: "40px" }}>
     
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, 
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
         
          <Box
            sx={{
              flex: "0 0 150px",
              marginBottom: { xs: "20px", md: "0" },
              marginRight: { md: "20px" },
            }}
          >
            <img
              src="https://via.placeholder.com/150"
              alt="Mr. SHIVAM TIWARI"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Box>

         
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: "8px" }}
            >
              Mr. SHIVAM TIWARI - President & Founder
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              The man behind the vision. A great personality working for the
              wellness of mankind and nation as a whole.
            </Typography>
          </Box>
        </Box>

       
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
       
          <Box
            sx={{
              flex: "0 0 150px",
              marginBottom: { xs: "20px", md: "0" },
              marginRight: { md: "20px" },
            }}
          >
            <img
              src="https://via.placeholder.com/150" 
              alt="Mr. RAJAN TIWARI"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Box>

          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: "8px" }}
            >
              Mr. RAJAN TIWARI - Treasurer & Co-Founder
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              The man behind the vision. A great personality working for the
              wellness of mankind and nation as a whole.
            </Typography>
          </Box>
        </Box>
      </Box>


    </Box>
      <Box sx={{
        position:"relative",
        backgroundImage: 'url("https://wecarefoundation.net.in/wp-content/uploads/2020/07/contact-hero.jpg")',
        width: "100vw",
        height: "600px",
        // display: "flex",
        color: "#fff",
        // backgroundSize: "contain",
backgroundSize:"100vw",
        // backgroundPosition: "center",
        backgroundSize: "contain", 
        backgroundRepeat: "no-repeat",
      }}>
        <Box sx={{ maxWidth: "500px" }}>
          <Typography variant="h2">Become a volunteer</Typography>
        </Box>
      </Box>
                </>

  );
};

export default AboutUs;
