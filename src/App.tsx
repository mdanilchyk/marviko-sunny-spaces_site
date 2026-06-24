import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import WindowsPvhPage from "./pages/WindowsPvh.tsx";
import WindowsAluPage from "./pages/WindowsAlu.tsx";

import DoorsPvhPage from "./pages/DoorsPvh.tsx";
import DoorsAluPage from "./pages/DoorsAlu.tsx";
import PartitionsPage from "./pages/Partitions.tsx";
import WindowsillsPage from "./pages/Windowsills.tsx";
import PortfolioPage from "./pages/Portfolio.tsx";
import AccessoriesPage from "./pages/Accessories.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/windows" element={<Navigate to="/windows-pvh" replace />} />
          <Route path="/windows-pvh" element={<WindowsPvhPage />} />
          <Route path="/windows-alu" element={<WindowsAluPage />} />

          <Route path="/doors" element={<Navigate to="/doors-pvh" replace />} />
          <Route path="/doors-pvh" element={<DoorsPvhPage />} />
          <Route path="/doors-alu" element={<DoorsAluPage />} />
          <Route path="/partitions" element={<PartitionsPage />} />
          <Route path="/windowsills" element={<WindowsillsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
