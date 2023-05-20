import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import SpecialOffer from "../SpecialOffer/SpecialOffer";
import PhotoGallery from "../photoGallery/PhotoGallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PhotoGallery></PhotoGallery>
      <Category></Category>
      <SpecialOffer></SpecialOffer>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
