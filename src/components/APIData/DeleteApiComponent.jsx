import { useEffect, useState } from "react";

const DeleteApiComponent = () =>{
    const url = "http://localhost:3000/comments";

    const [comments,setComments] = useState([]);

    const getComments = async ()=>{
        let response = await fetch(url);
        response = await response.json();
        setComments([...response]);
    }

    const handleDeleteComment = async (id)=>{
        
        let response = await fetch(url+'/'+id,{
            method : 'Delete'
        });
        response = await response.json();
        console.log(response);
        getComments();
    }

    useEffect(()=>{
        getComments();
    },[]);

    return (
        <div>
            <table>
                    <tr>
                        <th className="px-10">Text</th>
                        <th className="px-10">Action</th>
                    </tr>
                        {
                            comments.map((comment,index)=>(
                                <tr key={index}>
                                    <td className="px-10">{comment.text}</td>
                                    <td className="px-10"><button className="m-1 p-1 rounded-sm bg-red-500" onClick={()=>{
                                        handleDeleteComment(comment.id)
                                    }}>Delete</button></td>
                                </tr>
                            ))
                        }
            </table>
        </div>
    )
}

export default DeleteApiComponent;