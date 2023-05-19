import { Link } from "react-router-dom";

const AllToysTableRow = ({ toy }) => {
  const { name, subCategory, availableQuantity, price } = toy;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold"></div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{availableQuantity}</td>
      <th>
        <Link to="details">
          <button className="btn btn-ghost btn-xs">details</button>
        </Link>
      </th>
    </tr>
  );
};

export default AllToysTableRow;
