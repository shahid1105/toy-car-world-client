import { useEffect, useState } from "react";
import AllToysTableRow from "./AllToysTableRow";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  useTitle("allToys");

  useEffect(() => {
    fetch("https://toy-car-world-server.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(`https://toy-car-world-server.vercel.app/search/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        console.log(data);
      });
  };

  return (
    <div>
      <div className="text-center mt-5 mb-12">
        <h1 className="text-4xl font-bold text-violet-400">All Toys</h1>
        <p className="mt-5 ms-24 mr-24 text-gray-400">
          Toy cars are mini replicas of real vehicles, designed for children is
          play. They come in various styles, sizes, and colors, offering a
          realistic experience. With moving parts and intricate details, they
          enhance imaginative play and motor skills development. Affordable and
          popular, toy cars provide endless entertainment and encourage social
          interaction. They ignite a love for automobiles and inspire creative
          storytelling. Ultimately, toy cars are a beloved and timeless playtime
          favorite for kids.
        </p>
        <div className="mt-8">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="bg-base-200 p-3 rounded-md font-bold text-xl mr-2"
            type="search"
            placeholder="Search"
            name=""
            id=""
          />
          <button
            onClick={handleSearch}
            className="btn btn-active btn-ghost font-bold text-xl p-2">
            Search
          </button>
        </div>
      </div>

      <div>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
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
            {toys.map((toy) => (
              <AllToysTableRow key={toy._id} toy={toy}></AllToysTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
