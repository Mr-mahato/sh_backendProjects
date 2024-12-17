import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { BlogContextProvider } from "./Context/BlogContext";
import { AuthContextProvider, useAuth } from "./Context/AuthContext";
import Registration from "./Page/Registration";
import Home from "@/Page/Home";
import ParticularBlog from "@/Component/ParticularBlog";
import PageNotFound from "./Page/PageNotFound";
import Admin from "./Page/Admin";
import UpdateBlog from "./Page/UpdateBlog";
import CreateBlog from "./Page/CreateBlog";
import { HomeLayout } from "./Layout/HomeLayout";
import Blog from "./Component/Blog";
function App() {
  return (
    <AuthContextProvider>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Registration />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="blog/:blogId" element={<ParticularBlog />} />
            <Route path="admin" element={<Admin />} />
            <Route path="personalblog" element={<Home isAdmin={true}/>}/>
            <Route path="new-blog-creation" element={<CreateBlog />} />
            <Route path="admin/edit/:blogId" element={<UpdateBlog />} />
          </Route>
        </Route>

        {/* 404 - Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AuthContextProvider>
  );
}

function ProtectedRoutes() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/" replace />;
  }

  // Wrap authenticated routes with the BlogContextProvider
  return (
    <BlogContextProvider>
      <Outlet />
    </BlogContextProvider>
  );
}

function PublicRoutes() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    // Redirect to /home if already authenticated
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
}

export default App;
