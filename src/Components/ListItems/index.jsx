//React
import * as React from "react";

//Navigate
import { useNavigate } from "react-router-dom";

//ListItems
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ListSubheader from "@mui/material/ListSubheader";

//icons
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PostAddIcon from "@mui/icons-material/PostAdd";


export function MainListItems() {
  
  //open list 
  const [openListAdvance, setopenListAdvance] = React.useState(false);

  const openListAdvances = () => {
      setopenListAdvance(!openListAdvance);
  };
  // setopenListAdvance(!openListAdvance);
  const [openListAdm, setopenListAdm] = React.useState(false);

  const openListAdministrator = () => {
    setopenListAdm(!openListAdm);
  };

  //Navigates
  const navigate = useNavigate();
  const advance = () => {
    navigate("/Advance");
  };

  const consultAdvance = () => {
    navigate("/consultAdvance");
  };

  const projects = () => {
    navigate("/projects");
  };

  const users = () => {
    navigate("/users");
  };

  const clients = () => {
    navigate("/clients");
  };

  const role = () => {
    navigate("/rol");
  };

  return (
    <React.Fragment>
      <ListItemButton onClick={openListAdvances}>
        <ListItemIcon>
          <PostAddIcon />
        </ListItemIcon>
        <ListItemText primary="Anticipos" />
        {openListAdvance ? (
          <ExpandLess sx={{ ml: 17 }} />
        ) : (
          <ExpandMore sx={{ ml: 17 }} />
        )}
      </ListItemButton>
      <Collapse in={openListAdvance} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton onClick={advance} sx={{ pl: 2.5 }}>
            <ListItemIcon>
              <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
            </ListItemIcon>
            <ListItemText primary="Solicitar Anticipo" />
          </ListItemButton>
          <ListItemButton onClick={consultAdvance} sx={{ pl: 2.5 }}>
            <ListItemIcon>
              <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
            </ListItemIcon>
            <ListItemText primary="Consulta de Anticipo" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 2.5 }}>
            <ListItemIcon>
              <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
            </ListItemIcon>
            <ListItemText primary="Relación de Gastos" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 2.5 }}>
            <ListItemIcon>
              <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
            </ListItemIcon>
            <ListItemText primary="Consulta de Relación" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={openListAdministrator}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Administrador" />
        {openListAdm ? (
          <ExpandLess sx={{ ml: 17 }} />
        ) : (
          <ExpandMore sx={{ ml: 17 }} />
        )}
      </ListItemButton>
      <Collapse in={openListAdm} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton onClick={users} sx={{ pl: 2.5 }}>
            <ListItemIcon>
              <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
            </ListItemIcon>
            <ListItemText primary="Usuarios" />
          </ListItemButton>
          <ListItemButton onClick={role} sx={{ pl: 2.5 }}>
            <ListItemIcon>
              <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
            </ListItemIcon>
            <ListItemText primary="Roles" />
          </ListItemButton>
          <ListItemButton onClick={clients} sx={{ pl: 2.5 }}>
            <ListItemIcon>
              <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
            </ListItemIcon>
            <ListItemText primary="Clientes" />
          </ListItemButton>
          <ListItemButton onClick={projects} sx={{ pl: 2.5 }}>
            <ListItemIcon>
              <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
            </ListItemIcon>
            <ListItemText primary="Proyectos" />
          </ListItemButton>
          {/* <ListItemButton sx={{ pl: 2.5 }}>
            <ListItemIcon>
              <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
            </ListItemIcon>
            <ListItemText primary="Cargos" />
          </ListItemButton> */}
          {/* <ListItemButton sx={{ pl: 2.5 }}>
            <ListItemIcon>
              <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
            </ListItemIcon>
            <ListItemText primary="Monedas" />
          </ListItemButton> */}
        </List>
      </Collapse>
    </React.Fragment>
  );
}

export function SecondaryListItems() {
  const [openlistitem, setOpenlistitem] = React.useState(false);

  const handleClick = () => {
    setOpenlistitem(!openlistitem);
  };

  return (
    <React.Fragment>
      <ListSubheader component="div" inset></ListSubheader>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Reportes" />
        {openlistitem ? (
          <ExpandLess sx={{ ml: 17 }} />
        ) : (
          <ExpandMore sx={{ ml: 17 }} />
        )}
      </ListItemButton>
      <Collapse in={openlistitem} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.5 }}>
            <ListItemIcon>
              <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
            </ListItemIcon>
            <ListItemText primary="Reporte de Anticipo" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 2.5 }}>
            <ListItemIcon>
              <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
            </ListItemIcon>
            <ListItemText primary="Reporte de Relación" />
          </ListItemButton>
        </List>
      </Collapse>
    </React.Fragment>
  );
}
