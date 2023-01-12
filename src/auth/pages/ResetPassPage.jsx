import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import { tokens } from "../../theme";

export const ResetPassPage
 = () => {
  const colors = tokens("light");

  return (
    <>
      <AuthLayout
        title="Hola, vamos a reestablecer tu contrasena"
        caption="Ingresa con tu correo electronico"
      >
        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Email"
                type="email"
                placeholder="Ingresa tu email"
                fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: colors.medColors[200],
                    borderRadius: 25,
                    height: 50,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: colors.medColors[150],
                    },
                  }}
                >
                  Reestablecer contrasena
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  component={RouterLink}
                  to="/auth/login"
                  variant="text"
                  fullWidth
                  sx={{
                    
                    borderRadius: 25,
                    height: 50,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: colors.grey[900],
                    },
                  }}
                >
                  Volver
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};

