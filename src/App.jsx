import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MasterLayout from "./Layout/MasterLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/Error";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
//import { css } from "@emotion/css";
import "./sass/app.scss";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <MasterLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> }
    ],
    errorElement: <ErrorPage />
  },
  
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>        
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
