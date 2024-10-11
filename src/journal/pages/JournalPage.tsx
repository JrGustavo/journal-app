import {JournalLayout} from '../layout/JournalLayout'
import {IconButton} from "@mui/material";
import {AddOutlined} from "@mui/icons-material";
import {  NothingSelectedView } from '../views';




export const JournalPage = () => {
    return (
        <JournalLayout>

            <NothingSelectedView />


            
            <IconButton
               size='large'
               sx={{
                   color: 'white',
                   backgroundColor: 'error.main',
                   ':hover': {backgroundColor: 'error.main', opacity: 0.9},
                   position: 'fixed',
                   right: 50,
                   botton: 50
               }}

            >
            <AddOutlined
            sx={{fontSize:30}}/>
            </IconButton>
        </JournalLayout>
    )
}
