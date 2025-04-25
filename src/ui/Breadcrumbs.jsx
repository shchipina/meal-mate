import { Link, useLocation } from "react-router-dom";
import { LiaHomeSolid } from "react-icons/lia";

export const Breadcrumbs = () => {
  const location = useLocation();
  const { pathname } = location;

  const pathnames = [];

  pathname.split("/").map(path => {
    if (path !== "") {
      pathnames.push(path);
    }
  });

  const isID = (path) => !isNaN(Number(path));

  const visiblePathnames = isID(pathnames[pathnames.length - 1])
    ? pathnames.slice(0, -1)
    : pathnames;

  return (
    <div className="flex items-center text-[#555]">
      <Link to="/" className="text-[14px] hover:text-[#EE6352] hover:underline transition-all duration-150">
        <LiaHomeSolid />
      </Link>

      {visiblePathnames.map((path, index) => {
        const normalizePath = path.split("-").join(" ");
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <span key={to}>
            <span className="mx-2">/</span>
            <Link to={to}
              className="capitalize text-[14px] hover:text-[#EE6352] hover:underline transition-all duration-150">
              {normalizePath}
            </Link>
          </span>
        )
      })}
    </div>
  );
};
