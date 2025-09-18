import React from 'react'
import { Link } from 'react-router'

function UserDetailComponent() {

    const users = [
        {name : 'sam' , id : 1},
        {name : 'max' , id : 2},
        {name : 'sunny' , id : 3},
        {name : 'ghost' , id : 4},
        {name : 'david' , id : 5},
    ]


  return (
    <div className='m-2 p-1'>
        <div className='flex flex-col gap-2 text-green-500'>
                {
                    users.map((user,index)=>(
                        <div key={index}>
                            <Link to={`/userdetails/${user.id}`}>{user.name}</Link>
                        </div>
                    ))
                }
        </div>
    </div>
  )
}

export default UserDetailComponent