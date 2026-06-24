import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMessengerWidget from "@/components/FloatingMessengerWidget";

interface PageLayoutProps {
  children: ReactNode;
  onOrderClick?: () => void;
}

const PageLayout = ({ children, onOrderClick }: PageLayoutProps) => (
  <main className="min-h-screen bg-background">
    <Navbar onOrderClick={onOrderClick} />
    {children}
    <Footer />
    <FloatingMessengerWidget />
  </main>
);

export default PageLayout;
