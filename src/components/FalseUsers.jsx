import React from 'react'

function FalseUsers({u}) {
  return (
    <div className="Users flex w-10 items-center">
    <div className="avatar avatar-offline">
      <div className="w-14 rounded-full">
        <img src={u.photoURL} />
      </div>
    </div>
    <p>{u.displayName}</p>
    </div>
  )
}

export default FalseUsers