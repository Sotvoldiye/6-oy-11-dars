import { useState } from "react";
import FormInput from "../components/FormInput";
import FormTextarea from "../components/FormTextarea";
// import { useCreateRecepice } from '../hooks/createRecepiec';
import { useFirestore } from "../hooks/useFirestore";

function Create() {
  const { addDocument } = useFirestore("recepies");
  const [ingridents, SetIngridents] = useState([" "]);

  const addIngridients = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target.parentElement.parentElement);
    const ingredient = formData.get("ingridient");
    console.log(ingredient);
    if (!ingridents.includes(ingredient)) {
      SetIngridents((prev) => {
        return [...prev, ingredient];
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const title = fromData.get("title");
    const cookingTime = fromData.get("cookingTime");
    const description = fromData.get("description");
    const Img =  fromData.get("Img")
    addDocument({ title, cookingTime, description, ingridents, Img });
    e.target.reset();
  };
  // console.log(recepies)
  return (
    <div className="py-5 px-3">
      <form action="" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold">Create New Recepies</h2>
        <FormInput name="title" label="Title" type="text" />
        <FormInput name="Img" type="text" label="Img"/>
        <FormInput name="cookingTime" label="CookingTime" type="number" />
        <div className="flex flex-col">
          <FormInput name="ingridient" label="Ingridents" type="text" />
          <button
            onClick={addIngridients}
            className="btn btn-primary self-end"
            type="button"
          >
            Add
          </button>

          <p>
            ingredient{" "}
            {ingridents.map((i) => {
              return <i key={i}>{i}</i>;
            })}
          </p>
        </div>
        <FormTextarea name="description" label="Description" />
        <button className="btn btn-primary">Add</button>
      </form>
    </div>
  );
}

export default Create;
