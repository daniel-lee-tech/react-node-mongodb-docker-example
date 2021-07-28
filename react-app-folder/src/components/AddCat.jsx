import { addCat } from "../apiCalls/cats";

export default function AddCat(props) {
  const { updateAllCats } = props;

  async function submitHandler(event) {
    event.preventDefault();

    let { name, age, adopted } = event.target.elements;
    name = name.value;
    age = age.value;
    adopted = adopted.checked;

    await addCat({ name, age, adopted });
    updateAllCats();
  }

  return (
    <form onSubmit={submitHandler}>
      <h2>Add New Cat</h2>
      <label htmlFor="name">Name</label>
      <br />
      <input name="name" type="text" required />
      <br />

      <label htmlFor="age">Age</label>
      <br />
      <input name="age" type="number" required />
      <br />

      <label htmlFor="adopted">Adopted?</label>
      <br />
      <input name="adopted" type="checkbox" />
      <br />

      <input type="submit" value="Add Cat" />
    </form>
  );
}
