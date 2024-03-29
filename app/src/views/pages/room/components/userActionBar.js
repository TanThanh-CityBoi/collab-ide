import { DragIndicatorRounded, KeyboardArrowDownRounded, KeyboardArrowUpRounded, MicOffRounded, MicRounded, VideocamOffRounded, VideocamRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

function UserActionBar({ id, width, camState, micState, onCamera, onMic, onCollapsed }) {
    const [collapsed, setCollapsed] = useState(false);

    function handleOnCollapsed() {
        const newState = !collapsed
        setCollapsed(newState)
        if (onCollapsed) {
            onCollapsed(newState)
        }
    }
    return (
        <Box
            id={id}
            sx={{
                background: "#121212",
                marginBottom: "8px",
                padding: "4px",
                display: "flex",
                width: width,
                borderRadius: 1.2,
                minWidth: "100px",
            }}>
            <IconButton
                sx={{
                    marginRight: "4px",
                    height: "24px",
                    width: "24px"
                }}
                disabled={true}
            >
                <DragIndicatorRounded
                    fontSize="small"
                />
            </IconButton>
            <IconButton
                sx={{
                    height: "24px",
                    width: "24px"
                }}
                onClick={() => onCamera()}
            >
                {!camState ? <VideocamOffRounded fontSize="small" /> : <VideocamRounded fontSize="small" />}
            </IconButton>
            <IconButton
                sx={{
                    height: "24px",
                    width: "24px"
                }}
                onClick={() => onMic()}
            >
                {!micState ? <MicOffRounded fontSize="small" /> : <MicRounded fontSize="small" />}
            </IconButton>
            <Box sx={{ width: "100%" }}>
                <IconButton
                    sx={{
                        height: "24px",
                        width: "24px",
                        float: "right"
                    }}
                    onClick={() => handleOnCollapsed()}
                >
                    {collapsed ? <KeyboardArrowDownRounded fontSize="small" /> : <KeyboardArrowUpRounded fontSize="small" />}
                </IconButton>
            </Box>
        </Box>
    );
}

export default UserActionBar