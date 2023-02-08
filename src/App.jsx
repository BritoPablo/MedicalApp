import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import { AuthRoutes } from "./auth/routes/AuthRoutes";
import CheckingAuth from "./scenes/global/CheckingAuth";
import { MedicalAppRoutes } from "./scenes/router/MedicalAppRoutes";
import { check_authtenticated, load_user, refresh } from "./store/auth";

function App() {

  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch()

  
  useEffect(()=>{
    if(!isAuthenticated){
      dispatch(load_user());
    }
  }, [])

  // if(!isAuthenticated){
  //   return <CheckingAuth/>
  // }

  return (
    <>
      <Routes>

        {
          isAuthenticated 
          ? <Route path="/*" element={<MedicalAppRoutes />} />
          : <Route path="/auth/*" element={<AuthRoutes />} />
        }
        <Route path="/*" element={<Navigate to="/auth/login"/>} />

      </Routes>
    </>
  );
}

export default App;
