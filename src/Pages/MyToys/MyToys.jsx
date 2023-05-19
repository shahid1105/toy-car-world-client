import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);
  return (
    <div>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Photo</th>
            <th>Seller</th>
            <th>ToyName</th>
            <th>SubCategory</th>
            <th>Price</th>
            <th>AvailableQuantity</th>
            <th>Details</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {myToys.map((myToy) => (
            <MyToysRow key={myToy._id} myToy={myToy}></MyToysRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
