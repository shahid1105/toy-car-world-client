import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
  const myToy = useLoaderData();
  useTitle("myToys | updateToy");

  const { _id, description, availableQuantity, price } = myToy || {};

  const handleUpdateAToy = (e) => {
    e.preventDefault();
    const form = e.target;

    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;
    const price = form.price.value;
    const img = form.img.value;

    const updateToy = {
      availableQuantity,
      description,
      price,
      img,
    };

    fetch(`https://toy-car-world-server.vercel.app/mytoy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Updated toy successfully");
        }
      });
  };
  return (
    <div className="bg-base-200 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 mt-8">Update Toy</h1>
      <form onSubmit={handleUpdateAToy}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              defaultValue={price}
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              defaultValue={availableQuantity}
              type="text"
              name="availableQuantity"
              placeholder="Available Quantity"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details Description</span>
          </label>
          <textarea
            defaultValue={description}
            placeholder="Details Description"
            type="text"
            name="description"
            id=""
            cols="10"
            rows="5"
            className="border-spacing-1 shadow-md p-6"></textarea>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary"
            type="submit"
            value="Updated Toy"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
