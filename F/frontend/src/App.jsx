import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ChooseRole from "./pages/ChooseRole";
import Dashboard from "./pages/Dashboard";
import Professors from "./pages/Professors";
import Payments from "./pages/Payments";
import Messages from "./pages/Messages";
import Courses from "./pages/Courses";
import MainLayout from "./components/MainLayout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/choose-role" element={<ChooseRole />} />

        {/* Pages dashboard avec Sidebar */}
        <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/professors" element={<MainLayout><Professors /></MainLayout>} />
        <Route path="/payments" element={<MainLayout><Payments /></MainLayout>} />
        <Route path="/messages" element={<MainLayout><Messages /></MainLayout>} />
        <Route path="/courses" element={<MainLayout><Courses /></MainLayout>} />
      </Routes>
    </Router>
  );
}
