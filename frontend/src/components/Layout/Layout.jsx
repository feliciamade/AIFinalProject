import react from 'react';
import Navbar from "../Navbar/Navbar.jsx";
import styles from "./Layout.module.css";
import Footer from '../Footer/Footer'; 

const Layout = ({children}) => {

    return (
    <div className = "app-shell">
    <main className ="pageContent">
        {children}
    </main>
   <Footer />
    </div>
    )};

export default Layout;