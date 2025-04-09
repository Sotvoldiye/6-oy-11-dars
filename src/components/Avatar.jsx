import React from 'react'

function Avatar({user}) {
  return (
<div className="flex gap-3 items-center mr-5">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                <img src={user.photoURL} alt={user.displayName} />
              </div>
            </div>
            <div>{user.displayName}</div>
          </div>  )
}

export default Avatar