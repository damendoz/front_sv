
//Mui
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

//components
import AppNadvarDrawer from "../NadvarAndDrawer";
import { mdTheme } from "../AppBar";

//css
import './index.css'




export default function Home() {

  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <AppNadvarDrawer />
      <Box
        component="main"
        sx={{
          backgroundColor: "white",
          display: "flex",
          position: "relative",
          top: "64px",
          left: "72px",
        }}
      >

        <Container maxWidth="xlg" sx={{ mt: 1, mb: 4, ml: 10 }}>
          <Grid container>
            <Grid item>
              hola
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
