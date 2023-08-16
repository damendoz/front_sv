import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
// import { alpha } from "@mui/material/styles";

//mui
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";


//components
import { MainListItems, SecondaryListItems } from "../ListItems";
import { useNavigate } from "react-router-dom";
import { Drawer } from "../Drawer";
import { AppBar, mdTheme } from "../AppBar";

//icon
import SearchIcon from "@mui/icons-material/Search";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });



  export default function Home(){
    const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [auth] = React.useState(true);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClose3 = () => {
    navigate("/");
  };

  const goHome = () => {
    navigate("/Home");
  };

  const goConsultInfo = () => {
    navigate("/ConsultInfo");
  };
  
    return(
        <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: "24px", // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: "36px",
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Box component="form" sx={{ flexGrow: 1 }}>
                <Grid container soacing={2}>
                  <Grid item xs={1} md={2}>
                    <Paper
                      style={{
                        backgroundColor: "#1976d2",
                        color: "white",
                        borderRadius: "0",
                        boxShadow: "0px 0px 0px 0px",
                        paddingTop: 10,
                        position: "absolute",
                      }}
                    >
                      <Link color="inherit" underline="none" onClick={goHome}>
                        <Typography
                          noWrap
                          sx={{
                            cursor: "pointer",
                            fontSize: "1.3em",
                            // backgroundColor: "black",
                          }}
                        >
                          ITBC Groups
                        </Typography>
                      </Link>
                    </Paper>
                  </Grid>
                  <Grid container item xs={8} spacing={2}>
                    <Grid item md={2}>
                      <Paper
                        style={{
                          marginTop: 3,
                          borderRadius: 5,
                          backgroundColor: "#1976d2",
                        }}
                      >
                        <TextField
                          fullWidth
                          defaultValue="Doc. Identidad"
                          select
                          style={{
                            backgroundColor: "#1976d2",
                            borderRadius: 5,
                            color: "white",
                          }}
                        >
                          <MenuItem value="Doc. Identidad">
                            Doc. Identidad
                          </MenuItem>
                        </TextField>
                      </Paper>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                      <Paper
                        style={{
                          marginTop: 3,
                          borderRadius: 5,
                          backgroundColor: "#1976d2",
                          color: "white",
                        }}
                      >
                        <TextField
                          style={{
                            backgroundColor: "#1976d2",
                            borderRadius: 5,
                            color: "white",
                          }}
                          fullWidth
                          select
                        >
                          <MenuItem value="V">V</MenuItem>
                          <MenuItem value="P">P</MenuItem>
                          <MenuItem value="J">J</MenuItem>
                        </TextField>
                      </Paper>
                    </Grid>
                    <Grid item xs={10} sm={8} md={4}>
                      <Paper
                        style={{
                          background: "#1976d2",
                          color: "white",
                          marginTop: 10,
                          border: "black",
                          height: 40,
                          minWidth: 250,
                          width: 500,
                        }}
                      >
                        <InputBase
                          style={{
                            color: "white",
                            marginLeft: 15,
                            width: 430,
                          }}
                          placeholder="Parámetro de búsqueda"
                          color="white"
                        />
                        <IconButton
                          type="submit"
                          style={{ padding: 8, color: "white" }}
                          aria-label="Search"
                          onClick={goConsultInfo}
                        >
                          <SearchIcon />
                        </IconButton>
                      </Paper>
                    </Grid>
                  </Grid>
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
                        {/* <SettingsIcon sx={{ fontSize: 30 }} /> */}
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
                          sx={{ fontSize: "0.6em", ml: "17px", mb: "2px" }}
                        >
                          Release: 01.01.01
                        </Typography>
                      </Menu>
                    </div>
                  )}
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
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
              <MainListItems /> 
              <Divider sx={{ my: 1 }} />
              <SecondaryListItems /> 
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
          </Box>
        </Box>
      </ThemeProvider>
    );
  }