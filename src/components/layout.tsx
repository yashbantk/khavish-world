import Navbar from "./navbar";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}


