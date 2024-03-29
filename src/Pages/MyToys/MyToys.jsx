import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRow from "./MyToysRow";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  useTitle("myToys");

  useEffect(() => {
    fetch(`https://toy-car-world-server.vercel.app/mytoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);

  const handleDelete = (_id) => {
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`https://toy-car-world-server.vercel.app/mytoys/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = myToys.filter((myToy) => myToy._id !== _id);
            setMyToys(remaining);
          }
        });
    }
  };

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
            <th>Update</th>
            <th>Delete</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {myToys.map((myToy) => (
            <MyToysRow
              key={myToy._id}
              myToy={myToy}
              handleDelete={handleDelete}></MyToysRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
