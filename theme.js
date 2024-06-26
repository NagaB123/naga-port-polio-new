'use client'

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        background: {
            default: "#212529",
        },
        text: {
            // 7d8792
            primary: "#FFFFFF",
            heading: "#e0a80d",
            secondary: "#bac8d3",
        },
    },
});

export default theme;