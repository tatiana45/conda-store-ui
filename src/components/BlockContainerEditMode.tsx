import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

interface IBlockContainerProps {
  title: string;
  children: React.ReactNode;
  onToggleEditMode: (show: boolean) => void;
  isEditMode: boolean;
}

export const BlockContainerEditMode = ({
  title,
  children,
  onToggleEditMode,
  isEditMode
}: IBlockContainerProps) => {
  return (
    <Box
      sx={{
        border: "1px solid #E0E0E0"
      }}
    >
      <Box
        sx={{
          padding: "17px 19px",
          border: "1px solid #E0E0E0"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Typography
            data-testid="block-container-title"
            sx={{
              fontSize: "20px",
              fontWeight: 400,
              color: "#3C4043"
            }}
          >
            {title}
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={isEditMode}
                onClick={e => onToggleEditMode(!isEditMode)}
              />
            }
            label={
              <Typography sx={{ fontSize: "14px", color: "#3C4043" }}>
                {isEditMode
                  ? "Switch to Standard View"
                  : "Switch to YAML Editor"}
              </Typography>
            }
          />
        </Box>
      </Box>
      {children}
    </Box>
  );
};
