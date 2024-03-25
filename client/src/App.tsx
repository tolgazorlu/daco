import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Question from "./components/Question";
import NotFound from "./components/NotFound";
import Author from "./components/Author";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import Problems from "./components/Dashboard/Problems";
import Users from "./components/Dashboard/Users";
import AdminRoute from "./routes/AdminRoute";
import UserRoute from "./routes/UserRoute";
import EmailVerify from "./components/EmailVerify";
import Contact from "./components/Contact";
import Contacts from "./components/Dashboard/Contacts";
import Faq from "./components/FAQ";
import FAQs from "./components/Dashboard/FAQs";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Banner from "./components/Banner";
import EditProblem from "./components/Dashboard/EditProblem";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Banner />} />
                <Route path="/author" element={<Author />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<Faq />} />
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
