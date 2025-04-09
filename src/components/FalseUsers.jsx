import React from 'react'

function FalseUsers({u}) {
  return (
    <div className="flex w-10 items-center gap-2">
  <div className="avatar avatar-offline">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                <img src={u.photoURL} alt={u.displayName} />
              </div>
            </div>
            <div>{u.displayName}</div>
    </div>
    
  )
}

export default FalseUsers