import { useEffect, useState } from "react";
import OfferCard from "./OfferCard";
import Aos from "aos";
import "aos/dist/aos.css";

const SpecialOffer = () => {
  const [offers, setOffer] = useState([]);
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setOffer(data);
      });
  }, []);

  const sliceOffers = offers.slice(1, 7);

  return (
    <div data-aos="fade-up">
      <h1 className="text-3xl font-bold text-center text-red-400 mt-36 mb-24">
        Special Offer
      </h1>
      <p
        className="text-gray-500 md:px-44 lg:px-44 ms-4 mb-24"
        data-aos="fade-left">
        Toy cars are miniature replicas of real vehicles, designed for children
        is play and enjoyment. They are typically made of plastic or die-cast
        metal and come in various shapes, sizes, and colors. Toy cars often
        feature details such as moving wheels, opening doors, and realistic
        designs to enhance the imaginative play experience.
      </p>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        data-aos="fade-right">
        {sliceOffers.map((offer) => (
          <OfferCard key={offer._id} offer={offer}></OfferCard>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffer;
