import React from "react";
import { Box, Grid, Typography, Stepper, Step, StepLabel, StepContent, CssVarsProvider, autocompleteClasses } from "@mui/material";
const educationData = [
  {
    year: "2025",
    title: "AWS Certified Solutions Architect",
    description: "Achieved the AWS Certified Solutions Architect - Associate certification, demonstrating expertise in designing scalable cloud solutions.",
  },
  {
    year: "2024",
    title: "Bachelor's in Computer Science",
    description: "Graduated from Institute Of Technology, Nirma University with a focus on software engineering, data structures, and algorithms.",
  },
  {
    year: "2020",
    title: "High School Diploma",
    description: "Completed high school from delhi public school bopal and achieved 96%.",
  },
];

export const Education = () => {
  return (
    <Box sx={{ backgroundColor: "var(--color-bg)", py: 6 }} id="education">
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* Left Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="../../../assets/about/education.png"
            alt="Education"
            sx={{
              width:"60%",
              height: "auto",
              borderRadius: 50,
              boxShadow: 3,
              marginLeft: "80px",
            }}
          />
        </Grid>

        {/* Right Stepper Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ color: "var(--color-text)", mb: 4, fontWeight: "bold", textAlign: { xs: "center", md: "left" } }}
          >
            Education
          </Typography>
          <Stepper orientation="vertical" connector={null}>
            {educationData.map((item, index) => (
              <Step key={index} active>
                <StepLabel>
                  <Typography variant="h6" sx={{ color: "var(--color-primary)", fontWeight: "bold" }}>
                    {item.year}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "var(--color-text)" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "var(--color-text)", mt: 1 }}>
                    {item.description}
                  </Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Grid>
      </Grid>
    </Box>
  );
};

