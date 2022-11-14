import React, { useState, useEffect } from "react";
import TaskCard from "./taskcard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Box from "@mui/material/Box";
import "../App.css";
import "@fontsource/montez";

export default function TaskPage({
  tasks,
  users,
  url,
  handleFilter,
  handleEditTask,
}) {
  function handleDelete(id) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
  }

  function handleFilterTasks(id) {}

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
          href="/tasks"
          style={{
            // fontFamily: "montez",
            paddingLeft: "0px",
            fontSize: "15px",
            margin: 20,
            color: "white",
            fontWeight: 600,
            borderStyle: "solid",
            borderLeft: " 3px solid red",
            // borderBottom: " 3px solid white",
            borderTop: " 3px solid green",
            borderRight: "3px solid yellow",
            width: "100px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            // animation: "rotation 60s infinite linear",
            transform: "rotate(-15deg)",
          }}
        >
          {" "}
          Tasks{" "}
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
          MY TASKS
        </h1>

        <Button
          variant="contained"
          href="/tasks/new"
          sx={{
            margin: 1,
            backgroundColor: "rgba(0,0,0,0.7)",
            color: "white",
            alignItems: "center",
            marginLeft: "40%",
            justifyContent: "center",
          }}
        >
          CREATE NEW TASK
        </Button>
        <Box>
          <FormControl
            style={{
              background: "rgba(0,0,0,0.5)",
              marginLeft: "40%",
              color: "white",
              height: "60px",
              width: "100px",
            }}
          >
            <InputLabel
              variant="standard"
              htmlFor="uncontrolled-native"
              style={{ color: "darkgreen" }}
            >
              (<span style={{ color: "white" }}>User</span>)
            </InputLabel>
            <NativeSelect
              defaultValue={"All"}
              onChange={(e) => handleFilter(e)}
              style={{ color: "white", fontSize: "15px" }}
            >
              <option
                value={"All"}
                style={{ color: "blue", backgroundColor: "greenyellow" }}
              >
                All
              </option>
              {users.map((user) => (
                <option
                  key={user.id}
                  value={user.id}
                  style={{ backgroundColor: "greenyellow", color: "blue" }}
                >
                  {user.name}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {tasks.map((task) => (
            <Grid item xs={5} key={task.id}>
              <TaskCard
                key={task.id}
                task={task}
                isComplete={task.is_complete}
                handleDelete={handleDelete}
                users={users}
                url={url}
                handleComplete={handleEditTask}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
