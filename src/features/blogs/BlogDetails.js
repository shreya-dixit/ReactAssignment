import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"

import cn from "classnames";
import { ReactComponent as Hand } from "../../components/hand.svg";
import "./styles.scss";

const BlogDetails = (id) => {
    const params = useParams(); 
    const Navigate=useNavigate()
    const blogs = useSelector(store => store.blogs);
    const existingblog = blogs.filter(blog => blog.id === params.id);
    const particleList = Array.from(Array(10));
    
        const [liked, setLiked] = useState(null);
        const [clicked, setClicked] = useState(false);

    const goHome=()=>{
      Navigate('/');
      
    }
  const renderCard = () => 
     <>

         {existingblog.map((blog,index)=>
         (
             <div className="bg-gray-300 p-5 flex items-center justify-between" >
             <div key={index}>
                 <table>
                 <tr>
                     <td><h1 className="font-bold text-lg text-gray-700">Title</h1> </td>
                    <td> <span style={{color:'orange',padding: "350px"}}>{blog.title}</span></td>
                 </tr>
                 <tr>
                    <td><h1 className="font-bold text-lg text-gray-700">Category</h1></td>
                    <td><span style={{color:'orange',padding: "390px"}}>{blog.category}</span></td>
                 </tr>

                 <tr>
                    <td><h1 className="font-bold text-lg text-gray-700">Content</h1></td>
                    <td><span style={{color:'orange',padding: "390px"}}>{blog.content}</span></td>
                 </tr>

                 </table> </div>
    <button onClick={() => {setLiked(!liked);
        setClicked(true);}}
      onAnimationEnd={() => setClicked(false)}
      className={cn("like-button-wrapper", {
        liked,
        clicked
      })}
    >
     {liked && (
        <div className="particles">
          {particleList.map((_, index) => (
            <div
              className="particle-rotate"
              style={{
                transform: `rotate(${
                  (360 / particleList.length) * index + 1
                }deg)`,
              }}
            >
              <div className="particle-tick" />
            </div>
          ))}
        </div>
      )}
      <div className="like-button">
        <Hand />
        <span>Like</span>
        <span className={cn("suffix", { liked })}>d</span>
      </div>
    </button>
    
                 </div>  
                  

         )
         )}
 <Button onClick={goHome}>Home</Button>
     </>
   

  return (
    renderCard()
   )
}



export default BlogDetails