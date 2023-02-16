import { Route, Routes } from "react-router-dom";
import Addblog from "./features/blogs/AddBlog";
import Editblog from "./features/blogs/EditBlog";
import BlogList from "./features/blogs/BlogList";
import BlogDetails from "./features/blogs/BlogDetails";
import { Provider } from '@lyket/react';

function App() {
  return (
    
    <Provider apiKey="[YOUR-API-KEY]">
    <div className="text-center">
      <h1 className="text-center font-bold text-2xl text-gray-700"><span style={{color:'Blue'}}>BLOG POST APP</span></h1><br></br>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/add-blog" element={<Addblog />} />
        <Route path="/edit-blog/:id" element={<Editblog />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />

      </Routes>
    </div>
    </Provider>
  );
}

export default App;
