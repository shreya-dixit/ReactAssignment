import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { editblog } from "./blogSlice"

const Editblog = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const blogs = useSelector(store => store.blogs);
  const navigate = useNavigate();
  const existingblog = blogs.filter(blog => blog.id === params.id);
  const { title, content } = existingblog[0];
  const [values, setValues] = useState({
    title,
    content
  });
  const goBack=() =>{
   navigate('/')
  }

  const handleEditblog = () => {
    setValues({ title: '',category:'', content: '' });
    dispatch(editblog({
      id: params.id,
      title: values.title,
      category:values.category,
      content: values.content
    }));
    navigate('/');
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="title"
        value={values.title}
        onChange={(e) => setValues({ ...values, title: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Title' }}
      />
      <br />
      <TextField
        label="category"
        value={values.category}
        onChange={(e) => setValues({ ...values, category: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Travel/Food' }}
      />
      <br />
      <TextField
        label="content"
        value={values.content}
        onChange={(e) => setValues({ ...values, content: e.target.value })}
        inputProps={{ type: 'content', placeholder: 'Description' }}
      />
      <Button onClick={handleEditblog}>Edit</Button>
      <Button onClick={goBack}>Back</Button>

    </div>
    
    
  )
 
}

export default Editblog