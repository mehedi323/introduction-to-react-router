import { Link } from "react-router-dom";

 
const Comment = ({comment}) => {
    const { id, name , email} = comment;
    return (
        <div className="bg-green-500 p-4 rounded-2xl border-2 border-red-500 border-solid">
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
            <Link to={`/comment/${id}`}><button className="btn btn-secondary mt-5">Comment Details</button></Link>
        </div>
    );
};

export default Comment;