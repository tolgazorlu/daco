import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { User } from "../../../contexts/User";

export type navLinks = {
    name: string;
    href: string;
};

type ParamType = {
    slug?: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Navbar = ({ setIsOpenSidebar }: any) => {
    const { state, dispatch } = useContext(User);
    const { userInfo } = state;

    const { slug } = useParams<ParamType>();
    const location = useLocation();

    const [sidebarToggle, setSidebarToggle] = useState<boolean>(false);
    const [theme, setTheme] = useState<string | null>(() => {
        const localTheme = JSON.parse(localStorage.getItem("theme") || "null");
        return localTheme;
    });

    useEffect(() => {
        if (theme) {
            document.querySelector("html")?.setAttribute("data-theme", theme);
            document
                .getElementById("screen")
                ?.setAttribute("data-theme", theme);
            localStorage.setItem("theme", JSON.stringify(theme));
        }
    }, [theme, slug]);

    const toggleSidebar = () => {
        const updatedSidebarToggle = !sidebarToggle;
        setSidebarToggle(updatedSidebarToggle);
        setIsOpenSidebar(updatedSidebarToggle);
    };

    const handleThemeClick = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const signoutHandler = () => {
        dispatch({ type: "USER_SIGNOUT" });
        localStorage.removeItem("userInfo");
        localStorage.removeItem("cartItems");
        window.location.href = "/login";
    };

    const navLinks: navLinks[] = [
        // { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Creator", href: "/creator" },
    ];

    return (
        <nav
            className={`navbar bg-base-100 fixed top-0 z-30 w-full px-4 lg:px-24 ${location.pathname === "/" ? "" : location.pathname === "/about" ? "bg-black text-[#A5ADBB]" : "bg-base-100 border-b border-base-300"}`}
        >
            <div className="navbar-start">
                <button
                    onClick={() => {
                        toggleSidebar();
                    }}
                    type="button"
                    className={
                        location.pathname == "/profile" ||
                        location.pathname == "/dashboard" ||
                        location.pathname == "/dashboard/problems" ||
                        location.pathname == "/dashboard/contacts" ||
                        location.pathname == "/dashboard/faqs" ||
                        location.pathname == "/dashboard/users"
                            ? "inline-flex items-center p-2 text-sm sm:hidden"
                            : "hidden"
                    }
                >
                    <span className="sr-only">Open sidebar</span>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                        ></path>
                    </svg>
                </button>
                <a
                    href="/"
                    className="flex items-center gap-2 normal-case text-xl"
                >
                    <span
                        className={`font-bold text-3xl font-bandal text-base-content ${location.pathname === "/author" ? "text-[#A5ADBB]" : ""}`}
                    >
                        dacospace
                    </span>
                </a>
                <div className="dropdown dropdown-bottom lg:hidden">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-xs btn-ghost m-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navLinks.map((item) => {
                            return (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-xl font-bandal"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks.map((item) => {
                        return (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="text-xl font-bandal"
                                >
                                    {item.name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="navbar-end">
                {/** USER PROCESS */}

                {userInfo ? (
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-circle overflow-hidden btn-ghost m-1"
                        >
                            <img
                                alt="User dropdown"
                                className={
                                    userInfo.role == "admin"
                                        ? "w-7 h-7 rounded-full ring-2 ring-primary"
                                        : "h-7 w-7 rounded-full ring-2 ring-neutral"
                                }
                                src={userInfo.avatar}
                            />
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow-lg border border-base-300 bg-base-300 rounded text-neutral-content min-w-max"
                        >
                            <li>
                                <a
                                    href="/profile"
                                    className="px-4 py-3 text-sm flex items-center justify-between hover:text-neutral-content gap-6 rounded"
                                >
                                    <div>
                                        <img
                                            alt="User dropdown"
                                            className={
                                                userInfo.role == "admin"
                                                    ? "w-12 h-12 rounded-full ring-2 ring-primary"
                                                    : "w-12 h-12 rounded-full ring-2 ring-neutral"
                                            }
                                            src={userInfo.avatar}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-xl font-bandal text-primary">
                                            {userInfo.username}
                                        </span>
                                        <span className="font-medium truncate font-bandal text-base-content">
                                            Solved:{" "}
                                            {userInfo.solvedProblems.length}
                                        </span>
                                    </div>
                                </a>
                            </li>
                            {userInfo.role == "admin" ? (
                                <li>
                                    <a
                                        href="/dashboard"
                                        className="text-base-content hover:text-primary-content hover:bg-primary flex justify-between rounded"
                                    >
                                        <span>Dashboard</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                                            />
                                        </svg>
                                    </a>
                                </li>
                            ) : (
                                <></>
                            )}
                            <li>
                                <button
                                    onClick={handleThemeClick}
                                    className="text-base-content hover:text-primary-content hover:bg-primary flex justify-between rounded"
                                >
                                    <span>Theme</span>
                                    {theme == "light" ? (
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-4 h-4"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    ) : (
                                        <div>
                                            <svg
                                                className="fill-current w-4 h-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                            </svg>
                                        </div>
                                    )}
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={signoutHandler}
                                    className="text-base-content hover:text-primary-content hover:bg-primary flex justify-between rounded"
                                >
                                    <span>Logout</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                                        />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <a
                        href="/login"
                        className="btn font-poppins btn-sm btn-primary text-primary-content hover:primary/50 rounded"
                    >
                        Login
                    </a>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
