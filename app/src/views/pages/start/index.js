import { Button, Box } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectRoomDialog from "./components/select_room_dialog";
import logo from "../../../assets/icon.png";

function StartScreen() {
   const [open, setOpen] = useState(false);
   const navigate = useNavigate();

   return (
      <Box
         sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "36px",
         }}
      >
         <img
            src={logo}
            alt="logo"
            style={{
               width: "25%",
               marginBottom: "30px",
            }}
         />
         <h1> Online Compiler IDE</h1>
         <Button
            sx={{
               marginTop: "18px",
               minWidth: "200px",
               fontFamily: "Roboto Mono",
               backgroundColor: "#d800ff",
            }}
            variant="contained"
            onClick={() => {
               navigate(`inputName`, {
                  state: { isCreateRoom: true },
               });
            }}
         >
            New Room
         </Button>
         <Button
            sx={{
               marginTop: "12px",
               minWidth: "200px",
               fontFamily: "Roboto Mono",
               color: "#d800ff",
               backgroundColor: "#ffffff",
            }}
            variant="outlined"
            onClick={() => setOpen(true)}
         >
            Join room
         </Button>
         <SelectRoomDialog open={open} handleClose={() => setOpen(false)} />
      </Box>
   );
}

export default StartScreen;
