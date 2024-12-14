import Home from "@/Page/Home";
import { Route, Routes } from "react-router-dom";
import ParticularBlog from "@/Component/ParticularBlog";
import PageNotFound from "./Page/PageNotFound";
import Header from "./Component/Header";
import Admin from "./Page/Admin";
import UpdateBlog from "./Page/UpdateBlog";
import CreateBlog from "./Page/CreateBlog";
import Footer from "./Component/Footer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<ParticularBlog />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/new" element={<CreateBlog />} />
        <Route path="admin/edit/:blogId" element={<UpdateBlog />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
