import {Box} from "@mui/material";
import {NavBar, SideBar} from "../components/index";

const drawerWidth = 240;


export const JournalLayout = ({children}) => {
    return (
        <Box sx={{display: 'flex'}}>

            <NavBar drawerWidth={drawerWidth}/>

            <SideBar  drawerWidth={drawerWidth}    />

            <Box
            component='main'
            sx={{flexGrow: 1, p:3}}
            >

                {/* ToolBar*/}


                {children}
            </Box>

        </Box>
    )
}
