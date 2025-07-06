import React from "react";
import {
  Box,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Avatar,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      mb={4}
      gap={2}
    >
      {/* Add New Property Button */}
      <Button
        onClick={() => navigate("/add-property")}
        sx={{
          textTransform: "none",
          borderRadius: "9999px",
          px: 2.5,
          py: 1.2,
          fontSize: "15px",
          fontWeight: 500,
          fontFamily: "Inter, Roboto, sans-serif",
          minWidth: "auto",
          backgroundColor: "#f3f4f6",
          color: "#6b7280",
          display: "flex",
          alignItems: "center",
          "&:hover": {
            backgroundColor: "#e5e7eb"
          },
        }}
      >
        {/* Icons group: 📍 then + */}
        <Box display="flex" alignItems="center" mr={0.5}>
          <LocationOnOutlinedIcon sx={{ fontSize: 22, ml: -0.5 }} />
          <AddIcon sx={{ fontSize: 15, ml: -0.7 }} />
        </Box>
        Add New Property
      </Button>

      {/* Search Input */}
      <TextField
        placeholder="Search"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#9ca3af" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          backgroundColor: "#f3f4f6",
          borderRadius: "999px",
          width: 220,
          "& .MuiOutlinedInput-root": {
            borderRadius: "999px",
            fontSize: "14px",
            "& fieldset": {
              borderColor: "transparent",
            },
            "&:hover fieldset": {
              borderColor: "transparent",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#60a5fa",
              backgroundColor: "#fff",
            },
          },
        }}
      />

      {/* Notification Bell */}
      <IconButton>
        <NotificationsNoneIcon sx={{ color: "#6b7280" }} />
      </IconButton>

      {/* User Avatar */}
      <IconButton>
        <Avatar src="/1111.png" alt="User" sx={{ width: 42, height: 42 }} />
      </IconButton>
    </Box>
  );
};

export default Topbar;
