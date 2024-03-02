/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { User } from "../../../contexts/User";
import themes from "../../../utils/themes";

export type navLinks = {
    name: string;
    href: string;
};

const Navbar = (props: { setIsOpenSidebar: any }) => {
    const { state, dispatch } = useContext(User);
    const { userInfo } = state;

    const param = useParams();
    const location = useLocation();

    const [sidebarToggle, setSidebarToggle] = useState<boolean>(false);

    const navLinks: navLinks[] = [
        { name: "Author", href: "https://github.com/tolgazorlu" },
        { name: "Contact", href: "/contact" },
        { name: "FAQ", href: "/faq" },
    ];

    /** @ts-ignore  */
    const localTheme = JSON.parse(localStorage.getItem("theme"));

    const [theme, setTheme] = useState(localTheme);
    const clickThemeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setTheme((e.target as HTMLInputElement).value);
    };

    useEffect(() => {
        document.querySelector("html")?.setAttribute("data-theme", theme);
        document.getElementById("screen")?.setAttribute("data-theme", theme);
        localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme, param.slug]);

    const signoutHandler = () => {
        dispatch({ type: "USER_SIGNOUT" });
        localStorage.removeItem("userInfo");
        localStorage.removeItem("cartItems");
        window.location.href = "/login";
    };

    return (
        <nav
            className={
                location.pathname == "/"
                    ? "navbar fixed top-0 z-30 w-full bg-base-100 lg:px-32 px-8"
                    : "navbar fixed top-0 z-30 w-full bg-base-100 border-b border-base-300 lg:px-32 px-8"
            }
        >
            <div className="navbar-start">
                <button
                    onClick={() => {
                        setSidebarToggle(!sidebarToggle);
                        props.setIsOpenSidebar(sidebarToggle);
                    }}
                    type="button"
                    className={
                        location.pathname == "/" ||
                        location.pathname == "/login" ||
                        location.pathname == "/register"
                            ? "hidden"
                            : "inline-flex items-center p-2 text-sm sm:hidden"
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
                    <span className="font-bold text-3xl font-bandal text-primary">
                        daco
                    </span>
                </a>
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
                {/** THEMES */}
                <div className="drawer-end">
                    <input
                        id="my-drawer"
                        type="checkbox"
                        className="drawer-toggle"
                    />
                    <div className="drawer-side z-30">
                        <label
                            htmlFor="my-drawer"
                            className="drawer-overlay"
                        ></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            {themes.map((item) => {
                                return (
                                    <li key={item}>
                                        <button
                                            className={
                                                theme === item
                                                    ? "btn btn-sm btn-primary"
                                                    : "btn btn-sm"
                                            }
                                            value={item}
                                            onClick={(
                                                e: React.MouseEvent<HTMLButtonElement>,
                                            ) => clickThemeHandler(e)}
                                        >
                                            {item}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

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
                                    userInfo.isAdmin
                                        ? "w-7 h-7 rounded-full ring-2 ring-primary"
                                        : "h-7 w-7 rounded-full ring-2 ring-neutral"
                                }
                                src={userInfo.avatar}
                            />
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-neutral/100 rounded-box text-neutral-content min-w-max"
                        >
                            <li>
                                <div className="px-4 py-3 text-sm flex items-center justify-between hover:text-neutral-content gap-6">
                                    <div>
                                        <img
                                            alt="User dropdown"
                                            className={
                                                userInfo.isAdmin
                                                    ? "w-12 h-12 rounded-full ring-2 ring-secondary"
                                                    : "w-12 h-12 rounded-full ring-2 ring-primary"
                                            }
                                            src={userInfo.avatar}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-xl font-bandal">
                                            {userInfo.username}
                                        </span>
                                        <span className="font-medium truncate font-bandal">
                                            Solved Total:{" "}
                                            {userInfo.solvedProblems.length}
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a
                                    href="/profile"
                                    className={
                                        userInfo.isAdmin
                                            ? "hover:text-primary-content hover:bg-primary"
                                            : "hover:text-primary-content hover:bg-primary"
                                    }
                                >
                                    Profile
                                </a>
                            </li>
                            {userInfo.isAdmin ? (
                                <li>
                                    <a
                                        href="/dashboard"
                                        className={
                                            userInfo.isAdmin
                                                ? "hover:text-primary-content hover:bg-primary"
                                                : "hover:text-primary-content hover:bg-primary"
                                        }
                                    >
                                        Dashboard
                                    </a>
                                </li>
                            ) : (
                                <></>
                            )}
                            <li>
                                <label
                                    htmlFor="my-drawer"
                                    className={
                                        userInfo.isAdmin
                                            ? "hover:text-primary-content hover:bg-primary"
                                            : "hover:text-primary-content hover:bg-primary"
                                    }
                                >
                                    Themes
                                </label>
                            </li>
                            <li>
                                <button
                                    onClick={signoutHandler}
                                    className={
                                        userInfo.isAdmin
                                            ? "hover:text-primary-content hover:bg-primary"
                                            : "hover:text-primary-content hover:bg-primary"
                                    }
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <a
                        href="/login"
                        className="btn font-poppins btn-sm btn-primary text-primary-content hover:primary/50"
                    >
                        Login
                    </a>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
