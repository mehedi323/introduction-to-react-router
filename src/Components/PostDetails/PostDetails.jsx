import { useLoaderData } from "react-router-dom";

 

const PostDetails = () => {
    const users = useLoaderData();
    console.log(users);
    const {name, email}= users;
    return (
        <div>
            <h2>Post title: {name}</h2>
            <h3>Email: {email}</h3>
        </div>
    );
};

export default PostDetails;