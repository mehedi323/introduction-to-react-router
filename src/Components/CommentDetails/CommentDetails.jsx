import { useLoaderData } from "react-router-dom";

 
const CommentDetails = () => {
    const comment = useLoaderData()
    const {name, email , body}= comment;
    return (
        <div className="bg-green-500 p-4 rounded-2xl border-2 border-red-500 border-solid">
            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
            <h2>Body: {body}</h2>
        </div>
    );
};

export default CommentDetails;