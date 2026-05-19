import Footer from "@/components/CommonComponents/Footer";
import NavBar from "@/components/CommonComponents/NavBar";

const mainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};

export default mainLayout;
