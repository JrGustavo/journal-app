import {AppBar, IconButton, Toolbar} from "@mui/material";
import {MenuOutlined} from "@mui/icons-material";


export const NavBar = () => {
    return (
        <AppBar position='fixed'
        sx={{}}



        >
        <Toolbar>
            <IconButton>
            <MenuOutlined/>
            </IconButton>
        </Toolbar>
        </AppBar>
    )
}
