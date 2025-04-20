import { Footer } from "../components/Footer";
import { Slider } from "../components/HeroSlider";
import { PopularRecipes } from "../components/PopularRecipes/PopularRecipes";

export const Home = () => {
  return (
    <div className="main">
      <Slider />
      <PopularRecipes />
      <Footer />
    </div>
  );
}