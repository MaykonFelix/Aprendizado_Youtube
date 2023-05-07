import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<p>Pagina Inicial</p>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
