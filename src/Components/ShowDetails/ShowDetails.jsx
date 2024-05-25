import { useLoaderData } from "react-router-dom";

 

const ShowDetails = () => {
    const post = useLoaderData();  
    const {title, body}= post;
    return (
        <div>
            <h3>This is ShowDetails: {title}</h3>
            <h4>Body: {body}</h4>
        </div>
    );
};

export default ShowDetails;