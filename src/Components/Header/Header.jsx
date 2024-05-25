import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-around items-center text-4xl font-bold bg-yellow-500 p-4 rounded-2xl">
            <h2>This is Nav Link</h2>
            <nav className="">
                <Link className="mr-5" to='/'>Home</Link>
                <Link className="mr-5" to='/about'>About</Link>
                <Link className="mr-5" to='/contact'>Contact</Link>
                <Link className="mr-5" to='/posts'>Posts</Link>
                <Link className="mr-5" to='/comments'>Comments</Link>
                <Link className="mr-5" to='/user'>User</Link>
            </nav>
        </div>
    );
};

export default Header;