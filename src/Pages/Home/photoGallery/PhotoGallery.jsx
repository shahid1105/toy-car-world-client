import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import fireTruck from "../../../assets/images/fire-truck/fire-truck (1).png";
import fireTruck2 from "../../../assets/images/fire-truck/fire-truck (3).png";
import fireTruck3 from "../../../assets/images/fire-truck/fire-truck (4).png";
import regularCarToys from "../../../assets/images/regular-car/regular-car (1).png";
import regularCarToys1 from "../../../assets/images/regular-car/regular-car (2).png";
import regularCarToys2 from "../../../assets/images/regular-car/regular-car (3).png";
import sportsToys from "../../../assets/images/sports-toy/sports-toy.png";
import sportsToys1 from "../../../assets/images/sports-toy/sports.toy (1).png";
import sportsToys2 from "../../../assets/images/sports-toy/sports.toy.png";
import truckToys from "../../../assets/images/truck/truck-toy.png";
import truckToys1 from "../../../assets/images/truck/truck-toy (1).png";
import truckToys2 from "../../../assets/images/truck/truck-toy (2).png";
import policeToys from "../../../assets/images/police-toy/police-toy (1).png";
import policeToys1 from "../../../assets/images/police-toy/police-toy (2).png";
import policeToys2 from "../../../assets/images/police-toy/police-toy (3).png";

const PhotoGallery = () => {
  return (
    <div className="mt-12 mb-36">
      <div className="text-center">
        <h1 className="text-2xl text-violet-500 font-bold">Photo Albums</h1>
        <p className="text-gray-400 md:ps-24 md:pr-24 lg:ps-24 lg:pr-24 mt-5">
          Car toy photo albums offer a delightful glimpse into the world of
          miniature vehicles. These albums showcase a variety of car models,
          featuring vivid colors and intricate designs. Through the captivating
          images, you can witness the cars in action, engaging in imaginative
          play and creating thrilling scenes. Each photo album captures the
          essence of the joy and nostalgia associated with playing with car
          toys, evoking delightful memories and igniting the imagination.
        </p>
      </div>
      <div className="mt-8">
        <Tabs>
          <TabList>
            <Tab>
              <h1 className="text-xl font-bold text-violet-500">
                Regular carToys photo
              </h1>
            </Tab>
            <Tab>
              <h1 className="text-xl font-bold text-violet-500">
                Truck Toys photo
              </h1>
            </Tab>
            <Tab>
              <h1 className="text-xl font-bold text-violet-500">
                Police carToys photo
              </h1>
            </Tab>
            <Tab>
              <h1 className="text-xl font-bold text-violet-500">
                Fire truckToys photo
              </h1>
            </Tab>
            <Tab>
              <h1 className="text-xl font-bold text-violet-500">
                sports Toys photo
              </h1>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={regularCarToys}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={regularCarToys1}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={regularCarToys2}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={truckToys}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={truckToys1}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={truckToys2}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={policeToys}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={policeToys1}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={policeToys2}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={fireTruck}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={fireTruck2}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={fireTruck3}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={sportsToys}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={sportsToys1}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={sportsToys2}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default PhotoGallery;
