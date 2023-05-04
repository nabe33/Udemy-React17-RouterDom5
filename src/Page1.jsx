import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);
  const history = useHistory();

  const onClickdetailA = () => {
    history.push("/page1/detailA");
  };

  return (
    <div>
      <h1>Page 1</h1>
      <Link to={{ pathname: "page1/detailA", state: arr }}>Detail A</Link>
      <br />
      <Link to="page1/detailB">Detail B</Link>
      <br />
      <button onClick={onClickdetailA}>DetailA</button>
    </div>
  );
};
