import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
// import { useDispatch } from 'react-redux';

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
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import InputBase from '@mui/material/InputBase';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import FormControl from "@mui/material/FormControl";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
import { properties } from "../Properties/properties";

//import components
import imagenes from '../../assets/index';


const theme = createTheme();

const User = "http://localhost:8000/api/User";
const Employee = "http://localhost:8000/api/Employee";

export default function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [document_type, setDocumentType] = useState("");
  const [id_identity, setIdIdentity] = useState("");
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  // const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [codArea, SetCodArea] = useState("");

  const store = async (e) => {
    e.preventDefault();

    await axios.post(User, {
      user: user,
      password: password
    });

    await axios.post(Employee, {
      id_identity: id_identity,
      name: name,
      last_name: last_name,
      email: email,
      birthday: birthday,
      gender: gender,
      phone: phone,
      address: address,
      document_type: document_type,
      country: country
    });

    navigate("/");
  };

  const goHome = () =>{
    navigate(properties.endpoints.SigIn)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
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
            Registro
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={store}
            sx={{ flexGrow: 1, mt: 1.5 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={3.2}>
                <TextField
                  name="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  id="country"
                  label="País"
                  select
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                >
                  <MenuItem value="Venezuela">Venezuela</MenuItem>
                  <MenuItem value="España">España</MenuItem>
                  <MenuItem value="Republica Dominicana">
                    Republica Dominicana
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={3.3}>
                <TextField
                  required
                  error={false}
                  autoComplete="given-name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  id="name"
                  label="Nombres"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  autoComplete="given-name"
                  name="last_name"
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  fullWidth
                  id="last_name"
                  label="Apellidos"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={2.5}>
                <TextField
                  fullWidth
                  autoComplete="given-birthday"
                  name="birthday"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  required
                  id="birthday"
                  type="date"
                  label="Fecha de nacimiento"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={1.1}>
                <TextField
                  name="document_type"
                  value={document_type}
                  onChange={(e) => setDocumentType(e.target.value)}
                  required
                  id="document_type"
                  label="ID"
                  select
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                >
                  <MenuItem value="V">V</MenuItem>
                  <MenuItem value="P">P</MenuItem>
                  <MenuItem value="E">E</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  autoComplete="given-name"
                  name="id_identity"
                  value={id_identity}
                  onChange={(e) => setIdIdentity(e.target.value)}
                  required
                  id="id_identity"
                  label="Documento de ID"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={1.4}>
                <TextField
                  fullWidth
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                  select
                  id="gender"
                  label="Género"
                  InputLabelProps={{
                    shrink: true,
                  }}
                >
                  <MenuItem value="M">M</MenuItem>
                  <MenuItem value="F">F</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  name="codArea"
                  value={codArea}
                  onChange={(e) => SetCodArea(e.target.value)}
                  required
                  id="codArea"
                  label="Código del área"
                  select
                  InputLabelProps={{
                    shrink: true,
                  }}
                >
                  <MenuItem value="58">+58</MenuItem>
                  <MenuItem value="09">+09</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  autoComplete="given-name"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  id="phone"
                  label="Teléfono"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={3.5}>
                <TextField
                  fullWidth
                  autoComplete="given-name"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  id="email"
                  label="Correo electrónico"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  autoComplete="given-name"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  multiline
                  rows={4}
                  type="textarea"
                  id="adress"
                  label="Dirección"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  autoComplete="new-user"
                  name="user"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  required
                  fullWidth
                  id="user"
                  label="Usuario"
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrarse
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={goHome} variant="body2" sx={{ textDecoration: "none", cursor:"pointer" }}>
                  ¿Ya tienes una cuenta? Ingresa.
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
