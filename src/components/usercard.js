import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import "../App.css";

export default function UserCard({
  user: { id, name },
  handleComplete,
  url,
  tasks,
}) {
  const userTasks = tasks.filter((task) => task.user_id == id);
  const categories = { 1: "Home", 2: "Work", 3: "Personal" };

  function handleCompleteClick(id) {
    const task = tasks.find((t) => t.id == id);
    const is_complete = task.is_complete;
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
          width: 450,
          height: "100%",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.5)",
          margin: 10,
          borderRadius: "10px",
          padding: 0.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        ></Box>
        <h1 style={{ color: "white" }}>{name}</h1>
        <ul style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
          {tasks
            .filter((task) => task.user_id == id)
            .map((t) => (
              <li key={t.id}>
                <h2>
                  {t.name}
                  <Link to={`/tasks/${t.id}/edit`}>
                    <Button variant="contained" sx={{ margin: 1 }}>
                      <EditIcon />
                    </Button>
                  </Link>
                  <Button
                    variant={"contained"}
                    onClick={() => handleCompleteClick(t.id)}
                  >
                    {t.is_complete ? "Mark Incomplete" : "Complete"}
                  </Button>
                </h2>
                <div>
                  {t.description ? t.description : "No desc"} |{" "}
                  {categories[t.category_id]} | {t.priority} |{" "}
                  {t.is_complete ? "Complete 🥳" : "INCOMPLETE 😭"}
                </div>
              </li>
            ))}
        </ul>
      </Box>
    </Container>
  );
}
