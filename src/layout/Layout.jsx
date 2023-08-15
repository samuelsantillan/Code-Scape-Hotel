import NavbarComponent from '../components/Navbar/NavbarComponent'
const Layout = ({ children }) => {
    return (
      <div className="layout">
        <NavbarComponent />
        <main className="content">{children}</main>
      </div>
    );
  };
  
  export default Layout;