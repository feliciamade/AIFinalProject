import react from 'react';
import Navbar from './components/Navbar'; 
import Navbar from './components/Footer'; 

const Layout = ({children}) => {

    <div className = "app-shell">
    <Header />
    <Navbar />
    <main className ="pageContent">
        {children}
    </main>
    <Footer /> 
    </div>
};