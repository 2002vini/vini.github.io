import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, List, ListItem, ListItemText, Button, Modal, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import WorkIcon from "@mui/icons-material/Work";
import CloseIcon from "@mui/icons-material/Close";

const experienceData = [
  {
    year: "2024 - Present",
    title: "Software Developer",
    company: "Crest Data",
    description: [
      "Working on creating LLM product for automating tasks of Level 1 SOC analysts.",
      "Designed system architecture for the product.",
      "Developed FastAPI backend for the application.",
    ],
    techStack: ["Python", "FastAPI", "LLMs", "AWS", "Docker"],
  },
  {
    year: "2023 - 2024",
    title: "Intern - Software Engineering",
    company: "Crest Data",
    description: [
      "Worked on frontend and backend development.",
      "Implemented responsive UI designs and improved system efficiency.",
      "Worked as part of the Observability team for a client 'Tesco' and built a telemetry collector.",
      "Designed and deployed the collector on production systems.",
    ],
    techStack: ["React", "Node.js", "Kubernetes", "Prometheus", "Grafana"],
  },
  {
    year: "2022 - 2023",
    title: "Senior Editor",
    company: "Computer Society of India",
    description: [
      "Hosted technical fests and competitions.",
      "Managed content strategy and publication.",
      "Organized coding competitions.",
    ],
    techStack: ["Content Management", "Event Planning", "Public Speaking"],
  },
];

export const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (selectedExperience !== null) {
      let text = experienceData[selectedExperience].description.map((desc)=>`• ${desc}`).join("\n");
      let i = 0;
      setDisplayedText("");
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText((prev) => prev + text[i]);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 20); // Speed of typing effect
      return () => clearInterval(interval);
    }
  }, [selectedExperience]);

  const handleSelect = (index) => {
    setSelectedExperience(index);
  };

  const handleClose = () => {
    setSelectedExperience(null);
    setDisplayedText(""); // Reset typing effect
  };

  return (
    <Box sx={{ backgroundColor: "var(--color-bg)", py: 6, position: "relative"}} id="experience">
      <Typography
        variant="h4"
        component="h2"
        sx={{
          color: "var(--color-text)",
          mb: 4,
          fontWeight: "bold",
          textAlign: "center",
          textShadow: "2px 2px 8px rgba(255, 255, 255, 0.2)",
        }}
      >
        Experience
      </Typography>

      {/* Experience Grid */}
      <Grid container spacing={4} justifyContent="center" sx={{
    mx: "auto", // Centers the Grid container
    width: "100%",
    px: { xs: 2, sm: 4, md: 6 }, // Adds left-right padding for side margins
  }}>
        {experienceData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => handleSelect(index)}
              style={{ cursor: "pointer" }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  padding: "24px",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                  transition: "0.3s",
                  "&:hover": { boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)" },
                }}
              >
                <WorkIcon sx={{ fontSize: 40, color: "var(--color-primary)" }} />
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "var(--color-dark)", mt: 2 }}>
                  {item.year}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "var(--color-primary)" }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "var(--color-secondary)", mt: 1 }}>
                  {item.company}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Background Blur Overlay */}
      {selectedExperience !== null && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(8px)",
            zIndex: 10,
          }}
          onClick={handleClose}
        />
      )}

      {/* Overlay Popup (Modal) */}
      <Modal open={selectedExperience !== null} onClose={handleClose} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          sx={{
            backgroundColor: "var(--color-dark)",
            color: "var(--color-text)",
            borderRadius: "12px",
            padding: "30px",
            width: "90%",
            maxWidth: "650px",
            boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.4)",
            position: "relative",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "var(--color-text)",
            }}
          >
            <CloseIcon />
          </IconButton>

          {selectedExperience !== null && (
            <>
              <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", mb: 1 }}>
                {experienceData[selectedExperience].title}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "var(--color-primary)", textAlign: "center" }}>
                {experienceData[selectedExperience].company} - {experienceData[selectedExperience].year}
              </Typography>

              <Box sx={{ backgroundColor: "var(--color-bg)", padding: "16px", borderRadius: "8px", mt: 2 }}>
                <Typography variant="body1" sx={{ whiteSpace: "pre-wrap", lineHeight: 1.6 }}>
                  {displayedText}
                </Typography>
              </Box>

              <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "var(--color-primary)", textAlign: "center" }}>
                Tech Stack:
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, textAlign: "center", fontWeight: "bold", letterSpacing: "1px" }}>
                {experienceData[selectedExperience].techStack.join(" • ")}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};
