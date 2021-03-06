import "./Layout.css";
import Footer from "../Footer/Footer";

const Layout = (props) => (
  <div className="layout">
    <div className="layout-children">{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
