import {Grid, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {TurnedInNot} from "@mui/icons-material";
import {useMemo} from "react";
import {setActiveNote} from "../../store/journal/index.js";
import {useDispatch} from "react-redux";


export const SideBarItem = ({title = '', body, id, imageURls = [] }) => {

    const dispatch = useDispatch

    const onClickNote = () => {
      dispatch( setActiveNote({title, id, body, date, imageURls}))
    }


    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + ' ...'
            : title;

    }, [title])


  return (
      <ListItem disablePadding>
          <ListItemButton onclick={onClickNote}>
              <ListItemIcon>
                  <TurnedInNot />
              </ListItemIcon>
              <Grid container>
                  <ListItemText primary={  newTitle } />
                  <ListItemText secondary={ body} />
              </Grid>
          </ListItemButton>
      </ListItem>

  )
}