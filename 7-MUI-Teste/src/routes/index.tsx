import { Button } from "@mui/material";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { useDrawerContext } from "src/shared/contexts";

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: "home",
        path: "/",
        label: "Página Inicial",
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Button
            variant="contained"
            color="primary"
            onClick={toggleDrawerOpen}
          >
            Toggle Drawer
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
