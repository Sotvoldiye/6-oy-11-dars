import React from 'react'

function TrueUsers({u}) {
  return (
    <div className="flex flex-row w-10 items-center ">
    <div className="avatar avatar-online">
      <div className="w-14 rounded-full">
        <img src={u.photoURL} />
      </div>
    </div>
    <p>{u.displayName}</p>
    </div>  )
}

export default TrueUsers