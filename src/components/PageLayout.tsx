import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: ReactNode;
  onOrderClick?: () => void;
}

const PageLayout = ({ children, onOrderClick }: PageLayoutProps) => (
  <main className="min-h-screen bg-background">
    <Navbar onOrderClick={onOrderClick} />
    {children}
    <Footer />
  </main>
);

export default PageLayout;
