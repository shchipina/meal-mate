import { Link } from "react-router-dom";

export const DetailsButton = ({id}) => {
  return (
    <Link
      to={`/recipes/details/${id}`}
      className="border border-b-[#333] rounded-2xl px-[24px] py-[6px] uppercase hover:bg-[#9FDC26]"
    >
      View recipe
    </Link>
  );
};
 