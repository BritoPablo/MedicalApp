import {
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import { tokens } from "../../theme";

export const RegisterPage = () => {

  const colors = tokens("");

  return (
    <>
      <AuthLayout title="Registrar nuevo usuario" caption="Ingrese sus datos personales">
        <form>
          <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre"
                type="text"
                placeholder="Ingresa tu nombre"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Apellido"
                type="text"
                placeholder="Ingresa tu apellido"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Email"
                type="email"
                placeholder="Ingresa tu email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contrasena"
                type="password"
                placeholder="Ingresa tu contrasena"
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
                  Crear usuario
                </Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/login">
                Ya tienes una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
