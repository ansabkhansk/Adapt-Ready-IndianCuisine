import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Details from "../pages/Details/Details";
import ProtectedRoute from "./ProtectedRoute";
import Dishes from "../pages/Dishes/Dishes";
import DishSuggest from "../pages/DishSuggester/DishSuggester";
import LayoutWithHeader from "../components/common/LayoutWithHeader";
import ViewUser from "../pages/ViewUser/ViewUser";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      {/* TODO: add page for unauthorized route*/}
      <Route path="/unauthorized" element={<div>Access Denied</div>} />

      <Route element={<LayoutWithHeader />}>
        <Route
          path="/dishes"
          element={
            <ProtectedRoute>
              <Dishes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/details/:name/:id"
          element={
            <ProtectedRoute>
              <Details />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dishSuggester"
          element={
            <ProtectedRoute>
              <DishSuggest />
            </ProtectedRoute>
          }
        />
        {/* TODO: add route for ViewUser */}
        <Route
          path="/viewUser"
          element={
            <ProtectedRoute allowedRoles={['admin', 'manager']}>
              <ViewUser />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
