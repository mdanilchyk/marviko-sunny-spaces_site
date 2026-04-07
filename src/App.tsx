import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import WindowsPage from "./pages/Windows.tsx";

import DoorsPage from "./pages/Doors.tsx";
import PartitionsPage from "./pages/Partitions.tsx";
import WindowsillsPage from "./pages/Windowsills.tsx";
import PortfolioPage from "./pages/Portfolio.tsx";
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
          <Route path="/windows" element={<WindowsPage />} />
          
          <Route path="/doors" element={<DoorsPage />} />
          <Route path="/partitions" element={<PartitionsPage />} />
          <Route path="/windowsills" element={<WindowsillsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
