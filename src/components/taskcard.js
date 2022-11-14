import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../App.css";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

export default function TaskCard({
  task: {
    id,
    name,
    description,
    is_complete,
    deadline,
    user_id,
    category_id,
    priority,
  },
  users,
  url,
  handleComplete,
}) {
  let taskUser = users.find((u) => u.id == user_id);
  let categories = {
    1: "Home",
    2: "Work",
    3: "Personal",
  };

  function handleCompleteToggle() {
    fetch(`${url}/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: {
          is_complete: !is_complete,
        },
      }),
    })
      .then((r) => r.json())
      .then((newComplete) => handleComplete(newComplete));
  }

  return (
    <Container>
      <Box
        sx={{
          width: 400,
          height: 325,
          backgroundColor: "greenyellow",
          borderRadius: "10px",
          margin: 10,
          border: "9px",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            marginLeft: "70px",
            justifyContent: "space-between",
          }}
        >
          <Link to={`/tasks/${id}/edit`}>
            <Button variant={"contained"}>
              edit
              <EditIcon />
            </Button>
          </Link>
        </Box>

        <h1>
          <span style={{ color: "red" }}>Task name:</span>
          {name}
        </h1>
        <h3>
          <span style={{ color: "red" }}>Description:</span>
          {description}
        </h3>
        <h3>
          {" "}
          <span style={{ color: "red" }}>Assigned to:</span> {taskUser}
        </h3>
        <h3>
          <span style={{ color: "red" }}>Category:</span>{" "}
          {categories[`${category_id}`]} | Priority: {priority}{" "}
        </h3>
        <Button
          variant="contained"
          onClick={handleCompleteToggle}
          style={{ backgroundColor: "darkgreen" }}
        >
          {is_complete ? "Mark Incomplete" : "Complete!"}
        </Button>
      </Box>
    </Container>
  );
}
