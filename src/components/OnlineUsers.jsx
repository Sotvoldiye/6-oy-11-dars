import { useCollection } from "../hooks/useCollection";
import FalseUsers from "./FalseUsers";
import TrueUsers from "./TrueUsers";

function OnlineUsers() {
  const { data } = useCollection("users");
  return (
    <div className="rounded-md ">
      {data &&
        data.map((u) => {
          console.log(u);
          return (
            <div key={u.id} className="flex items-center">
              <div className="flex w-auto justify-center ml-5 mt-3">
                {u.online ? <TrueUsers u={u} /> : <FalseUsers u={u} />}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default OnlineUsers;
