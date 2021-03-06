import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Details from "../pages/Details";
import BlogForm from "../components/BlogForm";


const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route element={<PrivateRouter/>}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/newBlog" element={<NewBlog />} />
            <Route path="/details" element={<Details/>}/>
            <Route path="/blogform" element={<BlogForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;