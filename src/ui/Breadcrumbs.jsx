import { useLocation } from "react-router-dom";

export const Breadcrumbs = () => {
  const location = useLocation();
  const { pathname } = location;

  const pathnames = [];

  pathname.split("/").map(path => {
    if (path !== "") {
      pathnames.push(path);
    }
  });

  console.log(pathnames);

  return (
    <div></div>
  );
}