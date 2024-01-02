import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { css } from "@emotion/css";
import "./sass/app.scss";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Route>
);

// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/about", element: <About /> },
// ]);

const router = createBrowserRouter(routeDefinitions);

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
