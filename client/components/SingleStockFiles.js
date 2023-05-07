import React, { useState } from "react";
import q1docs from "./Q12023.js";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useHistory } from "react-router-dom";

const Grid = ({ company }) => {
  const history = useHistory();

  const serialNumberToDate = (serialNumber) => {
    const excelEpoch = new Date(1899, 11, 31);
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const date = new Date(
      excelEpoch.getTime() + serialNumber * millisecondsPerDay
    );
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear().toString().slice(2);

    return `${month}/${day}/${year}`;
  };

  const [sortField, setSortField] = useState("Date_Filed");
  const [sortDirection, setSortDirection] = useState("desc");
  const filteredDocs = company
    ? q1docs.filter((doc) => doc.CIK === company.cik * 1)
    : [];

  const sortData = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
    history.push(
      `${history.location.pathname}?sortField=${field}&sortDirection=${sortDirection}`
    );
  };

  const sortedDocs = [...filteredDocs].sort((a, b) => {
    const valA = a[sortField];
    const valB = b[sortField];

    if (sortField === "Date_Filed") {
      return sortDirection === "asc"
        ? parseInt(valA) - parseInt(valB)
        : parseInt(valB) - parseInt(valA);
    }

    return sortDirection === "asc"
      ? String(valA).localeCompare(valB)
      : String(valB).localeCompare(valA);
  });

  return (
    <table className="grid-table">
      <thead>
        <tr>
          <th>
            <IconButton onClick={() => sortData("Doctype")} size="small">
              <ArrowUpwardIcon fontSize="inherit" />
            </IconButton>
            Filing type
            <IconButton onClick={() => sortData("Doctype")} size="small">
              <ArrowDownwardIcon fontSize="inherit" />
            </IconButton>
          </th>
          <th>
            <IconButton onClick={() => sortData("Date_Filed")} size="small">
              <ArrowUpwardIcon fontSize="inherit" />
            </IconButton>
            Date Filed
            <IconButton onClick={() => sortData("Date_Filed")} size="small">
              <ArrowDownwardIcon fontSize="inherit" />
            </IconButton>
          </th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {sortedDocs.map((doc, index) => (
          <tr key={index}>
            <td>{doc.Doctype}</td>
            <td>{serialNumberToDate(doc.Date_Filed)}</td>
            <td>
              <a href={doc.url} target="_blank" rel="noopener noreferrer">
                {doc.url}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
