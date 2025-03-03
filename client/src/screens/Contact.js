import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  Snackbar,
  Alert,
  InputAdornment,
} from "@mui/material";
import { Person, Email, Message } from "@mui/icons-material";
import Footer from "../components/Footer";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: result.message });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: result.message });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({ type: "error", message: "Error: Unable to send your message." });
    } finally {
      setOpen(true);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
          padding: "20px",
          backgroundColor: '#FFF3E6',
        }}
      >
        <Card
          elevation={3}
          style={{
            width: "100%",
            maxWidth: "600px",
            borderRadius: "15px",
            padding: "0 20px",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              style={{ textAlign: "center", marginBottom: "3vh", color: "#333", fontWeight: "bold" }}
            >
              Contact Us
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{ padding: "0 0vw" }}
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    variant="outlined"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Message"
                    variant="outlined"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Message />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: '#F48804', 
                      '&:hover': {
                        backgroundColor: '#a63c06', 
                      },
                      size: "large",
                    }}
                  >
                    Submit
                  </Button>
                  <Button
                    type="button"
                    variant="outlined"
                    color="error"
                    size="large"
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={8000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={status.type} variant="filled">
          {status.message}
        </Alert>
      </Snackbar>

      <Footer />
    </>
  );
};

export default ContactUsForm;