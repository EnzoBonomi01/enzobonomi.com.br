import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { FinalPortfolio } from "./pages/FinalPortfolio";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FinalPortfolio />} />
        <Route path="/final" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
