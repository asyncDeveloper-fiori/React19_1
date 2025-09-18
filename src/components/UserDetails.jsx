import React from 'react'
import { useParams } from 'react-router'

function UserDetails() {
    const params = useParams();
  return (
    <div>
        <h1>{params.id}</h1>
    </div>
  )
}

export default UserDetails