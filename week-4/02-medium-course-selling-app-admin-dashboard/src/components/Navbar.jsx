import { Button, Typography } from "@mui/material";
import React from "react";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Typography fontSize={30}>CourSella</Typography>
      <div>
        <Button variant="contained">Signup</Button>
        <Button variant="contained">Login</Button>
      </div>
    </div>
  );
}

export default Navbar;
