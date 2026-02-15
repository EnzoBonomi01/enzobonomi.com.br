import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DesignNavigator } from "./components/DesignNavigator";
import { DesignOne } from "./pages/DesignOne";
import { DesignTwo } from "./pages/DesignTwo";
import { DesignThree } from "./pages/DesignThree";
import { DesignFour } from "./pages/DesignFour";
import { DesignFive } from "./pages/DesignFive";

export default function App() {
  return (
    <BrowserRouter>
      <DesignNavigator />
      <Routes>
        <Route path="/" element={<Navigate to="/design/1" replace />} />
        <Route path="/design/1" element={<DesignOne />} />
        <Route path="/design/2" element={<DesignTwo />} />
        <Route path="/design/3" element={<DesignThree />} />
        <Route path="/design/4" element={<DesignFour />} />
        <Route path="/design/5" element={<DesignFive />} />
        <Route path="/final" element={<Navigate to="/design/1" replace />} />
        <Route path="*" element={<Navigate to="/design/1" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
