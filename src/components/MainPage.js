import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import SchoolIcon from "@mui/icons-material/School";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
import Poverty from "../Poverty.png";
import Cleanwater from "../Cleanwater.png";
// import AllPagesPDFViewer from "../utils/allPages";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © Justin Parker and Cebrail Durna"}
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
  "https://public.tableau.com/shared/9S4K4H48D?:display_count=n&:origin=viz_share_link&:embed=y",
  "https://public.tableau.com/shared/ZDDFPKRQ8?:display_count=n&:origin=viz_share_link&:embed=y",
  "https://public.tableau.com/views/ExponentialRegression/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link",
];

const visTitles = [
  "Math, Literature and Foreign Language Score By Province",
  "Poverty Rate By Province",
  "Main Exam Scores by Poverty Rate",
];

const visDescriptions = [
  "It can be observed that the students in poorer provinces tend to score less in the Exam.",
  "",
  "42% of the variation in exam scores can be explained by the poverty rate alone and exams scores decline as poverty increases.",
];

const vizWidth = [6, 6, 12];

// const visDetail = [
//   {
//     url: "https://public.tableau.com/shared/SZQ2TRFCB?:display_count=n&:origin=viz_share_link&:embed=y",
//     title: "Math, Literature and Foreign Language Score By Province",
//     width: 6,
//   },
//   {
//     url: "https://public.tableau.com/shared/MJR2WRXNW?:display_count=n&:origin=viz_share_link&:embed=y",
//     title: "Poverty Rate By Province",
//     width: 6,
//   },
//   {
//     url: "https://public.tableau.com/views/Regression_16787418763850/Regression?:language=en-US&:display_count=n&:origin=viz_share_link",
//     title: "Main Exam Scores by Poverty Rate",
//     width: 12,
//   },
// ];

export default function MainPage() {
  // const [page, setPage] = useState("visuals");

  // const onClick = (page) => {
  //   const changePage = () => {
  //     setPage(page === "visuals" ? "visuals" : "report");
  //     console.log("success");
  //   };
  //   return changePage;
  // };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <SchoolIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            DATA 501 Project by Justin Parker and Cebrail Durna{" "}
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
              maxWidth="md"
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              {" "}
              {
                "The education system of a country plays a crucial role in its overall development and progress, and similarly, high school education is a crucial stage in a student’s life, as it lays the foundation for higher education and future career opportunities."
              }
            </Typography>
            <br />
            <br />
            <Typography
              margin="auto"
              maxWidth="md"
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              {`This is no different for Vietnam. According to the world bank 'Poorer ethnic communities in geographically remote areas experience higher dropout rates' and learning outcomes in Vietnam suffer from acute geographical inequality, with some regions persistently falling behind other regions in the past 10 years.`}
            </Typography>
          </Container>
        </Box>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          {/* <Button variant="contained" onClick={onClick("visuals")}>
            Visuals
          </Button>
          <Button variant="outlined" onClick={onClick("report")}>
            Report
          </Button> */}
        </Stack>
        <Container sx={{ py: 1 }} maxWidth="xl">
          {/* End hero unit */}

          <Grid container spacing={4}>
            {getManyVis(visUrls).map((vis, index) => (
              <Grid
                item
                key={index}
                xs={12}
                sm={vizWidth[index]}
                md={vizWidth[index]}
              >
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
                    {visDescriptions[index] && <br /> && (
                      <Typography>{visDescriptions[index]}</Typography>
                    )}
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}
            <Grid item key={"poverty"} xs={12} sm={6} md={6}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img src={"https://i.imgur.com/YVIl1fH.png"} />
                <CardContent sx={{ flexGrow: 1 }}>
                  {/* <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography> */}
                  <Typography>Poverty Across The Years</Typography>
                  {
                    <Typography>
                      It can be observed that the overall poverty rates are
                      getting lower as time pases
                    </Typography>
                  }
                  <br />
                </CardContent>
              </Card>
            </Grid>
            <Grid item key={"poverty"} xs={12} sm={6} md={6}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img src={"https://i.imgur.com/esHt2dQ.png"} />
                <CardContent sx={{ flexGrow: 1 }}>
                  {/* <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography> */}
                  <Typography>Clean Water Access Across The Years</Typography>
                  {
                    <Typography>
                      Clean Water access which is directly related to SES status
                      also is getting better by year
                    </Typography>
                  }
                </CardContent>
              </Card>
            </Grid>
            <Grid item key={"ysbA3_ZQXO0"} xs={12} sm={12} md={12}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <iframe
                  // width="560"
                  height="700"
                  src="https://www.youtube.com/embed/ysbA3_ZQXO0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          {/* Footer */}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {/* Footer Text! */}
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
