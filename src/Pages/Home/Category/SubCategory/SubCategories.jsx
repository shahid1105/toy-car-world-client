import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const SubCategories = ({ category }) => {
  const { name, img, subCategory, availableQuantity, price, rating } =
    category || {};
  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl h-72" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <div className="flex gap-5">
              <p className="text-orange-600 font-bold">
                price: <span>${price}</span>
              </p>
              <p className="text-orange-600 font-bold">
                Quantity: {availableQuantity}
              </p>
            </div>
            <p className="font-bold">Sub Category: {subCategory}</p>
            <p className="text-center mt-2 mr-2">
              <Rating
                readonly
                placeholderRating={rating}
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                fullSymbol={<FaStar></FaStar>}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategories;
