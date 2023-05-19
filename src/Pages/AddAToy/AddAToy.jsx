import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const AddAToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddAToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const sellerEmail = form.sellerEmail.value;
    const sellerName = form.sellerName.value;
    const subCategory = form.subCategory.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const price = form.price.value;
    const img = form.img.value;
    const addAToy = {
      name,
      sellerEmail,
      sellerName,
      subCategory,
      rating,
      quantity,
      description,
      price,
      img,
    };
    console.log(addAToy);
  };

  return (
    <div>
      <form onSubmit={handleAddAToy}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Toy Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              name="sellerName"
              placeholder="Seller Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              defaultValue={user?.email}
              type="text"
              name="sellerEmail"
              placeholder="Seller Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub Category</span>
            </label>
            <select name="subCategory" className="input input-bordered">
              <option value="RegularCarToys">RegularCarToys</option>
              <option value="TruckToys">TruckToys</option>
              <option value="PoliceCarToys">PoliceCarToys</option>
              <option value=" FireTruckToys">FireTruckToys</option>
              <option value="sportsToys">sportsToys</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Available Quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
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
          <input className="btn btn-primary" type="submit" value="Add A Toy" />
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
