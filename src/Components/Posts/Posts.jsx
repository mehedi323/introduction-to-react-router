import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

 
const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>This is Post: {posts.length} </h2>

            <div className="grid grid-cols-3 gap-8 bg-gray-200 rounded-xl m-5 p-8">
                {
                    posts.map(post=> <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;