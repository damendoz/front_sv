import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
import MenuItem from "@mui/material/MenuItem";

//properties
import { properties } from "../Properties/properties";

//import components
import imagenes from '../../assets/index';


const theme = createTheme();

const User = properties.Apis.Users;

const Employee = properties.Apis.Employers;

export default function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [idIdentity, setIdIdentity] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [codArea, SetCodArea] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();

    await axios.post(User, {
      user: user,
      password: password
    });

    await axios.post(Employee, {
      id_identity: idIdentity,
      name: name,
      last_name: lastName,
      email: email,
      birthday: birthday,
      gender: gender,
      phone: phone,
      address: address,
      document_type: documentType,
      country: country
    });

    navigate(properties.endpoints.SigIn);
  };

  const goHome = () => {
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
            <img
              src={imagenes[0].iconoEmpresa}
              alt={imagenes[0].title}
            />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registro
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={registerUser}
            sx={{ flexGrow: 1, mt: 1.5 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={3.2}>
                <TextField
                  required
                  name="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  id="country"
                  label="País"
                  fullWidth
                  autoComplete="country"
                  select
                  InputLabelProps={{
                    shrink: true,
                  }}
                >
                  <MenuItem value="Venezuela">
                    Venezuela
                  </MenuItem>
                  <MenuItem value="España">
                    España
                  </MenuItem>
                  <MenuItem value="Republica Dominicana">
                    Republica Dominicana
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={3.3}>
                <TextField
                  required
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  label="Nombres"
                  fullWidth
                  autoComplete="name"
                  InputLabelProps={{
                    shrink: true,
                  }}

                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  id="lastName"
                  fullWidth
                  label="Apellidos"
                  autoComplete="lastName"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={2.5}>
                <TextField
                  required
                  name="birthday"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  id="birthday"
                  fullWidth
                  label="Fecha de nacimiento"
                  autoComplete="birthday"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={1.1}>
                <TextField
                  required
                  name="documentType"
                  value={documentType}
                  onChange={(e) => setDocumentType(e.target.value)}
                  id="documentType"
                  fullWidth
                  label="ID"
                  autoComplete="documentType"
                  select
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
                  required
                  name="idIdentity"
                  value={idIdentity}
                  onChange={(e) => setIdIdentity(e.target.value)}
                  id="idIdentity"
                  fullWidth
                  label="Documento de ID"
                  autoComplete="idIdentity"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={1.4}>
                <TextField
                  required
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  id="gender"
                  fullWidth
                  label="Género"
                  autoComplete="gender"
                  select
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
                  required
                  name="codArea"
                  value={codArea}
                  onChange={(e) => SetCodArea(e.target.value)}
                  id="codArea"
                  fullWidth
                  label="Código del área"
                  autoComplete="codArea"
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
                  required
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  id="phone"
                  fullWidth
                  label="Teléfono"
                  autoComplete="phone"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={3.5}>
                <TextField
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  fullWidth
                  label="Correo electrónico"
                  autoComplete="email"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  id="adress"
                  fullWidth
                  label="Dirección"
                  autoComplete="address"
                  type="textarea"
                  multiline
                  rows={4}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  name="user"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  id="user"
                  fullWidth
                  label="Usuario"
                  autoComplete="user"
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  fullWidth
                  label="Contraseña"
                  autoComplete="password"
                  type="password"
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
                <Link
                  onClick={goHome}
                  variant="body2"
                  sx={{
                    textDecoration: "none",
                    cursor: "pointer"
                  }}>
                  ¿Ya tienes una cuenta? Ingresa.
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
