import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//mui
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

//import components
import imagenes from '../../assets/index';

//properties
import { properties } from "../Properties/properties";

//icons



//transition
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const theme = createTheme();
const UserLogin = properties.Apis.Login;

//function SigIn
export default function SigIn() {

  //const for navigate 
  const navigate = useNavigate();

  //function go to Register page
  const goRegister = () => {
    navigate(properties.endpoints.Register)
  }

  //function go to Home page
  // const goHome = () => {
  //   navigate(properties.endpoints.Home)
  // }


  //vars for backEnd
  const [user, setUser] = useState("");

  const [password, setPassword] = useState("");

  //const for send to api method get
  const handleSubmit = async (e) => {
    e.preventDefault();
    //para detener el evento, en este caso el submit del click para que no cargue la pagina

    // const data = new FormData(e.currentTarget);
    // console.log({
    //   usuario: data.get("usuario"),
    //   password: data.get("password"),
    //   remember: checked,
    // });

    //send information to backEnd
    await axios
      .post(UserLogin, {
        user: user,
        password: password,
      })
      // .then((response) => {
      //   // console.log(response);
      //   // if (response.data === "" || response.data === 1) {
      //   // } else if (response.data !== 1) {
      //   //   navigate("/Home");
      //   // }
      // })
      .catch(function (error) {
        console.log(error);
      });
  };

  //Checked remember box

  // const [checked, setChecked] = React.useState(false);

  // const handleChange = (e) => {
  //   setChecked(e.target.checked);
  //   // console.log(e);
  // };


  //Open Modal forget password

  const [forgetMenu, setforgetMenu] = React.useState(false);

  //Set open modal to true (open)
  const forgetMenuOpen = () => {
    setforgetMenu(true);
  };

  //Set open modal to false (close)
  const forgetMenuClose = () => {
    setforgetMenu(false);
  };



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#fff" }}>
            <img src={imagenes[0].iconoEmpresa}
              alt={imagenes[0].title} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar sesión
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            // noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="user"
              label="Usuario"
              name="user"
              onChange={(e) => setUser(e.target.value)}
              autoComplete="user"
              type="text"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Contraseña"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="password"
              type="password"
              autoFocus
            />
            {/* <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                  color="primary"
                />
              }
              label="Recuérdame "
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Typography
                  onClick={forgetMenuOpen}
                  sx={{
                    cursor: "pointer",
                    color: "#1976d2",
                    fontSize: "0.875rem"
                  }}>
                  ¿Olvidaste tu contraseña?
                </Typography>
                <Dialog
                  open={forgetMenu}
                  TransitionComponent={Transition}
                  onClose={forgetMenuClose}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle>
                    {"¿Olvidaste tu usuario?"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                      Para recuperar la contraseña ingresa tu correo electronico.
                      <br />
                      Revisa e ingresa al link enviado al correo.
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      name="forgotPassword"
                      id="forgotPassword"
                      label="Correo electronico"
                      type="email"
                      fullWidth
                      variant="standard"
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={forgetMenuClose}>
                      Cerrar
                    </Button>
                    <Button onClick={forgetMenuClose}>
                      Enviar
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
              <Grid item>
                <Link onClick={goRegister}
                  variant="body2"
                  sx={{
                    textDecoration: "none",
                    cursor: "pointer"
                  }}>
                  {"Registrarse"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
