import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);

    const setIsOpenSidebar = (state: boolean) => {
        setIsOpen(state);
    };

    return (
        <>
            <Navbar setIsOpenSidebar={setIsOpenSidebar} />
            <Sidebar isOpen={isOpen} />
        </>
    );
};

export default Layout;
