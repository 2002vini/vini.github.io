import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardActions, Button } from "@mui/material";
import { motion } from "framer-motion";

const baseUrl = import.meta.env.BASE_URL;
const projectsData = [
  {
    title: "LLM Health Chatbot",
    description: "Built an AI-powered chatbot that reads prescriptions using Azure OCR and provides medical assistance.",
    techStack: ["Python", "FastAPI", "Azure OCR", "LLMs"],
    image: `${baseUrl}/assets/projects/chatbot.webp`, // Replace with project-specific image
    link: "https://github.com/your-repo",
  },
  {
    title: "Property Management Website",
    description: "Created a full stack website in java using jsp, servlet, html and css for management of profile",
    techStack: ["AI", "Machine Learning", "Blockchain", "Smart Contracts"],
    image: `${baseUrl}/assets/projects/java.jpg`,
    link: "https://github.com/your-repo",
  },
  {
    title: "Document Management system using Blockchain and ipfs",
    description: "Created a digilocker using nextjs, ipfs and blockchain for management of documents",
    techStack: ["HTML/CSS", "Blockchain", "Nextjs", "IPFS"],
    image: `${baseUrl}/assets/projects/blockchain.png`,
    link: "https://github.com/your-repo",
  },
];

const ProjectCard = ({ title, description, techStack, image, link }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} style={{ width: "100%" }} id="projects">
      <Card
        sx={{
          backgroundColor: "#fff", // White background for contrast
          color: "var(--color-dark)",
          borderRadius: "10px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
          padding: "20px",
          height: "100%", // Ensures all cards have the same height
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img src={image} alt={title} style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {description}
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: "var(--color-primary)" }}>
            Tech Stack:
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "14px" }}>
            {techStack.join(" • ")}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-text)",
              "&:hover": { backgroundColor: "var(--color-dark)" },
            }}
            href={link}
            target="_blank"
          >
            View Project
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <Box sx={{ backgroundColor: "var(--color-bg)", py: 6, textAlign: "center", width: "100%" }}>
      <Typography variant="h4" sx={{ color: "var(--color-text)", mb: 4, fontWeight: "bold" }}>
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projectsData.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
