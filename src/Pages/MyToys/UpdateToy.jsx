import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
  const myToy = useLoaderData();
  console.log(myToy);

  const { description, availableQuantity, price, img } = myToy || {};
  console.log(price);
  return (
    <div className="bg-base-200 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 mt-8">Update Toy</h1>
      <form>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              defaultValue={img}
              type="text"
              name="img"
              placeholder="Photo URL"
              className="input input-bordered"
            />
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
