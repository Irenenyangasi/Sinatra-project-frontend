import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import "../App.css";
import "@fontsource/montez";
import { Select } from "@mui/material";

export default function EditTaskForm({
  tasks,
  users,
  url,
  handleEditTask,
  handleDeleteTask,
}) {
  const navigate = useNavigate();

  const { id } = useParams();

  const task = tasks.find((t) => t.id == id);

  const [taskCategory, setTaskCategory] = useState(task.category_id);
  const [taskName, setTaskName] = useState(task.name);
  const [taskDescription, setTaskDescription] = useState(task.description);
  const [taskPriority, setTaskPriority] = useState(task.priority);
  const [taskUser, setTaskUser] = useState(task.user_id);
  const [open, setOpen] = useState(false);

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

    fetch(`${url}/tasks/${id}`, {
      method: "PATCH",
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
          handleEditTask(newTask);
          navigate("/users");
        }
      });
  };

  function handleOpenClick() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleDeleteClick() {
    fetch(`${url}/tasks/${id}`, {
      method: "DELETE",
    });
    handleDeleteTask(id);
    navigate("/users");
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        backgroundColor="primary"
        component="form"
        sx={{
          marginTop: 0,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          aligntems: "center",
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
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          EDIT TASK
        </h1>
        <TextField
          required
          id="outlined-required"
          label="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          style={{
            backgroundColor: "white",
            borderRadius: "10px",

            marginLeft: "10px",
            marginRight: "10px",

            color: "white",
          }}
        />
        <TextField
          style={{
            margin: 10,
            backgroundColor: "white",
            borderRadius: "10px",
            color: "darkgreen",
          }}
          id="outlined-multiline-flexible"
          label="Task Description"
          multiline
          maxRows={4}
          name="task-description"
          value={
            taskDescription ? taskDescription : "Enter Description (optional)"
          }
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <FormControl style={{ marginLeft: "10px", marginRight: "10px" }}>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            User
          </InputLabel>
          <NativeSelect
            onChange={(e) => setTaskUser(e.target.value)}
            value={taskUser}
            style={{ color: "blue", background: "rgba(0,0,0,0.8)" }}
          >
            {users.map((user) => (
              <option
                key={user.id}
                value={user.id}
                style={{ color: "blue", background: "rgba(0,0,0,0.8)" }}
              >
                {user.name}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
        <FormControl style={{ margin: "10px" }}>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Category
          </InputLabel>
          <NativeSelect
            value={taskCategory}
            onChange={(e) => setTaskCategory(e.target.value)}
            style={{ color: "blue", background: "rgba(0,0,0,0.8)" }}
          >
            <option
              value={1}
              style={{ color: "blue", background: "rgba(0,0,0,0.8)" }}
            >
              Home
            </option>
            <option
              value={2}
              style={{ color: "blue", background: "rgba(0,0,0,0.8)" }}
            >
              Work
            </option>
            <option
              value={3}
              style={{ color: "blue", background: "rgba(0,0,0,0.8)" }}
            >
              Personal
            </option>
          </NativeSelect>
        </FormControl>
        <FormControl style={{ marginLeft: "10px", marginRight: "10px" }}>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Priority
          </InputLabel>
          <NativeSelect
            value={taskPriority}
            onChange={(e) => setTaskPriority(e.target.value)}
            style={{ color: "blue", background: "rgba(0,0,0,0.8)" }}
          >
            <option
              value={"Low"}
              style={{ color: "blue", background: "rgba(0,0,0,0.8)" }}
            >
              Low
            </option>
            <option
              value={"Medium"}
              style={{ color: "blue", background: "rgba(0,0,0,0.8)" }}
            >
              Medium
            </option>
            <option
              value={"High"}
              style={{ color: "blue", background: "rgba(0,0,0,0.8)" }}
            >
              High
            </option>
          </NativeSelect>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          style={{
            backgroundColor: "greenyellow",
            borderRadius: "10px",
            marginTop: "5px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          Submit
        </Button>

        <Button
          variant="contained"
          color="error"
          sx={{
            marginLeft: 2,
            marginRight: 2,
            marginBottom: 0.5,
            marginTop: 0.5,
          }}
          onClick={handleOpenClick}
          style={{ backgroundColor: "red" }}
        >
          Delete
        </Button>

        <Dialog onClose={handleClose} open={open}>
          <DialogTitle style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            Delete Task?
          </DialogTitle>
          <DialogActions>
            <Button
              onClick={handleClose}
              style={{ backgroundColor: "greenyellow" }}
            >
              No
            </Button>
            <Button
              variant="contained"
              onClick={handleDeleteClick}
              style={{ backgroundColor: "red" }}
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
}
