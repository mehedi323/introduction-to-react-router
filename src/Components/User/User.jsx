import { useLoaderData } from "react-router-dom";
import Users from "../Users/Users";

 
const User = () => {
    const user = useLoaderData();
    console.log(user);
    return (
        <div>
            <h3 className="text-2xl font-bold mt-10">Main Users: {user.length} </h3>
            <div className="grid grid-cols-3 gap-8 bg-gray-200 rounded-xl m-5 p-8">
                {
                    user.map(users=> <Users key={users.id} users={users}></Users>)
                }
            </div>
        </div>
    );
};

export default User;