import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { User } from "../../../contexts/User";
import { adminLinks } from "./Links/admin";
import { userLinks } from "./Links/user";
import { footerLinks } from "./Links/footer";

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
    const location = useLocation().pathname;

    const { state } = useContext(User);
    const { userInfo } = state;

    const [isDashboardActive, setIsDashboardActive] = useState(false);

    useEffect(() => {
        const dashboardRoutes = [
            "/profile",
            "/dashboard",
            "/dashboard/users",
            "/dashboard/problems",
            "/dashboard/contacts",
            "/dashboard/faqs",
        ];
        setIsDashboardActive(dashboardRoutes.includes(location));
    }, [location, setIsDashboardActive]);

    return (
        <aside
            className={`sidebar ${isDashboardActive ? "active" : ""} ${isOpen ? "open" : ""}`}
        >
            <div className="sidebar-content">
                <ul className="navigation">
                    {/* User Links */}
                    {userLinks.map((item) => (
                        <li key={item.path}>
                            <a
                                className={`nav-item ${location === item.path ? "active" : ""}`}
                                href={item.path} // Replace with Link from react-router-dom
                            >
                                {item.icon}
                                <span className="label">{item.label}</span>
                            </a>
                        </li>
                    ))}

                    {/* Admin Links */}
                    {userInfo?.isAdmin &&
                        adminLinks.map((item) => (
                            <li key={item.path}>
                                <a
                                    className={`nav-item ${location === item.path ? "active" : ""}`}
                                    href={item.path} // Replace with Link from react-router-dom
                                >
                                    {item.icon}
                                    <span className="label">{item.label}</span>
                                </a>
                            </li>
                        ))}
                </ul>

                {/* Footer Links */}
                <ul className="footer-links">
                    {footerLinks.map((item) => (
                        <li key={item.path}>
                            <a
                                className={`nav-item ${location === item.path ? "active" : ""}`}
                                href={item.path} // Replace with Link from react-router-dom
                            >
                                {item.icon}
                                <span className="label">{item.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Dropdown CTA */}
                <div className="dropdown-cta">{/* Content here */}</div>
            </div>
        </aside>
    );
};

export default Sidebar;
