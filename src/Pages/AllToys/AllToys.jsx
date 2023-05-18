import { useEffect, useState } from "react";
import AllToysCard from "./AllToysCard";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {toys.map((toy) => (
          <AllToysCard key={toy.id} toy={toy}></AllToysCard>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
