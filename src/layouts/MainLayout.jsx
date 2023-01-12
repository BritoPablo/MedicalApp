import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../scenes/global/Sidebar";
import Topbar from "../scenes/global/Topbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";

const MainLayout = (props) => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Box className="app">
          <Box className="content" m="0 20px">
            <Topbar />
            <ToastContainer autoClose={5000} />
            {props.children}
          </Box>
          <Sidebar />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default MainLayout;
