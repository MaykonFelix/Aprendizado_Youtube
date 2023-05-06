import { ThemeProvinder } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import { LightTheme } from "./shared/themes";
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    <ThemeProvinder theme={LightTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvinder>
  );
};
