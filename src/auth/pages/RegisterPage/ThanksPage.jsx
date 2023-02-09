import { Link as RouterLink } from "react-router-dom";
import { Button, Grid } from "@mui/material";

import { tokens } from "../../../theme";
import { resetAuthState } from "../../../store/auth";
import { useDispatch } from "react-redux";


const ThanksPage = () => {
  const colors = tokens("light");
  const dispatch = useDispatch();
  return (
    <>
      <form>
        <Grid container>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button
                component={RouterLink}
                onClick={() => dispatch(resetAuthState()) }
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
                Aceptar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default ThanksPage;
