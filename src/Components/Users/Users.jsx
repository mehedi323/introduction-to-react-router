import { Link } from "react-router-dom";

 

 
const Users = ({users}) => {
    const {id, name, email, phone} = users;
    return (
        <div className="bg-green-200 p-4 rounded-2xl border-2 border-red-500 border-solid">
            <h2>Name: {name}</h2>
            <h3>Email: {email}</h3>
            <h4>Phone: {phone}</h4> 
            <Link to={`/users/${id}`}><button>User Details</button></Link>
        </div>
    );
};

export default Users;