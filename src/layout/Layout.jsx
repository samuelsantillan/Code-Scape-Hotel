import Footer from '../components/Footer/Footer';
import NavbarComponent from '../components/Navbar/NavbarComponent'
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