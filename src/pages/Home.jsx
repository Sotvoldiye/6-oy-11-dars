import { useCollection } from "../hooks/useCollection";

function Home() {
  const { data } = useCollection("recepies");
  // console.log(data)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-3 px-8">
      {data &&
        data.map((r, i) => (
          <div key={i} className="p-4 border rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-2">{r.title}</h2>
            <p className="text-gray-700 mb-1">{r.description}</p>
            <p className="text-sm text-gray-500">⏱ {r.cookingTime} minutes</p>
            <p>
              Ingredients:{" "}
              {r.ingridents && r.ingridents.map((e)=>{return(<i key={e}>{e}</i>)})}
            </p>
          </div>
        ))}
    </div>
  );
}

export default Home;
