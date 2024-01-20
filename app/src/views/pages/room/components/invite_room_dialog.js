import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, Dialog } from "@mui/material";
import React from "react";

function InviteRoomDialog({ open, handleClose, roomId, handleConfirm }) {
   return (
      <Dialog
         PaperProps={{ style: { backgroundColor: "transparent" } }}
         open={open}
         onClose={() => {
            handleClose();
         }}
      >
         <Box
            sx={{
               backgroundColor: "#fff",
               minWidth: "500px",
               padding: "24px",
               borderRadius: "8px",
            }}
         >
            <h2>Use this code</h2>

            <Box
               sx={{
                  display: "flex",
                  marginTop: "20px",
                  padding: "10px",
                  justifyContent: "space-between",
                  backgroundColor: "#dddddd",
               }}
            >
               <div>
                  <strong>{roomId}</strong>{" "}
               </div>
               <span
                  style={{ display: "inline-block" }}
                  onClick={() => {
                     navigator.clipboard.writeText(roomId);
                  }}
                  className="icon right"
               >
                  <ContentCopyIcon titleAccess="Click to copy" fontSize="small" />
               </span>
            </Box>
         </Box>
      </Dialog>
   );
}

export default InviteRoomDialog;
