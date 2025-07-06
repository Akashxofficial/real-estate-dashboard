import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const statusStyles = {
  APPLYING: {
    bgColor: "#FBBF24",
    textColor: "#000",
  },
  "UNDER REVIEW": {
    bgColor: "#A78BFA",
    textColor: "#fff",
  },
  ACTIVE: {
    bgColor: "#34D399",
    textColor: "#fff",
  },
};

const PropertyCard = ({ name, location, status, image, rating, link, compact }) => {
  const { bgColor, textColor } = statusStyles[status] || {};

  return (
    <Card
      sx={{
        width: 280,
        borderRadius: 2,
        boxShadow: 3,
        overflow: "hidden",
        bgcolor: "#fff",
        position: "relative",
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          position: "relative",
          height: compact ? 150 : 200, 
          overflow: "hidden",
        }}
      >
        <img
          src={`/images/${image}`}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {/* Status Badge */}
        {status && (
          <Box
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              backgroundColor: bgColor,
              color: textColor,
              fontSize: 12,
              fontWeight: "bold",
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
            }}
          >
            {status}
          </Box>
        )}
      </Box>

      {/* Blue Tick Icon for ACTIVE */}
      {status === "ACTIVE" && (
        <CheckCircleIcon
          sx={{
            position: "absolute",
            top: compact ? 165 : 200, 
            right: 5,
            color: "#3B82F6",
            backgroundColor: "#fff",
            borderRadius: "50%",
            fontSize: 25,
            padding: "10px",
            boxShadow: 0,
          }}
        />
      )}

      {/* Card Content */}
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold" fontSize={14}>
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          fontSize={12}
          gutterBottom
        >
          {location}
        </Typography>

        {/* Create Room CTA */}
        {link && (
          <Box
            mt={4}
            display="inline-flex"
            alignItems="center"
            color="#3B82F6"
            fontWeight={550}
            fontSize={14}
            sx={{
              cursor: "pointer",
              transition: "all 0.2s ease",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            <span style={{ marginRight: 140 }}>{link}</span>
            <ArrowForwardIcon sx={{ fontSize: 20 }} />
          </Box>
        )}

        {/* Rating */}
        {rating && (
          <Box display="flex" alignItems="center" mt={2}>
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                fontSize="small"
                sx={{
                  color: i < Math.floor(rating) ? "#F59E0B" : "#E5E7EB",
                  mr: i === 4 ? 0 : 0.3,
                }}
              />
            ))}
            <Typography variant="body2" ml={0.5}>{rating}</Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
