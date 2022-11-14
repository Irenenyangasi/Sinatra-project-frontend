import React from "react";
import "../App.css";
import "@fontsource/montez";
import { width } from "@mui/system";
import Button from "@mui/material/Button";
import tasks from "../tasks1.png";
import welcome from "../hi.png";

export default function Home() {
  return (
    <>
      <form
        style={{
          background: "green",
          float: "left",
          width: "200px",
          display: "flex",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          flexDirection: "column",
        }}
      >
        <div className="scroll" style={{}}>
          <form
          // style={{
          //   display: "flex",
          //   height: "100vh",
          //   justifyContent: "center",
          // }}
          >
            <Button
              style={{
                fontFamily: "montez",
                fontSize: "20px",
                color: "white",
                fontWeight: 600,
              }}
              id="mine"
            >
              TaskManager
            </Button>
            <Button></Button>
            <Button></Button>
            <Button></Button>
            <Button
              href="/tasks/new"
              style={{
                // fontFamily: "montez",
                paddingLeft: "0px",
                fontSize: "15px",
                color: "white",
                fontWeight: 600,
                margin: 20,
                borderLeft: " 3px solid red",
                // borderBottom: " 3px solid white",
                borderTop: " 3px solid green",
                borderRight: "3px solid yellow",
                width: "100px",
                transform: "rotate(-15deg)",

                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            >
              {" "}
              Home{" "}
            </Button>
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
            <Button
              href="/tasks/new"
              style={{
                // fontFamily: "montez",
                paddingLeft: "0px",
                fontSize: "15px",
                color: "white",
                fontWeight: 600,
                margin: 20,
                borderLeft: " 3px solid red",
                // borderBottom: " 3px solid white",
                borderTop: " 3px solid green",
                borderRight: "3px solid yellow",
                width: "100px",
                transform: "rotate(-15deg)",

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
                margin: 20,
                borderLeft: " 3px solid red",
                // borderBottom: " 3px solid white",
                borderTop: " 3px solid green",
                borderRight: "3px solid yellow",
                width: "100px",
                color: "white",

                fontWeight: "bold",
                backgroundSize: "10px",
                transform: "rotate(-15deg)",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            >
              {" "}
              New User{" "}
            </Button>
          </form>
        </div>
      </form>
      <form>
        {/* <img
          style={{ borderRadius: "15px", marginLeft: 100, marginTop: 20 }}
          src={tasks}
          width="400"
          height="400"
        /> */}
        <img
          className="welcome"
          style={{
            borderRadius: "15px",
            marginLeft: 100,
            marginTop: 20,
          }}
          src={welcome}
          // width="400"
          // height="400"
        />
      </form>
    </>
  );
}
