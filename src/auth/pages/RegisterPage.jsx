import { Box, Button, Grid, IconButton, Link, TextField, Tooltip, Typography } from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks";
import AuthLayout from "../../layouts/AuthLayout";
import { tokens } from "../../theme";
import { useState } from "react";

const formData = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  passwordCheck: "",
};

const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()+=?])(?!\s)[a-zA-Z\d!@#$%^&*()+=?]{8,16}$/m;




export const RegisterPage = () => {
  const colors = tokens("");

  const [formSubmitted, setFormSubmitted] = useState(false)

  const formValidations = {
    first_name: [(value)=>regexName.test(value), 'Ingrese un nombre valido'],
    last_name: [(value)=>regexName.test(value), 'Ingrese un apellido valido'],
    email: [(value)=>regexEmail.test(value), 'Ingrese un email valido'],
    password: [(value)=>regexPassword.test(value), 'Su contraseña debe contener entre 8 y 16 caracteres y al menos: un numero, una letra mayuscula, una letra minuscula y un caracter especial'],
    passwordCheck: [(value)=>value===formState['password'], 'La contraseña no coincide'],
}

  const {
    formState,
    onInputChange,
    isFormValid,
    first_name,
    last_name,
    email,
    password,
    passwordCheck,
    first_nameValid,
    last_nameValid,
    emailValid,
    passwordValid,
    passwordCheckValid,

  } = useForm(formData, formValidations, formSubmitted );

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (isFormValid) alert("el formulario es valido")
  };

  return (
    <>
      <AuthLayout
        title="Registrar nuevo usuario"
        caption="Ingrese sus datos personales"
      >
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                size="small"
                sx={{ width: "100%" }}
                label="first_name"
                type="text"
                placeholder="Ingresa tu first_name"
                name="first_name"
                value={first_name}
                onChange={onInputChange}
                error={!!first_nameValid && formSubmitted}
                helperText={first_nameValid}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                size="small"
                label="last_name"
                type="text"
                placeholder="Ingresa tu last_Name"
                sx={{ width: "100%" }}
                name="last_name"
                value={last_name}
                onChange={onInputChange}
                error={!!last_nameValid  && formSubmitted}
                helperText={last_nameValid}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                size="small"
                label="Email"
                type="email"
                placeholder="Ingresa tu email"
                sx={{ width: "100%" }}
                name="email"
                value={email}
                onChange={onInputChange}
                error={!!emailValid  && formSubmitted}
                helperText={emailValid}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                size="small"
                label="Contraseña"
                type="password"
                placeholder="Ingresa tu contraseña"
                sx={{ width: "100%" }}
                name="password"
                value={password}
                onChange={onInputChange}
                error={!!passwordValid  && formSubmitted}
                helperText={passwordValid}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                size="small"
                label="Confirma tu contraseña"
                type="password"
                placeholder="Confirma tu contraseña"
                sx={{ width: "100%" }}
                name="passwordCheck"
                value={passwordCheck}
                onChange={onInputChange}
                error={!!passwordCheckValid  && formSubmitted}
                helperText={passwordCheckValid}
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: colors.medColors[200],
                    borderRadius: 25,
                    width: "100%",
                    height: 50,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: colors.medColors[150],
                    },
                  }}
                  type="submit"
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
