
import { Box, Typography, Card, Avatar } from "@mui/material";
import Slider from "react-slick";


const testimonials = [
  {
    id: 1,
    text: "I feel that this organization is really working a lot for such needy persons, and I would really like to appreciate them a lot. I also like to help such peoples. Thanks!",
    name: "Anita Mishra",
    image: "https://via.placeholder.com/100", 
    background: "#4FC3F7",
  },
  {
    id: 2,
    text: "I came across street kids who wanted to study. Therefore, I connected with Shivraj Foundation, which wholeheartedly helped kids in providing education and stationaries.",
    name: "Manish Pandey",
    image: "https://via.placeholder.com/100", 
    background: "#AB47BC",
  },
  {
    id: 3,
    text: "I feel that this organization is really working a lot for such needy persons, and I would really like to appreciate them a lot. I must say that the NGO is doing a great job.",
    name: "Rupesh Verma",
    image: "https://via.placeholder.com/100", 
    background: "#FF8A65",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box sx={{ backgroundColor: "#f9f9f9", padding: 4 }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 4 }}>
        Testimonials
      </Typography>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <Box
            key={testimonial.id}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Card
              sx={{
                maxWidth: 400,
                backgroundColor: testimonial.background,
                color: "white",
                borderRadius: 2,
                textAlign: "center",
                padding: 4,
                position: "relative",
              }}
            >
              <Typography variant="body1" sx={{ mb: 2 }}>
                {testimonial.text}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
                <Avatar
                  src={testimonial.image}
                  alt={testimonial.name}
                  sx={{
                    width: 60,
                    height: 60,
                    border: "2px solid white",
                    marginRight: 2,
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {testimonial.name}
                </Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{
                  position: "absolute",
                  bottom: -20,
                  right: 20,
                  opacity: 0.2,
                  fontSize: "100px",
                  lineHeight: 1,
                }}
              >
                &ldquo;
              </Typography>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Testimonial;
