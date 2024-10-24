import React, {useState,useEffect} from "react";
import axios from "axios";

const Post = () =>{
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        axios.post('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            console.log(response);
            setData(response.data);
            setLoading(false);
        })
        .catch(error=>{
            setError(error.message);
            setLoading(false);
        });
    },[error.message])

    if (loading) return <p>loading......</p>;
    if (error) return <p>error..{error}</p>;

    return(
        <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
        </div>
    )
}

export default Post;