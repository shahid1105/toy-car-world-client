import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SubCategories from "./SubCategory/SubCategories";

const Category = () => {
  const [categorys, setCategory] = useState([]);
  const [activeTab, setActiveTab] = useState("Regular carToys");

  useEffect(() => {
    fetch(`http://localhost:5000/alltoys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
        console.log(data);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="mt-8">
      <h2 className="text-center text-5xl font-bold text-orange-400 mb-24">
        Shop by category
      </h2>
      <Tabs>
        <TabList>
          <Tab>
            <h1
              onClick={() => handleTabClick("Regular carToys")}
              className="text-xl font-bold text-orange-400">
              Regular carToys
            </h1>
          </Tab>
          <Tab>
            <h1
              onClick={() => handleTabClick("Truck Toys")}
              className="text-xl font-bold text-orange-400">
              Truck Toys
            </h1>
          </Tab>
          <Tab>
            <h1
              onClick={() => handleTabClick("Police carToys")}
              className="text-xl font-bold text-orange-400">
              Police carToys
            </h1>
          </Tab>
          <Tab>
            <h1
              onClick={() => handleTabClick("Fire truckToys")}
              className="text-xl font-bold text-orange-400">
              Fire truckToys
            </h1>
          </Tab>
          <Tab>
            <h1
              onClick={() => handleTabClick("sports Toys")}
              className="text-xl font-bold text-orange-400">
              sports Toys
            </h1>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorys.map((category) => (
              <SubCategories
                key={category._id}
                category={category}></SubCategories>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
