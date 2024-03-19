import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import AppRoutes from "../routes/routes";

const Layout = () => {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default Layout;
