import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";

 
const Comments = () => {
    const comments = useLoaderData();
    return (
        <div className="text-2xl font-bold">
            <h2>This is Comments: {comments.length} </h2>
            <div className="grid grid-cols-3 gap-8 bg-gray-200 rounded-xl m-5 p-8">
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
                }
            </div>
        </div>
    );
};

export default Comments;