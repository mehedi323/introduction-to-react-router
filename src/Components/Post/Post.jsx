import { Link } from "react-router-dom";

 

const Post = ({post}) => {
    const { id ,title , body} = post;
    return (
        <div className="bg-green-500 p-4 rounded-2xl border-2 border-red-500 border-solid">
            <h3>Title: {title}</h3>
            <p><small>Body: {body}</small></p>
            <Link to={`/post/${id}`}>Show Details</Link>
        </div>
    );
};

export default Post;