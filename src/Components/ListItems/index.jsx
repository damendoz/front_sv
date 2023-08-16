import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ListSubheader from "@mui/material/ListSubheader";
import { useNavigate } from "react-router-dom";

//icons
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import OutboxIcon from "@mui/icons-material/Outbox";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PostAddIcon from "@mui/icons-material/PostAdd";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import StarBorder from "@mui/icons-material/StarBorder";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import SendIcon from '@mui/icons-material/Send';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import LayersIcon from "@mui/icons-material/Layers";

export function MainListItems() {
  const navigate = useNavigate();

  const [openlistitem, setOpenlistitem] = React.useState(false);

  const handleClick = () => {
    setOpenlistitem(!openlistitem);
  };

  // const [openlistitem2, setOpenlistitem2] = React.useState(false);

  // const handleClick2 = () => {
  //   setOpenlistitem2(!openlistitem2);
  // };

  // const [openlistitem3, setOpenlistitem3] = React.useState(false);

  // const handleClick3 = () => {
  //   setOpenlistitem3(!openlistitem3);
  // };

  const [openlistitem4, setOpenlistitem4] = React.useState(false);

  const handleClick4 = () => {
    setOpenlistitem4(!openlistitem4);
  };

  const advance = () => {
    navigate("/Advance");
  };

  const consultAdvance = () => {
    navigate("/consultAdvance");
  };
  // const relatedExpenses = () => {
  //   navigate("/RelatedExpenses");
  // };
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
      <ListItemButton onClick={handleClick4}>
        <ListItemIcon>
          <PostAddIcon />
        </ListItemIcon>
        <ListItemText primary="Anticipos" />
        {openlistitem4 ? (
          <ExpandLess sx={{ ml: 17 }} />
        ) : (
          <ExpandMore sx={{ ml: 17 }} />
        )}
      </ListItemButton>
      <Collapse in={openlistitem4} timeout="auto" unmountOnExit>
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
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Administrador" />
        {openlistitem ? (
          <ExpandLess sx={{ ml: 17 }} />
        ) : (
          <ExpandMore sx={{ ml: 17 }} />
        )}
      </ListItemButton>
      <Collapse in={openlistitem} timeout="auto" unmountOnExit>
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
