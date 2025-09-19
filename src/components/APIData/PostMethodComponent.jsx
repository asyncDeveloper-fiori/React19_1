import { useState } from "react";

const PostMethodComponent = (e)=>{
    e.preventDefault;
    const [title,setTitle] = useState('');
    const [views,setViews] = useState(0);
    const addPost=async ()=>{
        const url = 'http://localhost:3000/posts';
        let response = await fetch(url,{
            method : 'Post',
            body : JSON.stringify({title,views})
        });
        console.log(response);
    }
     return(
        <div>
            <form action="">
                <input type="text" placeholder="title" className="bg-zinc-500 mx-1 p-1" onChange={(e)=>setTitle(e.target.value)} />
                <input type="number" placeholder="views" className="bg-zinc-500 mx-1 p-1" onChange={(e)=>setViews(e.target.value)} />
                <button className="bg-red-400 rounded-sm hover:bg-red-500 p-1" onClick={addPost} >New Post</button>
            </form>
        </div>
     )
}

export default PostMethodComponent;