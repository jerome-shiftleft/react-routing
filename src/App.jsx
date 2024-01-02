import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MasterLayout from "./Layout/MasterLayout";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProductsPage from "./pages/Products";
import ProductDetailPage from "./pages/ProductDetail";
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
      { path: "", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailPage /> }
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
