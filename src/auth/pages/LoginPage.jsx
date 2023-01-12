import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, TextField } from "@mui/material";

import AuthLayout from "../../layouts/AuthLayout";
import { tokens } from "../../theme";
import { useForm } from "../../hooks";
import { checkingAuthentication } from "../../store/auth";

export const LoginPage = () => {
  const colors = tokens("light");
  const dispatch = useDispatch()  
  const {email, password, onInputChange} = useForm({
    email: 'pablo@gmail.com',
    password: '123456'
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({email, password});
    dispatch( checkingAuthentication() );
  }



  return (
    <>
      <AuthLayout
        title="Hola, bienvenido otra vez"
        caption="Ingresa con tu correo electronico"
      >
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Email"
                type="email"
                placeholder="Ingresa tu email"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contrasena"
                type="password"
                placeholder="Ingresa tu contrasena"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
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
                  Ingresar
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Button
                  component={RouterLink}
                  to="/auth/register"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: colors.grey[800],
                    color: "black",
                    borderRadius: 25,
                    height: 50,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: colors.grey[700],
                    },
                  }}
                >
                  Crear una nueva cuenta
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Button
                  component={RouterLink}
                  to="/auth/resetpass"
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
                  Olvide mi contrasena
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
