import { createContext, useState } from "react";
import axios from "axios";

const PostContext = createContext();

const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState(null);
    const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

    const fetchData = () => {
        axios.get(`${baseApiUrl}/posts`)
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <PostContext.Provider value={{ posts, fetchData }}>
            {children}
        </PostContext.Provider>
    );
};



export { PostContext, PostProvider };
