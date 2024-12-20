import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import axios from "axios";
import { api } from "@/lib/utils";
export const BlogContext = createContext();
// reducer function

// reducer is a function


  
  export const BlogContextProvider = ({ children }) => {
    // initilization of the dispatcher with the reducer function and the default value

    const reducer = (state, action) => {
      switch (action.type) {
        case "SET_BLOG":
          return action.payload;
        case "DLT_BLOG": {
          return state.filter((item) => item._id != action.payload);
        }
        case "ADD_BLOG": {
          /*  
          QUES: is this the proper way of updating the array state
    
          */
          return [...state, action.payload];
        }
        case "EDIT_BLOG": {
          return state.map((item) =>
            item._id === action.payload._id ? action.payload : item
          );
        }
        default:
          return;
      }
    };
    const [blogCollection, dispatcher] = useReducer(reducer, null);
    const [adminBlogs , setAdminBlogs] = useState(null);
    const setBlog = (payload) => {
      dispatcher({
        type: "SET_BLOG",
        payload,
      });
    };
  
    const deleteBlog = (payload) => {
      dispatcher({
        type: "DLT_BLOG",
        payload,
      });
    };
  
    const addBlog = (payload) => {
      // payload refers to the data that i will received
      dispatcher({
        type: "ADD_BLOG",
        payload,
      });
    };
  
    const editBlog = (payload) => {
      dispatcher({
        type: "EDIT_BLOG",
        payload,
      });
    };
  
    useEffect(() => {
      const fetchAllBlog = async () => {
        try {
          const { data } = await axios.get(`http://localhost:3001/v1/api/user/getBlog`);
          console.log(data.blog);
          setBlog(data.blog);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchAllBlog();
    }, []);

  return (
    <BlogContext.Provider
      value={{
        blogCollection,
        deleteBlog,
        setBlog,
        addBlog,
        editBlog,
        adminBlogs,
        setAdminBlogs
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
