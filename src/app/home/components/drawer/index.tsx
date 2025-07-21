'use client'

import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer } from "@mui/material";
import { Menu } from "lucide-react";
import React from "react";

export default function DrawerComponent() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Menu /> : <Menu />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="text-foreground-default block md:hidden cursor-pointer">
      <Menu onClick={toggleDrawer(true)} className="text-foreground-default block md:hidden"/>
      <SwipeableDrawer  anchor="right" open={open} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
        {DrawerList}
      </SwipeableDrawer>
    </div>
  );
}
