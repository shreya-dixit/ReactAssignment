import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { addblog } from "./blogSlice"
import {  createContext } from "react";

const Addblog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const UserContext = createContext()
  const [user, setUser] = useState(" ");



  const [values, setValues] = useState({
    title: '',
    content: ''
  });

  const handleAddblog = () => {
    setValues({ title: '',category:'', content: '' });
    dispatch(addblog({
      id: uuidv4(),
      title: values.title,
      category:values.category,
      content: values.content
    }));
    navigate('/');
  }

  return (
    
    <div classtitle="mb-3">
      <TextField
        label="Title"
        value={values.title}
        onChange={(e) => setValues({ ...values, title: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Rameshwaram Temple' }}
      />
      <br />
      <TextField 
        label="Category" 
        value={values.category}
        onChange={(e) => setValues({ ...values, category: e.target.value })}
        inputProps={{ type: 'category', placeholder: 'Food/Travel Blogs' }}
      />
      <TextField 
        label="Content" 
        value={values.content}
        onChange={(e) => setValues({ ...values, content: e.target.value })}
        inputProps={{ type: 'content', placeholder: 'Description' }}
      />
     <UserContext.Provider value={user}>
      <h1>{`  `}</h1>
      <store user={user} />
      
    </UserContext.Provider>

      <Button onClick={handleAddblog}>Submit</Button>
    </div>
  )
}

export default Addblog