import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../App.css";
import "@fontsource/montez";
import microsoft from "../microsoft.png";
import DeleteIcon from "@mui/icons-material/Delete";

function NavBar() {
  return (
    <Box
      sx={{
        padding: 3.5,
        margin: 0,
        borderRadius: 4,
        color: "#fff",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        display: "flex",
        justifyContent: "right",
        borderBottom: "2px solid white",
      }}
    >
      <Button>
        <span>|</span>
      </Button>
      <Button>
        <img
          style={{ animation: "rotation 30s infinite linear" }}
          src={microsoft}
          width="50"
          height="50"
        />
      </Button>
      <Button>|</Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button
        style={{
          fontFamily: "montez",
          fontSize: "20px",
          color: "white",
          fontWeight: 600,
        }}
        id="mine"
      >
        TasksManager
      </Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button
        href="/users"
        style={{
          // fontFamily: "montez",
          paddingLeft: "0px",
          fontSize: "15px",

          // borderRadius: "20px",
          color: "white",
          borderLeft: " 3px solid white",
          fontWeight: 600,
          borderBottom: " 3px solid white",
          marginRight: 10,
          width: "100px",

          backgroundColor: "rgba(0, 0, 0, 0.4)",
          // animation: "rotation 8s infinite linear",
          // transform: "rotate(-45deg)",
        }}
      >
        Users
      </Button>
      <Button
        href="/tasks"
        style={{
          // fontFamily: "montez",
          paddingLeft: "0px",
          fontSize: "15px",
          marginRight: 10,
          color: "white",
          fontWeight: 600,
          borderStyle: "solid",
          borderLeft: " 3px solid white",
          borderBottom: " 3px solid white",
          width: "100px",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          // animation: "rotation 60s infinite linear",
          // transform: "rotate(-45deg)",
        }}
      >
        {" "}
        Tasks{" "}
      </Button>
      <Button
        href="/tasks/new"
        style={{
          // fontFamily: "montez",
          paddingLeft: "0px",
          fontSize: "15px",
          color: "white",
          fontWeight: 600,
          marginRight: 10,
          borderLeft: " 3px solid white",
          borderBottom: " 3px solid white",
          width: "100px",

          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      >
        {" "}
        New Task{" "}
      </Button>
      <Button
        href="/users/new"
        style={{
          // fontFamily: "montez",
          paddingLeft: "0px",
          fontSize: "15px",
          marginRight: 10,
          borderLeft: " 3px solid white",
          borderBottom: " 3px solid white",
          width: "100px",
          color: "white",
          fontWeight: "bold",
          backgroundSize: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      >
        {" "}
        New User{" "}
      </Button>
    </Box>
  );
}

export default NavBar;
