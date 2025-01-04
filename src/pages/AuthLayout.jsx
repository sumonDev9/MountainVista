import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const AuthLayout = () => {
    return (
        <div>
            <nav className='bg-slate-100'>
                <Navbar></Navbar>

            </nav>
            <section className="">
                <Outlet></Outlet>
            </section>
            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default AuthLayout;