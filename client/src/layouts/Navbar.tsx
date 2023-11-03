/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useContext, useEffect, useState } from "react";
import { FullScreenHandle } from "react-full-screen";
import { Link, useParams } from "react-router-dom";
import { User } from "../contexts/User";

export type navLinks = {
  name: string;
  href: string;
};

type AppProps = {
  fullscreenHandle: FullScreenHandle;
};

export type themes = string;

const Navbar = ({ fullscreenHandle }: AppProps) => {
  const param = useParams();
  const [slugParameter, setSlugParameter] = useState(false);

  const navLinks: navLinks[] = [
    { name: "Project", href: "https://github.com/tolgazorlu/daco" },
    { name: "Author", href: "https://github.com/tolgazorlu" },
  ];

  const themes: themes[] = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];

  /** @ts-ignore  */
  const localTheme = JSON.parse(localStorage.getItem("theme"));

  const [theme, setTheme] = useState(localTheme);
  const clickThemeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTheme((e.target as HTMLInputElement).value);
  };

  useEffect(() => {
    if (typeof param.slug === "string") {
      setSlugParameter(true);
    }

    document.querySelector("html")?.setAttribute("data-theme", theme);
    document.getElementById("screen")?.setAttribute("data-theme", theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme, param.slug]);

  const { state, dispatch } = useContext(User);
  const { userInfo } = state;

  const signoutHandler = () => {
    dispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cartItems");
    window.location.href = "/login";
  };

  return (
    <div className="navbar rounded-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks.map((item) => {
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="font-poppins text-lg"
                    target="_blank"
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            className="w-6 h-6 stroke-secondary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>
          <span className="font-bold text-2xl font-aubette text-primary">
            DACO
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
                  className="font-poppins text-lg"
                  target="_blank"
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        {/** FULLSCREEN */}

        {slugParameter ? (
          <>
            <button className="btn btn-ghost" onClick={fullscreenHandle.enter}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                />
              </svg>
            </button>
          </>
        ) : (
          <></>
        )}

        {/** THEMES */}

        <div className="drawer-end">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side z-50">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              {themes.map((item) => {
                return (
                  <li key={item}>
                    <button
                      className={
                        theme === item ? "btn btn-sm btn-primary" : "btn btn-sm"
                      }
                      value={item}
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                        clickThemeHandler(e)
                      }
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
                    ? "w-8 h-8 rounded-full ring ring-primary"
                    : "h-8 w-8 rounded-full ring ring-secondary"
                }
                src={userInfo.avatar}
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-neutral/100 rounded-box min-w-max text-neutral-content"
            >
              <li>
                <div className="px-4 py-3 text-sm flex items-center justify-between hover:text-neutral-content">
                  <div>
                    <img
                      alt="User dropdown"
                      className={
                        userInfo.isAdmin
                          ? "w-10 h-10 rounded-full ring-4 ring-primary"
                          : "w-10 h-10 rounded-full ring-4 ring-primary"
                      }
                      src={userInfo.avatar}
                    />
                  </div>
                  <div>
                    <div>{userInfo.username}</div>
                    <div className="font-medium truncate">{userInfo.email}</div>
                  </div>
                </div>
              </li>
              <hr className="mt-2 mb-2"></hr>
              {userInfo.isAdmin ? (
                <li>
                  <Link
                    to="/dashboard"
                    className="hover:text-primary-content hover:bg-primary"
                  >
                    Dashboard
                  </Link>
                </li>
              ) : (
                <></>
              )}
              <li>
                  <Link
                    to="/profile"
                    className="hover:text-primary-content hover:bg-primary"
                  >
                    Profile
                  </Link>
                </li>
              <li>
                <label
                  htmlFor="my-drawer"
                  className="hover:text-primary-content hover:bg-primary"
                >
                  Themes
                </label>
              </li>
              <li>
                <button
                  onClick={signoutHandler}
                  className="hover:text-primary-content hover:bg-primary"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <a
            href="/login"
            className="btn font-poppins btn-sm btn-outline btn-primary text-primary-content shadow-md shadow-primary/50 hover:primary/50"
          >
            Login
          </a>
        )}
      </div>
    </div>
  );
};

export default Navbar;
