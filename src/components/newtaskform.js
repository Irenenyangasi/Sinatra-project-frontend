import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Container from "@mui/material/Container";
import "../App.css";
import "@fontsource/montez";

export default function NewTaskForm({ users, url, handleAddTask }) {
  const navigate = useNavigate();

  const [taskCategory, setTaskCategory] = useState("1");
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("Low");
  const [taskUser, setTaskUser] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let submittedTask = {
      task: {
        name: taskName,
        description: taskDescription,
        category_id: taskCategory,
        priority: taskPriority,
        user_id: taskUser,
      },
    };

    fetch(`${url}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submittedTask),
    })
      .then((r) => r.json())
      .then((newTask) => {
        if (newTask.errors) {
          return alert(newTask.errors);
        } else {
          handleAddTask(newTask);
          navigate("/users");
        }
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        backgroundColor="rgba(0,0,0,0.5)"
        borderColor="white"
        borderRadius="10px"
        component="form"
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          maxWidth: "xs",
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleFormSubmit}
      >
        <h1
          style={{
            color: "white",
            fontFamily: "montez",
            backgroundImage:
              "linear-gradient(transparent,transparent,greenyellow)",
            textAlign: "center",
            fontSize: "40px",
          }}
        >
          ADD NEW TASK
        </h1>
        <TextField
          required
          id="outlined-required"
          label="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          style={{
            color: "white",
            background: "white",
            // border: "10px",
            margin: "10px",
            // padding: "10px",

            borderRadius: "10px",
          }}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Task Description"
          multiline
          maxRows={4}
          name="task-description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          style={{
            color: "white",
            background: "white",
            margin: "10px",
            // padding: "2px",
            borderRadius: "10px",
          }}
        />
        <FormControl>
          <InputLabel
            variant="standard"
            htmlFor="uncontrolled-native"
            style={{
              margin: "10px",
              color: "white",
              border: "10 px solid white",
            }}
          ></InputLabel>
          <NativeSelect
            onChange={(e) => setTaskUser(e.target.value)}
            defaultValue={1}
            style={{
              color: "white",
              backgroundImage: "linear-gradient(transparent,transparent,white)",
              borderRadius: "10px",
              margin: "10px",
            }}
          >
            <option
              value={"User"}
              style={{ backgroundColor: "greenyellow", color: "blue" }}
            >
              (Select User)
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
        <FormControl>
          <InputLabel
            variant="standard"
            htmlFor="uncontrolled-native"
            style={{
              background: "none",
              marginLeft: "10px",
              marginBottom: "12px",
              color: "green",
              padding: "2px",
            }}
          >
            select Category
          </InputLabel>
          <NativeSelect
            defaultValue={1}
            onChange={(e) => setTaskCategory(e.target.value)}
            style={{
              color: "white",
              margin: "10px",
              padding: "2px",
              borderRadius: "10px",
              backgroundImage: "linear-gradient(transparent,transparent,white)",
            }}
          >
            <option
              value={1}
              style={{ backgroundColor: "greenyellow", color: "blue" }}
            >
              Home
            </option>
            <option
              value={2}
              style={{ backgroundColor: "greenyellow", color: "blue" }}
            >
              Work
            </option>
            <option
              value={3}
              style={{ backgroundColor: "greenyellow", color: "blue" }}
            >
              Personal
            </option>
          </NativeSelect>
        </FormControl>
        <FormControl>
          <InputLabel
            variant="standard"
            htmlFor="uncontrolled-native"
            style={{ color: "darkgreen", margin: "12px" }}
          >
            Priority
          </InputLabel>
          <NativeSelect
            defaultValue={1}
            onChange={(e) => setTaskPriority(e.target.value)}
            style={{
              color: "white",
              margin: "12px",
              padding: "2px",
              borderRadius: "10px",
              backgroundImage: "linear-gradient(transparent,transparent,white)",
            }}
          >
            <option
              value={"Low"}
              style={{ backgroundColor: "greenyellow", color: "blue" }}
            >
              Low
            </option>
            <option
              value={"Medium"}
              style={{ backgroundColor: "greenyellow", color: "blue" }}
            >
              Medium
            </option>
            <option
              value={"High"}
              style={{ backgroundColor: "greenyellow", color: "blue" }}
            >
              High
            </option>
          </NativeSelect>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "rgba(0,0,0,0.8)",
            borderRadius: "10px",
            margin: "10px",
            color: "darkgreen",
          }}
        >
          Submit
        </Button>
        <Button href="/tasks" style={{ color: "white", borderRadius: "10px" }}>
          Go to Tasks Page
        </Button>
      </Box>
    </Container>
  );
}
