import {CssBaseline, ThemeProvider} from "@mui/material";
import {purpleTheme} from "./purpleTheme.js";

export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={purpleTheme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline/>
            {children}
        </ThemeProvider>


    )
}

