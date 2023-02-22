import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { deleteblog } from "./blogSlice";
import { showblog } from "./blogSlice";
import { useContext } from "react";
import { AppContext } from "../ContextAPI/UserContext";

 const Child=()=>{
  const userData=useContext(AppContext);

  return(  
        <div>
{alert(userData.message + " " + userData.name)}
</div>

  )
}


const BlogList = () => {

  

  const dispatch = useDispatch();
  const blogs = useSelector(store => store.blogs);

  
    
  const BlogDetails=(blogId)=>{
    console.log(blogId)
    dispatch(showblog({blogId}))
    
  }

  const handleRemoveblog = (id) => {
    dispatch(deleteblog({ id }));
  }
  

   

  const renderCard = () => blogs.map(blog => (
     
   <div className="bg-gray-300 p-5 flex items-center justify-between" key={blog.id}>
        <div>
        <h3 className="font-bold text-lg text-gray-700">{blog.title}</h3>
        <Link to={`blog-details/${blog.id}`} onClick={()=>BlogDetails(blog.id)}><p> <span style={{color: 'green'}}>GO TO BLOG</span></p></Link>
       </div>

       <div className="flex gap-4">
         <Link to={`edit-blog/${blog.id}`}>
           <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </Link>
        <button
          onClick={() => handleRemoveblog(blog.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      
</div>
</div>
  ))
  
 

  return (
    <>
    
    <div>
<h3 className="font-bold text-lg text-gray-700">Nagarro SE</h3>
<span className="font-normal text-gray-600">This is a blog post app, Click on Add Blog Button and add a title and content. </span>
</div>
<br></br>
    <div>
      <div className="grid gap-5 md:grid-cols-2">
        <br></br>
        {blogs.length ? renderCard() : <p className="text-center col-span-2 text-gray-700 font-semibold">No Blog</p>}
      </div>
      <Link to="/add-blog"><Button>Add Blog</Button></Link>
    </div>
<div> 
  {
Child()
    }
</div>
    </>
  )
}

export default BlogList