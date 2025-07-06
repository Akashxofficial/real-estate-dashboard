// pages/Dashboard.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import PropertyCard from "../components/PropertyCard";

const properties = [
  {
    id: 1,
    name: "Imperial Heights",
    location: "Yogesh Shah Lane, Madhupur Deoghar, Jharkhand 815353",
    status: "APPLYING",
    image: "3.jpg",
    link: "Create Room" 
  },
  {
    id: 2,
    name: "Taj Palace",
    location: "Yogesh Shah Lane, Madhupur Deoghar, Jharkhand 815353",
    status: "UNDER REVIEW",
    image: "2.jpg",
  },
  {
    id: 3,
    name: "ITC",
    location: "Yogesh Shah Lane, Madhupur Deoghar, Jharkhand 815353",
    status: "ACTIVE",
    image: "1.jpg",
    rating: 4.5
  }
];

function Dashboard() {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flexGrow={1} px={5} py={1} bgcolor="#f9f9f9" height="100vh">
        <Topbar />
        <Typography variant="h6" fontWeight="bold" mb={4}>Your Properties</Typography>
        <Box display="flex" gap={3} mt={2}>
          {properties.map((prop) => (
            <PropertyCard key={prop.id} {...prop} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
