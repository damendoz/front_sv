//React
import { useState } from "react";

import PropTypes from 'prop-types';

//MUI
import ListItemButton from '@mui/material/ListItemButton';
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import List from '@mui/material/List'
import Collapse from "@mui/material/Collapse";

export function Expand({ expand, title, icon, openIcon, closeIcon, subMenu, handleDrawerOpen }) {

    Expand.propTypes = {
        expand: PropTypes.node.isRequired,
        title: PropTypes.node.isRequired,
        icon: PropTypes.node.isRequired,
        openIcon: PropTypes.node.isRequired,
        closeIcon: PropTypes.node.isRequired,
        subMenu: PropTypes.node.isRequired,
        handleDrawerOpen: PropTypes.node.isRequired,
    };

    const [expandButton, setExpandButton] = useState(expand);

    const handleExpand = () => {
        setExpandButton(!expandButton);
        handleDrawerOpen();
    }

    return (
        <>
            <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton onClick={handleExpand}>
                    <ListItemIcon >
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={title} />
                    {expandButton ? openIcon : closeIcon}
                </ListItemButton>
                {Object.values(subMenu).map((item, index) => {
                    return (
                        <Collapse in={expandButton} timeout="auto" unmountOnExit key={index}>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        {item.iconText}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    )
                })
                }
            </ListItem>
        </>

    )




}