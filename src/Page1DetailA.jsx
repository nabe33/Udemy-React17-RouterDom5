import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  // const location = useLocation();
  // console.log(location);
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page 1 detail A</h1>
      {/* <p>{state}</p> */}
      <button onClick={onClickBack}>Back</button>
    </div>
  );
};
