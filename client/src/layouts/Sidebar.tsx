import { useLocation } from "react-router-dom";
import { User } from "../contexts/User";
import { useContext, useEffect, useState } from "react";

const Sidebar = (props: { isOpen: boolean }) => {
  const location = useLocation().pathname;

  const { state } = useContext(User);
  const { userInfo } = state;

  const [isCurrentDashboard, setIsCurrentDashboard] = useState(false);

  useEffect(() => {
    if (
      location == "/profile" ||
      location == "/dashboard" ||
      location == "/dashboard/users" ||
      location == "/dashboard/problems"
    ) {
      setIsCurrentDashboard(true);
    }
  }, [location]);

  return (
    <aside
      id="sidebar"
      className={
        !isCurrentDashboard
          ? "hidden"
          : props.isOpen
            ? "fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-0 border-r border-base-300 sm:translate-x-0 bg-base-100"
            : "fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full border-r border-base-300 sm:translate-x-0 bg-base-100"
      }
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4">
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="/profile"
              className={
                location === "/profile"
                  ? "flex items-center p-2 rounded-lg bg-accent text-accent-content"
                  : "flex items-center p-2 rounded-lg hover:bg-accent/50"
              }
            >
              <svg
                className="flex-shrink-0 w-5 h-5  transition duration-75 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
            </a>
          </li>
          {userInfo?.isAdmin ? (
            <>
              <li>
                <a
                  href="/dashboard"
                  className={
                    location === "/dashboard"
                      ? "flex items-center p-2 rounded-lg bg-accent text-accent-content"
                      : "flex items-center p-2 rounded-lg hover:bg-accent/50"
                  }
                >
                  <svg
                    className="w-5 h-5 transition duration-75"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ml-3">Dashboard</span>
                </a>
              </li>

              <li>
                <a
                  href="/dashboard/users"
                  className={
                    location === "/dashboard/users"
                      ? "flex items-center p-2 rounded-lg bg-accent text-accent-content"
                      : "flex items-center p-2 rounded-lg hover:bg-accent/50"
                  }
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5  transition duration-75 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                </a>
              </li>
              <li>
                <a
                  href="/dashboard/problems"
                  className={
                    location === "/dashboard/problems"
                      ? "flex items-center p-2 rounded-lg bg-accent text-accent-content"
                      : "flex items-center p-2 rounded-lg hover:bg-accent/50"
                  }
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 transition duration-75 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Problems
                  </span>
                </a>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
        <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-base-200">
          <li>
            <a
              href="https://www.buymeacoffee.com/tolgazorlu"
              target="_blank"
              className="flex items-center p-2 transition duration-75 rounded-lg group hover:bg-accent/50"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 transition duration-75 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 17 20"
              >
                <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z" />
              </svg>
              <span className="ml-4">Support to Author</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tolgazorlu/daco"
              target="_blank"
              className="flex items-center p-2 transition duration-75 rounded-lg hover:bg-accent/50"
            >
              <svg
                className="flex-shrink-0 w-5 h-5  transition duration-75 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
              </svg>
              <span className="ml-3">Project</span>
            </a>
          </li>
          <li>
            <a
              href="https://daisyui.com/docs/themes/"
              target="_blank"
              className="flex items-center p-2 transition duration-75 rounded-lg  group hover:bg-accent/50"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 transition duration-75 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H6a2 2 0 0 0-2 2h14v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
                <path d="M14 4H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM2 16v-6h12v6H2Z" />
              </svg>
              <span className="ml-3">Themes</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tolgazorlu/daco#contributing"
              target="_blank"
              className="flex items-center p-2 transition duration-75 rounded-lg  group hover:bg-accent/50"
            >
              <svg
                className="flex-shrink-0 w-5 h-5  transition duration-75  group-hover "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 21"
              >
                <path d="m5.4 2.736 3.429 3.429A5.046 5.046 0 0 1 10.134 6c.356.01.71.06 1.056.147l3.41-3.412c.136-.133.287-.248.45-.344A9.889 9.889 0 0 0 10.269 1c-1.87-.041-3.713.44-5.322 1.392a2.3 2.3 0 0 1 .454.344Zm11.45 1.54-.126-.127a.5.5 0 0 0-.706 0l-2.932 2.932c.029.023.049.054.078.077.236.194.454.41.65.645.034.038.078.067.11.107l2.927-2.927a.5.5 0 0 0 0-.707Zm-2.931 9.81c-.024.03-.057.052-.081.082a4.963 4.963 0 0 1-.633.639c-.041.036-.072.083-.115.117l2.927 2.927a.5.5 0 0 0 .707 0l.127-.127a.5.5 0 0 0 0-.707l-2.932-2.931Zm-1.442-4.763a3.036 3.036 0 0 0-1.383-1.1l-.012-.007a2.955 2.955 0 0 0-1-.213H10a2.964 2.964 0 0 0-2.122.893c-.285.29-.509.634-.657 1.013l-.01.016a2.96 2.96 0 0 0-.21 1 2.99 2.99 0 0 0 .489 1.716c.009.014.022.026.032.04a3.04 3.04 0 0 0 1.384 1.1l.012.007c.318.129.657.2 1 .213.392.015.784-.05 1.15-.192.012-.005.02-.013.033-.018a3.011 3.011 0 0 0 1.676-1.7v-.007a2.89 2.89 0 0 0 0-2.207 2.868 2.868 0 0 0-.27-.515c-.007-.012-.02-.025-.03-.039Zm6.137-3.373a2.53 2.53 0 0 1-.35.447L14.84 9.823c.112.428.166.869.16 1.311-.01.356-.06.709-.147 1.054l3.413 3.412c.132.134.249.283.347.444A9.88 9.88 0 0 0 20 11.269a9.912 9.912 0 0 0-1.386-5.319ZM14.6 19.264l-3.421-3.421c-.385.1-.781.152-1.18.157h-.134c-.356-.01-.71-.06-1.056-.147l-3.41 3.412a2.503 2.503 0 0 1-.443.347A9.884 9.884 0 0 0 9.732 21H10a9.9 9.9 0 0 0 5.044-1.388 2.519 2.519 0 0 1-.444-.348ZM1.735 15.6l3.426-3.426a4.608 4.608 0 0 1-.013-2.367L1.735 6.4a2.507 2.507 0 0 1-.35-.447 9.889 9.889 0 0 0 0 10.1c.1-.164.217-.316.35-.453Zm5.101-.758a4.957 4.957 0 0 1-.651-.645c-.033-.038-.077-.067-.11-.107L3.15 17.017a.5.5 0 0 0 0 .707l.127.127a.5.5 0 0 0 .706 0l2.932-2.933c-.03-.018-.05-.053-.078-.076ZM6.08 7.914c.03-.037.07-.063.1-.1.183-.22.384-.423.6-.609.047-.04.082-.092.129-.13L3.983 4.149a.5.5 0 0 0-.707 0l-.127.127a.5.5 0 0 0 0 .707L6.08 7.914Z" />
              </svg>
              <span className="ml-3">Contributing</span>
            </a>
          </li>
        </ul>
        <div
          id="dropdown-cta"
          className="p-4 mt-6 rounded-lg bg-accent font-poppins"
          role="alert"
        >
          <div className="flex items-center mb-3">
            <span className="bg-accent-content text-accent text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
              Beta
            </span>
          </div>
          <p className="mb-3 text-sm text-accent-content">
            Preview the new As{" "}
            <span className="font-bold font-aubette">DACO</span>, we are here
            with the beta version. If you would like to support the project, you
            can access the source codes from the{" "}
            <a
              href="https://github.com/tolgazorlu/daco"
              target="_blank"
              className=" font-aubette font-bold hover:text-accent-content/50"
            >
              LINK HERE.
            </a>
          </p>
          <a
            className="text-sm text-accent-content underline font-medium hover:text-accent-content/50"
            href="https://github.com/tolgazorlu"
            target="_blank"
          >
            Visit Author Page
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
