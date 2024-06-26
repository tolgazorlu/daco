import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Question from "./components/Question";
import NotFound from "./components/NotFound";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import Problems from "./components/Dashboard/Problems";
import Users from "./components/Dashboard/Users";
import AdminRoute from "./routes/AdminRoute";
import UserRoute from "./routes/UserRoute";
import Contacts from "./components/Dashboard/Contacts";
import FAQs from "./components/Dashboard/FAQs";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import Banner from "./components/Landing";
import EditProblem from "./components/Dashboard/EditProblem";
import About from "./components/About";
import Creator from "./components/Creator";
import Policy from "./components/Docs/Policy";
import Terms from "./components/Docs/Terms";
import EmailVerify from "./components/Auth/EmailVerify";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Banner />} />
                <Route path="/about" element={<About />} />
                <Route path="/creator" element={<Creator />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/policy" element={<Policy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/question/:slug" element={<Question />} />
                <Route path="/:id/verify/:token" element={<EmailVerify />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route
                    path="/reset-password/:token"
                    element={<ResetPassword />}
                />

                {/* Dashboard Routes */}
                <Route path="" element={<AdminRoute />}>
                    <Route
                        path="/question/:slug/edit"
                        element={<EditProblem />}
                    />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/dashboard/users" element={<Users />} />
                    <Route path="/dashboard/problems" element={<Problems />} />
                    <Route path="/dashboard/contacts" element={<Contacts />} />
                    <Route path="/dashboard/faqs" element={<FAQs />} />
                </Route>

                {/* User Routes */}
                <Route path="" element={<UserRoute />}>
                    <Route path="/home" index={true} element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>

                {/* Catch-all route */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
