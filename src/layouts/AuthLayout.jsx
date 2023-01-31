import { CssBaseline, Grid, Paper, Typography } from "@mui/material";
import LogoLogin from "../../public/assets/logos/logoLogin.svg";
import { tokens } from "../theme";


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
        justifyContent="center"
        sx={{
          minHeight: "100vh",
          padding: {
            sm : 4
          },
          alignItems : {
            xs : "center",
            md : "start"
          }
        }}
      >
        <Grid
          container
          direction="column"
          sx={{
            backgroundColor: "white",
            padding: 3,
            borderRadius: 2,
            maxWidth: {
              sm: "60vw",
              md: "50vw",
              lg: "30vw"
            },
            minHeight: {
              xs : "100vh",
              sm : "85vh"
            },       
          }}
        >
          <Grid container justifyContent="center" minHeight={90}>
            <img src={LogoLogin} alt="MedicalApp" width={150} height="auto" />
          </Grid>
          <Grid    
            container
            direction="column"
            justifyContent="center"
            sx={{ width: "100%" }}
            minHeight={70}
          >
            <Typography
              variant="h6"
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
