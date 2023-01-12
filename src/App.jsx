import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { AuthRoutes } from "./auth/routes/AuthRoutes";
import { MedicalAppRoutes } from "./scenes/router/MedicalAppRoutes";

function App() {
  return (
    <>
      <Routes>
      {/**Auth routes*/}
      <Route path="/auth/*" element={ <AuthRoutes/> } />
      {/* Scenes routes */}
      <Route path="/*" element={ <MedicalAppRoutes/> } />
    </Routes>
    </>
  );
}

export default App;
