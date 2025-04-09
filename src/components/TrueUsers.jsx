import React from 'react'

function TrueUsers({u}) {
  return (
    <div className="flex flex-row w-10 items-center gap-2">
    <div className="avatar avatar-online">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                <img src={u.photoURL} alt={u.displayName} />
              </div>
            </div>
            <div>{u.displayName}</div>
    </div>  )
}

export default TrueUsers