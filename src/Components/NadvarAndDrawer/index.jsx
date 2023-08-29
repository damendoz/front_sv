//React
import React from "react";

//Mui
// import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
// import { ThemeProvider } from "@mui/material/styles";

//Navigate
import { useNavigate } from "react-router-dom";

//Components
import { MainListItems, SecondaryListItems } from "../listItems";
import { AppBar } from "../AppBar";
import { Drawer } from "../Drawer";

//Icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";


//Import transition
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

//Export function
export default function AppNadvarDrawer() {


  //Const for open drawer left
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  // Open icon rigth of perfil and exit system
  const [auth] = React.useState(true);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //Open modal whit transition for information the user
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  //Navigates for routes

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/Home");
  };

  const goConsultInfo = () => {
    navigate("/ConsultInfo");
  };

  const handleClose3 = () => {
    navigate("/");
  };

  return (
    <>
      <AppBar position="absolute" open={openDrawer}>
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >

          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleOpenDrawer}
            sx={{
              marginRight: "36px",

              ...(openDrawer && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box component="form" sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} sx={{ flexWrap: "nowrap" }}>

              <Grid item md={2.5} sx={{ margin: "auto 5px" }}>
                <Grid container>
                  <Link
                    underline="none"
                    onClick={goHome}
                  >
                    <Typography
                      sx={{
                        cursor: "pointer",
                        color: "#fff",
                        fontSize: "1.3em"
                      }}
                    >
                      ITBC Groups
                    </Typography>
                  </Link>
                </Grid>
              </Grid>


              <Grid item md={1.3} sx={{ margin: "auto 2px" }}>
                <Grid container>
                  <TextField
                    select
                    defaultValue="Doc. Identidad"
                    id="colorGrid1"
                  >
                    <MenuItem value="Doc. Identidad" >
                      Doc. Identidad
                    </MenuItem>
                  </TextField>
                </Grid>
              </Grid>


              <Grid item md={.7} sx={{ margin: "auto 2px" }}>
                <Grid container>
                  <TextField
                    select
                    defaultValue="V"
                    id="colorGrid2"
                  >
                    <MenuItem value="V">V</MenuItem>
                    <MenuItem value="P">P</MenuItem>
                    <MenuItem value="J">J</MenuItem>
                  </TextField>
                </Grid>
              </Grid>
              <Grid item md={3.4} sx={{ margin: "auto 5px", display: "flex", justifyContent: "center" }}>
                <InputBase
                  id="input__parametroBusqueda"
                  style={{
                    color: "#fff",
                    marginLeft: 15,
                    width: 300
                  }}
                  placeholder="Parámetro de búsqueda"
                />
                <Grid item md={1} sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton
                    type="submit"
                    style={{ padding: 8, color: "white" }}
                    aria-label="Search"
                    onClick={goConsultInfo}
                  >
                    <SearchIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid item md={4} sx={{ margin: "auto 5px", display: "flex", justifyContent: "flex-end" }}>
                {auth && (
                  <div>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >

                      <AccountCircleIcon sx={{ fontSize: 25 }} />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClickOpen}>
                        <PersonIcon />
                        <Typography sx={{ pl: "5px", color: "#000000DE" }}>
                          Perfil
                        </Typography>
                      </MenuItem>
                      <MenuItem onClick={handleClose3}>
                        <LogoutIcon />
                        <Typography sx={{ pl: "5px", color: "#000000DE" }}>
                          Cerrar sesión
                        </Typography>
                      </MenuItem>
                      <Divider />
                      <Typography
                        color="#1976d2"
                        noWrap
                        sx={{ fontSize: "0.7em", display: "flex", justifyContent: "center" }}
                      >
                        Release: 01.01.01
                      </Typography>
                    </Menu>
                  </div>
                )}
              </Grid>
            </Grid>
          </Box>
          <Dialog
            open={open2}
            TransitionComponent={Transition}
            onClose={handleClose2}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Nombre de usuario"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Donde saldra el contenido del usuario
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose2}>Cerrar</Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={openDrawer}
        sx={{
          position: "fixed",
          zIndex: "1200",
          flexDirection: "colum",
          height: "100vh",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleOpenDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <MainListItems openDrawer={openDrawer} />
          <Divider sx={{ my: 1 }} />
          <SecondaryListItems />
        </List>
      </Drawer>
    </>
  )
}