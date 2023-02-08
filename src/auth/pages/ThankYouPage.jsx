import { Button, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import { tokens } from "../../theme";

export const ThankYouPage = () => {
  const colors = tokens("light");

  return (
    <>
      <AuthLayout
        title="Hola, gracias por crear tu nueva cuenta"
        caption="Por favor revisa tu correo electronico para activar tu cuenta"
      >
        <form>
          <Grid container>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12}>
                <Button
                  component={RouterLink}
                  to="/auth/login"
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
                  Ir a Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
