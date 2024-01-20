import {
  Box,
  Button
} from "@mui/material";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setUserName } from "../../../../redux/slices/app-slice";
import { useNavigate } from "react-router-dom";

function NameInputField({ onPressHandler, error }) {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
     <Box
        sx={{
           background: "#fff",
           width: "100%",
           padding: "0px 56px 0px 56px",
        }}
     >
        <Box
           sx={{
              width: "100%",
              marginTop: "12px",
           }}
        >
           <TextField
              error={error !== ""}
              sx={{
                 display: "flex",
                 justifyContent: "center",
                 marginLeft: "auto",
                 marginRight: "auto",
                 textAlign: "center",
              }}
              placeholder="your name"
              multiline={false}
              autoComplete="off"
              autoFocus
              variant="standard"
              margin="normal"
              onChange={(e) => {
                 setName(e.target.value);
              }}
              type="text"
              inputProps={{
                 style: {
                    textAlign: "center",
                    fontSize: "1.75rem",
                 },
                 maxLength: 36,
                 className: "input-name",
              }}
           />
        </Box>
        <h4
           style={{
              color: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "4px",
           }}
        >
           {error}
        </h4>
        <Button
           sx={{
              fontFamily: "Roboto Mono",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "25px",
              width: "30%",
           }}
           variant="contained"
           onClick={() => {
              dispatch(setUserName(name));
              onPressHandler(name);
           }}
        >
           Start
        </Button>
        <Button
           sx={{
              fontFamily: "Roboto Mono",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "14px",
              width: "30%",
           }}
           variant="outlined"
           color="error"
           fullWidth={true}
           onClick={() => {
              navigate(`/`, { replace: true });
           }}
        >
           Cancel
        </Button>
     </Box>
  );
}

export default NameInputField;
