import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  // const location = useLocation();
  // console.log(location);
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(`search: ${search}`);
  console.log(query);

  return (
    <div>
      <h1>URL parameter</h1>
      <p>parameter: {id}</p>
      <p>query parameter: {query.get("name")}</p>
    </div>
  );
};
