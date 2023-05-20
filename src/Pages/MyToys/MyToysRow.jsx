import { Link } from "react-router-dom";

const MyToysRow = ({ myToy, handleDelete }) => {
  const { _id, seller, name, subCategory, availableQuantity, price, img } =
    myToy || {};

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>{seller}</td>
        <td>{name}</td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{availableQuantity}</td>
        <th>
          <Link to={`/updateToy/${_id}`}>
            <button className="btn btn-sm">Update</button>
          </Link>
        </th>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-square btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
      </tr>
    </>
  );
};

export default MyToysRow;
