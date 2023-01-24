import { CssBaseline, Grid, Paper, Typography } from "@mui/material";
import LogoLogin from "../../public/assets/logos/logoLogin.svg";
import { tokens } from "../theme";

import fondoLogo from "../../public/assets/images/backGrounds/fondoLogSing.png"


const AuthLayout = ({ children, title = "", caption="" }) => {
  const colors = tokens("light");

  return (
    <>
    <Paper 
    sx={{backgroundImage: 'url(../../public/assets/images/backGrounds/fondoLogSing.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}
    >  
      <CssBaseline />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="start"
        justifyContent="center"
        sx={{
          minHeight: "100vh",
          padding: {
            sm : 4
          }
        }}
      >
        <Grid
          container
          direction="column"
          md={8}
          lg={4}
          sx={{
            backgroundColor: "white",
            padding: 3,
            borderRadius: 2,
            minHeight: {
              sm : "calc(100vh - 70px)",
              xs : "100vh"
            },
          }}
        >
          <Grid container justifyContent="center" minHeight={150}>
            <img src={LogoLogin} alt="MedicalApp" width={150} height="auto" />
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            fullWidth
            minHeight={80}
          >
            <Typography
              variant="h5"
              sx={{
                color: colors.medColors[200],
                fontWeight: "bold",
              }}
              align="center"
            >
              {title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: colors.grey[200],
                fontWeight: 100,
                fontSize: 15,
              }}
              align="center"
            >
              {caption}
            </Typography>
          </Grid>
          {children}
        </Grid>
      </Grid>


      </Paper>
    </>
  );
};

export default AuthLayout;
