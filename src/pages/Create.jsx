  import FormInput from '../components/FormInput'
import FormTextarea from '../components/FormTextarea';
import { useCreateRecepice } from '../hooks/createRecepiec';
function Create() {
  const {isPending, recepies, recepiesed} = useCreateRecepice()
  const handleSubmit = (e)=>{
    e.preventDefault()
    const fromData = new FormData(e.target);
    const title = fromData.get("title")
    const cookingTime = fromData.get("cookingTime")
    const description = fromData.get("description")
    recepiesed(title, cookingTime, description)
    e.target.reset()
  }
  console.log(recepies)
  return <div className="py-5 px-3">
    <form action="" onSubmit={handleSubmit}>
      <h2 className='text-3xl font-bold'>Create New Recepies</h2>
      <FormInput name="title" label="Title" type="text"/>
      <FormInput name="cookingTime" label="CookingTime" type="text"/>
      <FormTextarea name="description" label="Description"/>
      <button className='btn btn-primary'>Add</button>
    </form>
  </div>;
}

export default Create;
