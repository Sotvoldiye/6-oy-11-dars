import { useCollection } from "../hooks/useCollection";
import FalseUsers from "./FalseUsers";
import TrueUsers from "./TrueUsers";

function OnlineUsers() {
  const { data } = useCollection("users");
  return (
    <div className="onlineUser rounded-md ">
      {data &&
        data.map((u) => {
          console.log(u);
          return (
            <div key={u.id} className="flex">
             <div className="flex w-auto">
             {u.online && (
               <TrueUsers u={u}/>
              )}
             </div>
              <div className="flex w-auto">
              {!u.online && (
              <FalseUsers u={u}/>
              )}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default OnlineUsers;
