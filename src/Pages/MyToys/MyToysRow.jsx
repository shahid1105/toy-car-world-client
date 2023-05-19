import { Link } from "react-router-dom";

const MyToysRow = ({ myToy }) => {
  const { seller, name, subCategory, availableQuantity, price, img } =
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
          <Link to="/details">
            <button className="btn btn-sm">details</button>
          </Link>
        </th>
        <th>
          <Link to="/details">
            <button className="btn btn-sm">details</button>
          </Link>
        </th>
      </tr>
    </>
  );
};

export default MyToysRow;
