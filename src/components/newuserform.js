import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../App.css";

const theme = createTheme();

export default function NewUserForm({ users, url, handleAddUser }) {
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      user: {
        name: currentUser,
      },
    };

    fetch(`${url}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then((user) => {
        if (user.errors) {
          return alert(user.errors);
        } else {
          handleAddUser(user);
          navigate("/users");
        }
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            backgroundColor: "red",
            marginTop: 8,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            borderRadius: "10px",
            padding: "20px",
            marginBottom: "20px",

            flexDirection: "column",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            style={{
              textAlign: "center",
              fontFamily: "Montez",
              color: "white",
              fontSize: "40px",

              backgroundImage:
                "linear-gradient(transparent,transparent,greenyellow)",
              backgroundSize: "contained",
            }}
          >
            ADD NEW USER
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              style={{
                width: "100%",
                color: "white",
                background: "white",
                borderRadius: "10px",
              }}
              margin="normal"
              required
              fullWidth
              id="name"
              label="Your Name"
              name="name"
              onChange={(e) => setCurrentUser(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "rgba(0,0,0,0.8)",
                color: "green",
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
