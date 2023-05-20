import { Link } from "react-router-dom";

const AllToysTableRow = ({ toy }) => {
  const { _id, name, subCategory, availableQuantity, price, seller } = toy;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{seller}</div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{availableQuantity}</td>
      <th>
        <Link to={`/details/${_id}`}>
          <button className="btn btn-sm">details</button>
        </Link>
      </th>
    </tr>
  );
};

export default AllToysTableRow;
