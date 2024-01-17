import {
  Box,
  Button,
  Dialog
} from "@mui/material";
import React from "react";

function LeaveRoomDialog({ open, handleClose, handleConfirm }) {
  return (
    <Dialog PaperProps={{ style: { backgroundColor: "transparent" } }} open={open} onClose={() => {
      handleClose()
    }}>
      <Box
        sx={{
          backgroundColor: "#151515",
          minWidth: "500px",
          padding: "24px",
          borderRadius: "8px",
        }}
      >
        <h2>Do you want to leave the room?</h2>
       
        <Box sx={{ display: "flex", marginTop: "40px", justifyContent: "right", alignItems: "right", }}>
          <Button className="cancel-button"
            sx={{ marginRight: "8px", fontFamily: "Roboto Mono" }}
            variant="text"
            onClick={(() => {
              handleClose()
            })}
          >
            Cancel
          </Button>

          <Button
            sx={{ color: "#FFF", fontFamily: "Roboto Mono", padding: "5px 25px" }}
            variant="contained"
            onClick={() => {
              handleConfirm()
            }}
          >
            Leave Room
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}

export default LeaveRoomDialog;
