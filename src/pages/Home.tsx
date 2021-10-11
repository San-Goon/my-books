import ListContainer from "../containers/ListContainer";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { RootState } from "../types";

export default function Home() {
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.token
  );

  if (token === null) {
    return <Redirect to="/signin" />;
  }
  return <ListContainer />;
}
