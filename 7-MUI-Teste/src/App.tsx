import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import { LightTheme, DarkTheme } from "./shared/themes";
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};
