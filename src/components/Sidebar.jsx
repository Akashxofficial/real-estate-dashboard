// components/Sidebar.jsx
import React from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

function Sidebar() {
  return (
    <Box
      width={240}
      
      bgcolor="#fff"
      p={2}
      boxShadow={1}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box mt={15}> { }
        <List>
          <ListItem button selected sx={{ backgroundColor: "#e6f4ea", borderRadius: 2, mb: 1 }}>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Profile Setting" />
          </ListItem>
        </List>
      </Box>
      <Box>
        <ListItem button>
          <ListItemIcon><LogoutIcon /></ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItem>
      </Box>
    </Box>
  );
}

export default Sidebar;
