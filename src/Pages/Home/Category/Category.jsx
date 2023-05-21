import { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import SubCategories from "./SubCategory/SubCategories";

const Category = () => {
  const [categorys, setCategory] = useState([]);

  const [activeTab, setActiveTab] = useState("TruckToys");

  useEffect(() => {
    fetch(`http://localhost:5000/alltoys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
        // console.log(data);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="mt-8">
        <h2 className="text-center text-5xl font-bold text-orange-400 mb-8">
          Shop by category
        </h2>
        <p className="text-gray-500 md:px-44 lg:px-44 ms-4 mb-24">
          Toy cars are miniature replicas of real vehicles, designed for
          children is play and enjoyment. They are typically made of plastic or
          die-cast metal and come in various shapes, sizes, and colors. Toy cars
          often feature details such as moving wheels, opening doors, and
          realistic designs to enhance the imaginative play experience.
        </p>
        <div className="md:flex lg:flex md:gap-6 lg:gap-6 md:justify-center ;lg:justify-center">
          <div
            onClick={() => handleTabClick("RegularCarToys")}
            className={`btn btn-accent text-white font-bold ${
              activeTab == "RegularCarToys" ? " bg-red-400 text-white" : ""
            }`}>
            RegularCarToys
          </div>
          <div
            onClick={() => handleTabClick("TruckToys")}
            className={`btn btn-accent text-white font-bold ${
              activeTab == "TruckToys" ? " bg-red-400 text-white" : ""
            }`}>
            TruckToys
          </div>
          <div
            onClick={() => handleTabClick("PoliceCarToys")}
            className={`btn btn-accent text-white font-bold ${
              activeTab == "PoliceCarToys" ? " bg-red-400 text-white" : ""
            }`}>
            PoliceCarToys
          </div>
          <div
            onClick={() => handleTabClick("FireTruckToys")}
            className={`btn btn-accent text-white font-bold ${
              activeTab == "FireTruckToys" ? " bg-red-400 text-white" : ""
            }`}>
            FireTruckToys
          </div>
          <div
            onClick={() => handleTabClick("sportsToys")}
            className={`btn btn-accent text-white font-bold ${
              activeTab == "sportsToys" ? " bg-red-400 text-white" : ""
            }`}>
            sportsToys
          </div>
        </div>
        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-14 lg:gap-14">
            {categorys.map((category) => (
              <SubCategories
                key={category._id}
                category={category}></SubCategories>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
