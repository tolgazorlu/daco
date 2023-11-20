import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Question from "./pages/Question";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard/Dashboard";
import Problems from "./pages/Dashboard/Problems";
import Users from "./pages/Dashboard/Users";
import AdminRoute from "./routes/AdminRoute";
import UserRoute from "./routes/UserRoute";
import EmailVerify from "./pages/EmailVerify";
import Contact from "./pages/Contact";
import Contacts from "./pages/Dashboard/Contacts";
import Faq from "./pages/Faq";
import FAQs from "./pages/Dashboard/FAQs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" index={true} element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/question/:slug" element={<Question />} />
        <Route path="/:id/verify/:token" element={<EmailVerify />} />
        <Route path="" element={<AdminRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="/dashboard/problems" element={<Problems />} />
          <Route path="/dashboard/contacts" element={<Contacts />} />
          <Route path="/dashboard/faqs" element={<FAQs />} />
        </Route>
        <Route path="" element={<UserRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
