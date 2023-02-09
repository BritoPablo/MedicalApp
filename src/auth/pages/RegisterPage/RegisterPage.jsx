import AuthLayout from "../../../layouts/AuthLayout";
import { useSelector } from "react-redux";
import MainFormRegister from "./MainFormRegister";
import ThanksPage from "./ThanksPage";




export const RegisterPage = () => {
  
  const {newUser} = useSelector(state => state.auth)


  const title = newUser ? `Gracias ${newUser.first_name}  por crear su nueva cuenta` : "Registrar nuevo usuario";

  const caption = newUser ? "En breve recibirá una correo de confirmación para validar su cuenta" : "Ingrese sus datos personales";

  return (
    <>
      <AuthLayout
        title={title}
        caption={caption}
      >
        {newUser
        ? <ThanksPage/>
        : <MainFormRegister/>
        }    
      </AuthLayout>
    </>
  );
};
