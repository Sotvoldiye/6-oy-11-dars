import { useCollection } from "../hooks/useCollection";

function OnlineUsers() {
  const { data } = useCollection("users");
  return (
    <div className="onlineUser">
      {data &&
        data.map((u) => {
          console.log(u);
          return (
            <div key={u.id}>
              {u.online && (
                <div className="flex w-10">
                <div className="avatar avatar-online">
                  <div className="w-14 rounded-full">
                    <img src={u.photoURL} />
                  </div>
                </div>
                <p>{u.displayName}</p>
                </div>
              )}
              {!u.online && (
                <div className="avatar avatar-offline">
                  <div className="w-24 rounded-full">
                    <img src={u.photoURL} />
                    <p>{u.displayName}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}

export default OnlineUsers;
