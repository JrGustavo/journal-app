import {
    Box,
    Divider,
    Drawer, Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import {TurnedInNot} from "@mui/icons-material";


export const SideBar = ({drawerWidth}) => {
    return (
        <Box
        component='nav'
        sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
        >
        <Drawer
        variant='permanent'
        open
        ssx={{
            display: {xs: 'block'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}

        }}
        >
            <Toolbar>

                <Typography
                    variant='h6'
                    noWrap component='div'
                >Gustavo Alvarado
                </Typography>
            </Toolbar>
            <Divider/>
            <List>
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
                        <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot/>
                                </ListItemIcon>
                            <Grid container>
                                <ListItemText  primary={text} />
                                <ListItemText  secondary={'Lorem import Lorem from '}/>



                            </Grid>
                        </ListItemButton>
                        </ListItem>
                    ))
                }


                <ListItem>
                    <ListItemText primary={'Home'}/>
                </ListItem>
            </List>





        </Drawer>

        </Box>
    )
}
