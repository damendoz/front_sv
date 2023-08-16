import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//mui
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//import components
import imagenes from '../../assets/index';

const theme = createTheme();
const UserLogin = "http://localhost:8000/api/User/Login";

export default function SigIn() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    //para detener el evento, en este caso el submit del click para que no cargue la pagina

    // const data = new FormData(e.currentTarget);
    // console.log({
    //   usuario: data.get("usuario"),
    //   password: data.get("password"),
    //   remember: checked,
    // });

    await axios
      .post(UserLogin, {
        user: user,
        password: password,
      })
      .then((response) => {
        // console.log(response);
        if (response.data === "" || response.data === 1) {
        } else if (response.data !== 1) {
          navigate("/Home");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [checked, setChecked] = React.useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    // console.log(e);
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
            <img src={imagenes[0].iconoEmpresa} alt={imagenes[0].title} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar sesión
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="user"
              label="Usuario"
              name="usuario"
              onChange={(e) => setUser(e.target.value)}
              autoComplete="usuario"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="password"
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
                <Link href="/" variant="body2">
                  {"¿Olvidaste tu contraseña?"}
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
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
