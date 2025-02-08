import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import EventIcon from "@mui/icons-material/Event";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import MicIcon from "@mui/icons-material/Mic";
import ArticleIcon from "@mui/icons-material/Article";

const coCurricularData = [
  { title: "Hackathons", description: "Participated in multiple technical hackathons. Recently participated in Lab AI Hackathon to build an LLM-powered health chatbot, which uses Azure OCR for reading prescriptions and lab reports and answering user queries. Also won first prize in a startup-based hackathon for the ideation of a startup to deliver homemade food for students and working professionals away from home.", icon: <CodeIcon fontSize="large" /> },
  { title: "Technical Writing", description: "Published a research paper on combating hate speech on online gaming platforms using AI and blockchain technology. Published in Wiley Journal with Dr. Sudeep Tanwar. The paper was titled 'MetaHate Speech Detection'. AI was used to detect hate speech and blockchain technology was used for user identity management. Worked on smart contracts, ML algorithms, and AI.", icon: <ArticleIcon fontSize="large" /> },
  { title: "Coding Profiles", description: "Actively participated in several coding competitions across various platforms like Leetcode, CodeChef, and Codeforces. Achieved Rank 121 in CodeChef Long Challenge. Solved around 1200+ questions on various coding platforms, with 600+ on Leetcode. Max rating of 'Pupil' on Codeforces. Also participated in ICPC competition.", icon: <SchoolIcon fontSize="large" /> },
];

const extraCurricularData = [
  { title: "Public Speaking", description: "Won several competitions in E-CELL-based events. Anchored two events for the Computer Society of India. Also presented a sales pitch for the product I am currently working on.", icon: <MicIcon fontSize="large" /> },
  { title: "Event Organizing", description: "As a board member of the Computer Society of India, I organized various events, including flagship events like HackNuThon and Cubeix. Responsibilities included getting sponsorships, publicity, selecting technical problems, and obtaining event permissions.", icon: <EventIcon fontSize="large" /> },
  { title: "Sports", description: "Active volleyball team member. Played in school and college teams, competing at inter-departmental and state levels.", icon: <SportsSoccerIcon fontSize="large" /> },
];

const ActivityCard = ({ title, description, icon }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <Card
        sx={{
          backgroundColor: "var(--color-secondary)",
          color: "var(--color-text)",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
          padding: "20px",
          height: "100%", // Ensures equal height for all cards
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between", // Ensures content is evenly distributed
        }}
      >
        {icon}
        <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const Activities = () => {
  return (
    <>
      {/* Co-Curricular Section */}
      <Box sx={{ backgroundColor: "var(--color-bg)", py: 6, textAlign: "center", width: "100%" }}>
        <Typography variant="h4" sx={{ color: "var(--color-text)", mb: 4, fontWeight: "bold" }}>
          Co-Curricular Activities
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {coCurricularData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
              <ActivityCard title={item.title} description={item.description} icon={item.icon} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Extra-Curricular Section */}
      <Box sx={{ backgroundColor: "var(--color-bg)", py: 6, textAlign: "center", width: "100%" }}>
        <Typography variant="h4" sx={{ color: "var(--color-text)", mb: 4, fontWeight: "bold" }}>
          Extra-Curricular Activities
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {extraCurricularData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
              <ActivityCard title={item.title} description={item.description} icon={item.icon} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
