import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import SchoolIcon from "@mui/icons-material/School";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import getManyVis from "../utils/visHelpers";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="">
        {/* Your Website */}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const visUrls = [
  "https://public.tableau.com/shared/SZQ2TRFCB?:display_count=n&:origin=viz_share_link&:embed=y",
  "https://public.tableau.com/shared/MJR2WRXNW?:display_count=n&:origin=viz_share_link&:embed=y",
];

const visTitles = [
  "Math, Literature and Foreign Language Score By Province",
  "Poverty Rate By Province",
];

export default function MainPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <SchoolIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            DATA 501 Project{" "}
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="ms">
            <Typography
              maxWidth="ms"
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Factors Affecting Vietnamese High School Exam Grades
            </Typography>
            <Typography
              margin="auto"
              maxWidth="sm"
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Descriptive text
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 1 }} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {getManyVis(visUrls).map((vis, index) => (
              <Grid item key={index} xs={12} sm={6} md={6}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {vis}
                  <CardContent sx={{ flexGrow: 1 }}>
                    {/* <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography> */}
                    <Typography>{visTitles[index]}</Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}
          </Grid>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Button</Button>
            <Button variant="outlined">Button2</Button>
          </Stack>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Footer Text!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
