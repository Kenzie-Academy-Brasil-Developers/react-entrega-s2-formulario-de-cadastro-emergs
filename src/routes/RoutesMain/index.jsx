import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Dashboard from "../../pages/Dashboard";

const RoutesMain = ({user, setUser }) => {
  return (
    <Routes>
      <Route path={"/login"} element={<Login setUser={setUser}/>} />
      <Route path={"/register"} element={<Register />} />
      <Route path={"/dashboard"} element={<Dashboard user={user} setUser={setUser} />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default RoutesMain;