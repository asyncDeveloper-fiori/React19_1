import { Link } from "react-router";

export const NavBar = () => {
    return (
    <div className="flex gap-4 p-4 bg-zinc-300 text-zinc-900">
        <h1 className="text-3xl font-bold">NavBar</h1>
        <div className=" flex gap-4 ml-[55%]">
        <Link className="my-2" to="/">Home</Link>
        <Link className="my-2" to="/about">About</Link>
        <Link className="my-2" to="/contact">Contact</Link>
        <Link className="my-2" to='/userdetail'>User Details</Link>
        <Link className="my-2" to="/userData">User Data API</Link>
        </div>
    </div>    )
};