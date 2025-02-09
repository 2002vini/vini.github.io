import React from "react";
import { Box, Typography, Grid, IconButton, Link } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#04152d",
        color: "#fff",
        py: 4,
        textAlign: "center",
        mt: 6,
      }}
      id="footer"
    >
      <Grid container justifyContent="center" spacing={2}>
        {/* Social Links */}
        <Grid item xs={12}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Connect with Me
            </Typography>
          </motion.div>
          <IconButton
            component={Link}
            href="https://github.com/2002vini"
            target="_blank"
            sx={{ color: "#fff", mx: 1 }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            component={Link}
            href="hhttps://www.linkedin.com/in/vinihundlani/"
            target="_blank"
            sx={{ color: "#fff", mx: 1 }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            component={Link}
            href="mailto:hundlanivini2002@gmail.com"
            sx={{ color: "#fff", mx: 1 }}
          >
            <EmailIcon fontSize="large" />
          </IconButton>
        </Grid>

        {/* Footer Text */}
        <Grid item xs={12}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Vini Hundlani | Designed with ❤️
          </Typography>
        </Grid>

        {/* Scroll to Top Button */}
        <Grid item xs={12}>
          <motion.div whileHover={{ scale: 1.2 }}>
            <IconButton
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              sx={{ color: "rgb(87, 108, 188)" }}
            >
              <ArrowUpwardIcon fontSize="large" />
            </IconButton>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};
