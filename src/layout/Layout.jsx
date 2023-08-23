import Footer from '../components/footer/Footer';
import NavbarComponent from '../components/navbar/NavbarComponent';
const Layout = ({ children }) => {
    return (
      <div className="layout">
        <NavbarComponent />
        <main className="content">{children}</main>
        <Footer />
      </div>
    );
  };
  
  export default Layout;

