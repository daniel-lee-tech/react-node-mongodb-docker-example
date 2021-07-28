import { updateCat, deleteCat } from "../apiCalls/cats";

export function Cat(props) {
  const { cat, updateAllCats } = props;

  function deleteHandler(id) {
    deleteCat(id).then(() => updateAllCats());
  }

  async function submitHandler(event) {
    event.preventDefault();

    let { id, name, age, adopted } = event.target.elements;
    id = id.value;
    name = name.value;
    age = age.value;
    adopted = adopted.checked;

    await updateCat(id, name, age, adopted);
    updateAllCats();
  }

  return (
    <div>
      <hr />
      <form onSubmit={submitHandler}>
        <input type="hidden" name="id" defaultValue={cat._id} />
        <label htmlFor="name">Name</label>
        <br />
        <input name="name" type="text" defaultValue={cat.name} required />
        <br />

        <label htmlFor="age">Age</label>
        <br />
        <input name="age" type="number" defaultValue={cat.age} required />
        <br />

        <label htmlFor="adopted">Adopted?</label>
        <br />

        <input name="adopted" type="checkbox" defaultChecked={cat.adopted} />
        <br />

        <input type="submit" value="Update Cat" />
      </form>
      <button onClick={() => deleteHandler(cat._id)}>Delete</button>
      <hr />
    </div>
  );
}
