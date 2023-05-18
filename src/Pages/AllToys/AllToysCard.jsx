import { Link } from "react-router-dom";

const AllToysCard = ({ toy }) => {
  const { name, picture, price, rating } = toy;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-xl h-72" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Price: {price}</p>
          <p>{rating}</p>
          <div className="card-actions">
            <Link to="/details">
              <button className="btn bg-violet-600">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToysCard;
