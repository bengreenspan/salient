import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import companies from "./data/StockList.js";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";

const Warning = ({ onCompanySelected }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 15,
      }}
    >

      <br />
      <h4>
        How to use this website:
        <br />
        Current functionality is searching for SEC documents
      </h4>

      <br />
      <br />
    </Box>
  );
};

export default Warning;
