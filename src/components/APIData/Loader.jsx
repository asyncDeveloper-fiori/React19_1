import React, { useEffect, useState } from 'react'

function Loader() {
    const [loader,setLoader] = useState(true);
    const [postData, setPostData] = useState([]);
    const getUserData = async ()=>{
        const url = 'http://localhost:3000/posts';
        let response = await fetch(url);
        response = await response.json();
        setPostData([...response]);
        setLoader(false)
    }
    useEffect(()=>{
        getUserData();
    } ,[])
  return (
    <div>
        {
            !loader ? <div>
                {
                    postData.map((post,index)=>(
                        <div key={index} className='flex gap5 m-1 p-1'>
                            <p className='m-1'>{post.title}</p>
                            <p className='m-1'>{post.views}</p>
                        </div>
                    ))
                }
            </div> : <h1>Loading...</h1>
        }
    </div>
  )
}

export default Loader