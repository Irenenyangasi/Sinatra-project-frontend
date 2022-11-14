import React, { useState } from "react";
import Button from "@mui/material/Button";
import UserCard from "./usercard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "../App.css";
import "@fontsource/montez";
import { Box } from "@mui/material";

export default function UserPage({ users, tasks, url, handleEditTask }) {
  const [displayedTasks, setDisplayedTasks] = useState(tasks);

  function handleDeleteClick(id) {
    const filteredTasks = tasks.filter((task) => task.id != id);
    setDisplayedTasks(filteredTasks);
  }
  const styles = (theme) => ({
    tr: {
      background: "#f1f1f1",
      "&:hover": {
        background: "#f00",
      },
    },
  });

  return (
    <Container>
      <Box
        sx={{
          alignItems: "center",
          height: "100%",
          justifyContent: "center",

          flexDirection: "column",
        }}
      >
        <Button
          href="/users"
          style={{
            // fontFamily: "montez",
            paddingLeft: "0px",
            fontSize: "15px",

            // borderRadius: "20px",
            color: "white",
            borderLeft: " 3px solid red",
            fontWeight: 600,
            // borderBottom: " 3px solid white",
            borderTop: " 3px solid green",
            borderRight: "3px solid yellow",

            margin: 20,
            width: "100px",

            backgroundColor: "rgba(0, 0, 0, 0.7)",
            // animation: "rotation 8s infinite linear",
            transform: "rotate(-15deg)",
          }}
        >
          Users
        </Button>
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            fontFamily: "montez",
            backgroundImage:
              "linear-gradient( to left, transparent,transparent,transparent,transparent,transparent,greenYellow,transparent,transparent,greenyellow,transparent,transparent,transparent,transparent,transparent)",
            justifyContent: "center",
            backgroundPosition: "center center",
            height: "auto",
          }}
        >
          USERS
        </h1>
        <Button
          variant="contained"
          href="/users/new"
          sx={{
            marginLeft: "40%",
            backgroundColor: "rgba(0,0,0,0.7)",
            color: "white",
          }}
        >
          New User
        </Button>
        <Button
          variant="contained"
          href="/tasks/new"
          sx={{
            margin: 1,
            color: "white",
            backgroundColor: "rgba(0,0,0,0.7)",

            textAlign: "center",
          }}
        >
          New Task
        </Button>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {users.map((user) => (
            <Grid item xs={5} key={user.id}>
              <UserCard
                key={user.id}
                user={user}
                handleDelete={handleDeleteClick}
                handleComplete={handleEditTask}
                url={url}
                tasks={tasks}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
