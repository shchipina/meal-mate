import { Slider } from "../components/HeroSlider";
import { PopularRecipes } from "../components/PopularRecipes";

export const Home = () => {
  return (
    <div>
      <Slider />
      <PopularRecipes />
    </div>
  );
}