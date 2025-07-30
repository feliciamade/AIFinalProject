import react from 'react';
import Navbar from "../Navbar/Navbar.jsx";
//import Footer from './components/Footer'; 

const Layout = ({children}) => {

    return (
    <div className = "app-shell">
    <main className ="pageContent">
        {children}
    </main>
   {/*<Footer /> */}
    </div>
    )};

export default Layout;